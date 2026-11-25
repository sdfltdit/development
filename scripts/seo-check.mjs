/**
 * On-page SEO and quality gate. Reads every built HTML page in dist/ and fails the build on:
 * title or description length, duplicates, H1 count, heading skips, canonical problems,
 * invalid JSON-LD, images without alt, broken internal links, orphan pages and noindex/sitemap conflicts.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE = 'https://sdfltd.com';
const TITLE = [50, 60];
const DESC = [150, 160];

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name === 'index.html' ? [full] : [];
  });
}

function routeOf(file) {
  const rel = relative(DIST, file).split(sep).join('/').replace(/index\.html$/, '');
  return `/${rel}`;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const redirects = new Set(
  readFileSync(join(DIST, '_redirects'), 'utf8')
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => l.split(/\s+/)[0]),
);
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

const errors = [];
const pages = [];
for (const file of htmlFiles(DIST)) {
  const route = routeOf(file);
  if (route === '/404/') continue;
  const html = readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';
  const noindex = robots.includes('noindex');
  const headings = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const links = [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  pages.push({ route, title, desc, noindex, links });

  const fail = (msg) => errors.push(`${route}: ${msg}`);
  if (!noindex) {
    if (title.length < TITLE[0] || title.length > TITLE[1]) fail(`title is ${title.length} chars (want ${TITLE[0]}–${TITLE[1]}): "${title}"`);
    if (desc.length < DESC[0] || desc.length > DESC[1]) fail(`description is ${desc.length} chars (want ${DESC[0]}–${DESC[1]})`);
    if (!sitemapUrls.has(`${SITE}${route}`)) fail('indexable page missing from sitemap.xml');
  } else if (sitemapUrls.has(`${SITE}${route}`)) {
    fail('noindex page is listed in sitemap.xml');
  }
  if (!title) fail('missing <title>');
  if (!desc) fail('missing meta description');
  if (canonical !== `${SITE}${route}`) fail(`canonical "${canonical}" should be "${SITE}${route}"`);
  if (!/<meta property="og:image" content="https:\/\//.test(html)) fail('missing absolute og:image');
  const h1s = headings.filter((h) => h === 1).length;
  if (h1s !== 1) fail(`has ${h1s} <h1> elements (want exactly 1)`);
  headings.forEach((h, i) => {
    if (i > 0 && h - headings[i - 1] > 1) fail(`heading level skips from h${headings[i - 1]} to h${h}`);
  });
  for (const img of html.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="/.test(img[0])) fail(`image without alt: ${img[0].slice(0, 80)}`);
    if (!/\swidth="/.test(img[0]) || !/\sheight="/.test(img[0])) fail(`image without width/height: ${img[0].slice(0, 80)}`);
  }
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(block[1]);
      const text = JSON.stringify(data);
      if (/"Certification"|"hasCredential"|"HowTo"|"AggregateRating"|"Review"/.test(text)) fail('JSON-LD contains a disallowed type');
    } catch {
      fail('JSON-LD does not parse');
    }
  }
  if (!html.includes('href="#main"')) fail('missing skip link');
  if (/href="(mailto|tel):/i.test(html)) fail('mailto: or tel: link found; use the contact form or WhatsApp link instead');
  if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}/.test(html)) fail('email address found in the page; use the contact form link instead');
  const visible = html
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, ' ');
  if (visible.includes(';')) fail(`semicolon in visible copy near "${visible.slice(Math.max(0, visible.indexOf(';') - 40), visible.indexOf(';') + 20).replace(/\s+/g, ' ').trim()}"`);
  if (/Garment Manufacturers and Exporters|\bBGMEA\b/i.test(html)) fail('trade association name found; it must stay private');
  if (/\b(managed )?partner (facilit|printer)/i.test(visible)) fail('partner wording found; all production is in-house');
  if (/\+\d{6,}|\+\d{1,3}[\s-]\d{3,}|\b01[3-9]\d{2}[\s-]?\d{6}\b/.test(visible)) fail('phone number visible on the page; use the WhatsApp link instead');
  if (/lorem ipsum|TODO|FIXME|\{\{\w+\}\}/i.test(html)) fail('placeholder text or unreplaced {{token}} found');
}

const routes = new Set(pages.map((p) => p.route));
const inbound = new Map([...routes].map((r) => [r, 0]));
for (const page of pages) {
  for (const href of page.links) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split('#')[0].split('?')[0];
    if (!path) continue;
    const isFile = /\.[a-z0-9]+$/i.test(path);
    if (isFile) {
      if (!existsSync(join(DIST, path))) errors.push(`${page.route}: broken link to file ${path}`);
      continue;
    }
    if (!path.endsWith('/')) errors.push(`${page.route}: internal link without trailing slash ${path}`);
    if (routes.has(path)) {
      if (path !== page.route) inbound.set(path, (inbound.get(path) ?? 0) + 1);
    } else if (redirects.has(path)) {
      errors.push(`${page.route}: links to redirected URL ${path}; link to the final URL instead`);
    } else {
      errors.push(`${page.route}: broken internal link ${path}`);
    }
  }
}
for (const [route, count] of inbound) {
  const page = pages.find((p) => p.route === route);
  if (route !== '/' && count === 0 && !page?.noindex) errors.push(`${route}: orphan page (no internal links point to it)`);
}

const dupes = (key) => {
  const seen = new Map();
  for (const p of pages.filter((x) => !x.noindex)) seen.set(p[key], [...(seen.get(p[key]) ?? []), p.route]);
  for (const [value, list] of seen) if (list.length > 1) errors.push(`duplicate ${key} on ${list.join(', ')}: "${value}"`);
};
dupes('title');
dupes('desc');

if (errors.length) {
  console.error(`seo-check: ${errors.length} problem(s)\n` + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`seo-check: ${pages.length} pages passed (titles, descriptions, H1, headings, canonicals, schema, images, links, orphans, sitemap).`);
