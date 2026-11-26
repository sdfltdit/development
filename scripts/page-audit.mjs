/**
 * Page playbook audit. Reads the built pages in dist/ and checks them against the rules in CLAUDE.md:
 * readability, keyword placement and density, keyword cannibalization, marketing language,
 * repeated phrases, alt text and inbound links.
 *
 * Pages listed in STRICT have been brought up to the playbook and fail the build on any problem.
 * Every other page is reported with warnings until it is reworked, then added to STRICT.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const STRICT = new Set([
  '/',
  '/t-shirt-manufacturer/',
  '/hoodie-manufacturer/',
  '/joggers-manufacturer/',
  '/pants-trousers-manufacturer/',
  '/shorts-manufacturer/',
  '/shirt-manufacturer/',
  '/jacket-manufacturer/',
  '/activewear-manufacturer/',
  '/leggings-manufacturer/',
  '/tracksuit-manufacturer/',
  '/streetwear-manufacturer/',
  '/dress-manufacturer/',
  '/skirts-manufacturer/',
  '/loungewear-manufacturer/',
  '/kids-baby-clothing-manufacturer/',
  '/uniform-manufacturer/',
  '/underwear-manufacturer/',
  '/clothing-manufacturers-for-women/',
  '/plus-size-clothing-manufacturer/',
  '/modest-fashion-manufacturer/',
  '/merch-manufacturer/',
  '/school-uniform-manufacturer/',
  '/scrubs-manufacturer/',
  '/cotton-clothing-manufacturer/',
  '/linen-clothing-manufacturer/',
  '/bamboo-clothing-manufacturer/',
  '/denim-manufacturer/',
  '/swimwear-manufacturer/',
  '/sports-bra-manufacturer/',
  '/puffer-jacket-manufacturer/',
  '/blazer-manufacturer/',
  '/socks-manufacturer/',
  '/sweater-manufacturer/',
  '/hat-manufacturer/',
  '/lingerie-manufacturer/',
  '/rain-jacket-manufacturer/',
  '/varsity-jacket-manufacturer/',
  '/fleece-jacket-manufacturer/',
  '/softshell-jacket-manufacturer/',
  '/coat-manufacturer/',
  '/football-kit-manufacturer/',
  '/basketball-uniform-manufacturer/',
  '/cycling-jersey-manufacturer/',
  '/rugby-shirt-manufacturer/',
  '/baseball-uniform-manufacturer/',
  '/esports-jersey-manufacturer/',
  '/cheerleading-uniform-manufacturer/',
  '/dancewear-manufacturer/',
  '/martial-arts-uniform-manufacturer/',
  '/fightwear-manufacturer/',
  '/golf-apparel-manufacturer/',
  '/tennis-wear-manufacturer/',
  '/running-apparel-manufacturer/',
  '/compression-wear-manufacturer/',
  '/base-layer-manufacturer/',
  '/ski-wear-manufacturer/',
  '/chef-uniform-manufacturer/',
  '/apron-manufacturer/',
  '/lab-coat-manufacturer/',
  '/coverall-manufacturer/',
  '/hi-vis-workwear-manufacturer/',
  '/security-uniform-manufacturer/',
  '/hotel-uniform-manufacturer/',
  '/jumpsuit-romper-manufacturer/',
  '/maternity-clothing-manufacturer/',
  '/silk-pillowcase-manufacturer/',
  '/sleep-mask-manufacturer/',
  '/embroidered-patch-manufacturer/',
  '/pet-clothing-manufacturer/',
  '/cushion-cover-manufacturer/',
  '/dust-bag-manufacturer/',
  '/tote-bag-manufacturer/',
  '/cosmetic-pouch-manufacturer/',
  '/drawstring-bag-manufacturer/',
  '/scarf-manufacturer/',
  '/bandana-manufacturer/',
  '/neck-gaiter-manufacturer/',
  '/hair-accessories-manufacturer/',
  '/tie-manufacturer/',
  '/baby-bib-manufacturer/',
  '/tea-towel-manufacturer/',
  '/table-linen-manufacturer/',
  '/gloves-manufacturer/',
  '/shapewear-manufacturer/',
  '/evening-dress-manufacturer/',
  '/wedding-dress-manufacturer/',
  '/bodysuit-manufacturer/',
  '/suit-manufacturer/',
  '/menswear-manufacturer/',
  '/overalls-manufacturer/',
  '/kurta-manufacturer/',
  '/salwar-kameez-manufacturer/',
  '/hijab-manufacturer/',
  '/thobe-manufacturer/',
  '/polyester-clothing-manufacturer/',
  '/hemp-clothing-manufacturer/',
  '/modal-clothing-manufacturer/',
  '/french-terry-clothing-manufacturer/',
  '/corduroy-clothing-manufacturer/',
  '/wool-clothing-manufacturer/',
  '/lyocell-clothing-manufacturer/',
  '/velour-clothing-manufacturer/',
  '/tie-dye-clothing-manufacturer/',
  '/sublimated-clothing-manufacturer/',
  '/adaptive-clothing-manufacturer/',
  '/embroidery-service/',
  '/printing-service/',
  '/dyeing-service/',
  '/washing-service/',
  '/pattern-making-service/',
  '/tech-pack-service/',
  '/lab-dip-service/',
  '/quality-inspection-service/',
  '/fabric-sourcing/',
  '/trims-sourcing/',
  '/garment-labels/',
  '/how-to-create-a-tech-pack/',
  '/clothing-brand-startup-costs/',
  '/insights/aql-inspection-explained/',
  '/insights/fabric-gsm-explained/',
  '/insights/incoterms-explained/',
  '/insights/lab-dip-explained/',
  '/insights/printing-methods-compared/',
  '/insights/payment-terms-lc-vs-tt/',
  '/insights/how-to-calculate-landed-cost/',
  '/insights/moq-meaning-clothing/',
  '/insights/shade-variation-explained/',
  '/insights/garment-grading-explained/',
  '/insights/international-size-chart-guide/',
  '/insights/stitch-quality-spi-explained/',
  '/insights/avoiding-clothing-manufacturer-scams/',
  '/private-label-clothing-guide/',
  '/print-on-demand-vs-private-label/',
  '/guides/clothing-manufacturing-lead-time/',
  '/guides/how-clothing-manufacturers-work/',
  '/digital-3d-sample-vs-physical-sample/',
  '/bangladesh-vs-china-clothing-manufacturing/',
  '/bangladesh-vs-vietnam-clothing-manufacturing/',
  '/bangladesh-vs-india-clothing-manufacturing/',
  '/bangladesh-vs-pakistan-clothing-manufacturing/',
  '/insights/how-to-negotiate-with-clothing-manufacturers/',
  '/how-to-start-a-clothing-brand/',
  '/insights/hex-code-vs-pantone-tcx-for-clothing-manufacturers/',
  '/insights/oem-vs-odm-vs-cmt/',
  '/insights/customs-clearance-guide/',
  '/insights/fabric-types-glossary/',
  '/insights/manufacturing-costs/',
  '/how-to-scale-a-clothing-brand/',
  '/direct-factory-vs-trading-company-vs-buying-agent/',
  '/in-house-qc-vs-third-party-inspection-vs-no-inspection/',
  '/freight-forwarder-vs-factory-arranged-shipping-vs-diy/',
  '/tools/',
  '/tools/aql-calculator/',
  '/tools/garment-cost-calculator/',
  '/tools/gsm-converter/',
  '/tools/lead-time-calculator/',
  '/tools/shrinkage-calculator/',
  '/tools/moq-calculator/',
  '/tools/color-converter/',
  '/tools/delta-e-calculator/',
  '/tools/wash-care-label-generator/',
  '/tools/manufacturer-email-generator/',
  '/private-label-clothing-manufacturer/',
  '/low-moq-clothing-manufacturers/',
  '/clothing-manufacturers-for-startups/',
  '/cut-and-sew-service/',
  '/sample-service/',
  '/clothing-manufacturer-bangladesh/',
  '/how-to-find-clothing-manufacturer/',
  '/silk-clothing-manufacturer/',
  '/bathrobe-manufacturer/',
  '/sustainable-clothing-manufacturer/',
  '/organic-cotton-clothing-manufacturer/',
  '/recycled-clothing-manufacturer/',
  '/products/',
  '/all-services/',
  '/pricing/',
  '/work-process/',
]);
const HUB = '/';
const DIST = 'dist';
const MIN_FRE = 60;
const DENSITY = [0.8, 2.0];
const MAX_SENTENCE_WORDS = 30;
const MAX_ALT = 140;

const BANNED = [
  'world-class', 'world class', 'industry-leading', 'industry leading', 'leading manufacturer', 'leading supplier', 'premium quality',
  'high-quality', 'high quality', 'top quality', 'top-quality', 'best quality', 'best price', 'best prices', 'unmatched', 'superior quality',
  'state-of-the-art', 'cutting-edge', 'one-stop', 'hassle-free', 'second to none', 'trusted by', 'number one', '#1', 'amazing', 'excellent',
  'exceptional', 'unbeatable', 'we are the best', 'look no further', 'dream', 'elevate your', 'take your brand to the next level',
  'delve', 'seamless', 'seamlessly', 'robust', 'tailored solutions', 'fast-paced', "in today's", 'unlock', "it's worth noting", 'in conclusion',
  'game-changer', 'game changer', 'revolutionize', 'leverage', 'premier', 'renowned', 'top-notch', 'unparalleled', 'trusted partner',
  'trusted supplier', 'go-to', 'your search ends', 'ends here', 'we pride ourselves', 'passion',
];
const US_SPELLING = /\b(colors?|colorways?|programs?|organiz\w+|centers?|fibers?|customiz\w+|labeling|labeled|meters?|favorite|gray|catalog|analyze[ds]?|licensed?)\b/i;
const LEFTOVERS = [/\{\{[^}]*\}\}/, /\blorem\b/i, /\bTODO\b/, /\bTBD\b/, /\bplaceholder\b/i, /\bundefined\b/, /\bNaN\b/, /\[object Object\]/];

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const strip = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const lower = (s) => s.toLowerCase();
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const kwRegex = (k) => new RegExp(`(?<![a-z-])${esc(lower(k)).replace(/t-shirt/g, 't-?shirt').replace(/ /g, '[\\s-]+')}s?(?![a-z])`, 'g');

function syllables(word) {
  let w = lower(word).replace(/[^a-z]/g, '');
  if (!w) return 1;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  return Math.max(1, (w.match(/[aeiouy]{1,2}/g) ?? []).length);
}

function fleschReadingEase(text) {
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => /[a-z]/i.test(s));
  const words = text.match(/[A-Za-z][A-Za-z'’]*/g) ?? [];
  if (!sentences.length || !words.length) return 100;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syl / words.length);
}

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(full);
    return e.name === 'index.html' ? [full] : [];
  });
}

function keywordRegistry() {
  const pages = new Map();
  const registry = readFileSync('src/data/pages.ts', 'utf8');
  for (const block of registry.split(/\n  \{\n/).slice(1)) {
    const path = block.match(/path:\s*'([^']+)'/)?.[1];
    const primary = block.match(/primaryKeyword:\s*'([^']+)'/)?.[1];
    if (!path || !primary) continue;
    const sec = block.match(/secondaryKeywords:\s*\[([\s\S]*?)\]/)?.[1] ?? '';
    pages.set(path, { primary, secondary: [...sec.matchAll(/'([^']+)'/g)].map((m) => m[1]) });
  }
  const dir = 'src/content/landing';
  for (const file of readdirSync(dir, { recursive: true, encoding: 'utf8' }).filter((f) => f.endsWith('.md'))) {
    const fm = readFileSync(join(dir, file), 'utf8').split('---')[1] ?? '';
    const primary = fm.match(/^primaryKeyword:\s*(.+)$/m)?.[1]?.replace(/^["']|["']$/g, '');
    const sec = fm.match(/^secondaryKeywords:\n((?:\s+- .+\n)+)/m)?.[1] ?? '';
    pages.set(`/${file.replace(/\.md$/, '')}/`, { primary, secondary: [...sec.matchAll(/- (.+)/g)].map((m) => m[1].trim()) });
  }
  return pages;
}

function parsePage(file) {
  const html = readFileSync(file, 'utf8');
  const route = '/' + file.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\\/g, '/');
  const main = html.slice(html.indexOf('<main'), html.indexOf('</main>')).replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ');
  const noCaption = main.replace(/<caption[\s\S]*?<\/caption>/g, ' ');
  const prose = [...noCaption.matchAll(/<(p|li|dd|td|summary)[^>]*>([\s\S]*?)<\/\1>/g)]
    .map((m) => m[2])
    .filter((inner) => !/<(p|li|td)\b/.test(inner))
    .map(strip)
    .filter((t) => t.split(' ').length >= 4)
    .map((t) => (/[.!?]$/.test(t) ? t : `${t}.`))
    .join(' ');
  const proseNoTables = [...noCaption.replace(/<table[\s\S]*?<\/table>/g, ' ').matchAll(/<(p|li|dd|summary)[^>]*>([\s\S]*?)<\/\1>/g)]
    .map((m) => strip(m[2]))
    .join(' ');
  return {
    route,
    title: strip(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''),
    description: decode(html.match(/name="description" content="([^"]*)"/)?.[1] ?? ''),
    h1: strip(main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? ''),
    headings: [...main.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map((m) => strip(m[1])),
    body: strip(noCaption),
    afterH1: strip(noCaption.split('</h1>')[1] ?? ''),
    prose,
    proseNoTables,
    anchors: [...main.matchAll(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({ href: m[1], text: strip(m[2]) })),
    alts: [...html.matchAll(/<img [^>]*alt="([^"]*)"/g)].map((m) => decode(m[1])),
    faqQuestions: [...html.matchAll(/"@type":"Question","name":"([^"]+)"/g)].map((m) => m[1]),
    noindex: /name="robots" content="noindex/.test(html),
    collection: /"@type":"CollectionPage"/.test(html),
    emptyAnswers: [...main.matchAll(/<details[^>]*>([\s\S]*?)<\/details>/g)].filter((m) => strip(m[1].replace(/<summary[\s\S]*?<\/summary>/, '')).length < 20).length,
  };
}

const registry = keywordRegistry();
const pages = htmlFiles(DIST).map(parsePage).filter((p) => !p.noindex);
const byRoute = new Map(pages.map((p) => [p.route, p]));
const errors = [];
const scores = [];
const warnings = [];
const report = (route, message) => (STRICT.has(route) ? errors : warnings).push(`${route}: ${message}`);

const primaries = new Map([...registry].map(([path, k]) => [lower(k.primary ?? ''), path]));
const secondaryOwners = new Map();
for (const [path, k] of registry) {
  for (const s of k.secondary) {
    const key = lower(s);
    const owner = primaries.get(key);
    if (owner && owner !== path) errors.push(`${path}: secondary keyword "${s}" is the primary keyword of ${owner} (cannibalization)`);
    secondaryOwners.set(key, [...(secondaryOwners.get(key) ?? []), path]);
  }
}
for (const [key, owners] of secondaryOwners) {
  if (owners.length > 1) errors.push(`supporting keyword "${key}" is claimed by ${owners.join(' and ')}. Give it to one page (cannibalization).`);
}

const inbound = new Map();
for (const p of pages) {
  for (const a of p.anchors) {
    if (!a.href.startsWith('/') || a.href === p.route) continue;
    const target = a.href.split('#')[0];
    inbound.set(target, [...(inbound.get(target) ?? []), { from: p.route, text: lower(a.text) }]);
  }
}

for (const p of pages) {
  const k = registry.get(p.route);
  const fre = fleschReadingEase(p.prose);
  if (STRICT.has(p.route)) scores.push(`${p.route} FRE ${fre.toFixed(1)}`);
  if (fre < MIN_FRE) report(p.route, `Flesch Reading Ease ${fre.toFixed(1)} is below ${MIN_FRE}`);

  for (const re of LEFTOVERS) if (re.test(p.body) || re.test(p.title) || re.test(p.description)) report(p.route, `leftover text matches ${re}`);
  for (const a of p.anchors) {
    if (a.href === '#' || a.href.startsWith('javascript:')) report(p.route, `dead link "${a.text}" → ${a.href}`);
    if (!a.text) report(p.route, `link to ${a.href} has no text`);
    if (/^(click here|read more|learn more|more|here)$/i.test(a.text)) report(p.route, `generic link text "${a.text}" → ${a.href}`);
  }
  const us = p.body.match(US_SPELLING);
  if (us) report(p.route, `American spelling "${us[0]}". The site uses British English.`);
  if (p.emptyAnswers) report(p.route, `${p.emptyAnswers} FAQ question(s) with no answer`);

  const text = lower(p.body);
  for (const phrase of BANNED) {
    if (new RegExp(`(?<![a-z])${esc(phrase)}(?![a-z])`).test(text)) report(p.route, `marketing phrase "${phrase}"`);
  }

  if (!STRICT.has(p.route) || !k?.primary) continue;

  const words = (text.match(/[a-z][a-z'’-]*/g) ?? []).length;
  const primary = kwRegex(k.primary);
  const has = (s) => (s.match(kwRegex(k.primary)) ?? []).length > 0;
  if (!has(lower(p.title))) report(p.route, `primary keyword "${k.primary}" missing from the title`);
  if (!has(lower(p.description))) report(p.route, 'primary keyword missing from the meta description');
  if (!has(lower(p.h1))) report(p.route, 'primary keyword missing from the H1');
  if (!has(lower(p.afterH1.split(' ').slice(0, 100).join(' ')))) report(p.route, 'primary keyword missing from the first 100 words');
  if (!p.headings.some((h) => has(lower(h)))) report(p.route, 'primary keyword missing from every H2 and H3');
  const count = (text.match(primary) ?? []).length;
  const density = (count * k.primary.split(' ').length * 100) / words;
  if (!p.collection && (density < DENSITY[0] || density > DENSITY[1])) report(p.route, `primary keyword density ${density.toFixed(2)}% is outside ${DENSITY[0]}–${DENSITY[1]}%`);

  for (const s of k.secondary) {
    const re = kwRegex(s);
    const n = (text.match(re) ?? []).length;
    const placed =
      p.headings.some((h) => re.test(lower(h))) ||
      p.faqQuestions.some((q) => kwRegex(s).test(lower(q))) ||
      p.anchors.some((a) => kwRegex(s).test(lower(a.text)));
    if (n < 2 || !placed) report(p.route, `supporting keyword "${s}" needs 2+ mentions and a heading, FAQ question or link (has ${n} mentions)`);
  }

  for (const sentence of p.prose.split(/(?<=[.!?])\s+/)) {
    const n = sentence.split(' ').length;
    if (n > MAX_SENTENCE_WORDS) report(p.route, `sentence of ${n} words: "${sentence.slice(0, 70)}…"`);
  }

  const targets = [k.primary, ...k.secondary];
  for (const alt of p.alts) {
    if (!alt) continue;
    if (alt.length > MAX_ALT) report(p.route, `alt text is ${alt.length} characters: "${alt.slice(0, 50)}…"`);
    const hits = targets.filter((t) => kwRegex(t).test(lower(alt))).length;
    if (hits > 1) report(p.route, `alt text holds ${hits} target keywords, describe the image instead: "${alt.slice(0, 50)}…"`);
  }

  const w = lower(p.proseNoTables).match(/[a-z0-9$.%–×'’-]+/g) ?? [];
  const grams = new Map();
  for (let i = 0; i + 8 <= w.length; i += 1) {
    const g = w.slice(i, i + 8).join(' ');
    grams.set(g, (grams.get(g) ?? 0) + 1);
  }
  const repeats = [...grams].filter(([g, n]) => n > 1 && !targets.some((t) => g.includes(lower(t))));
  if (repeats.length) report(p.route, `repeated phrase: "${repeats[0][0]}"${repeats.length > 1 ? ` and ${repeats.length - 1} more` : ''}`);
  if (process.env.AUDIT_VERBOSE && repeats.length > 1) for (const r of repeats) console.log(`    ${p.route} repeat: "${r[0]}"`);

  const links = inbound.get(p.route) ?? [];
  const fromPages = new Set(links.map((l) => l.from));
  if (p.route !== HUB && fromPages.size < 3) report(p.route, `only ${fromPages.size} pages link here, want 3 or more`);
  if (p.route !== HUB && !links.some((l) => targets.some((t) => kwRegex(t).test(l.text)))) {
    report(p.route, 'no internal link to this page uses its primary or supporting keyword as anchor text');
  }
}

for (const route of STRICT) if (!byRoute.has(route)) errors.push(`${route}: listed in STRICT but not built`);

if (warnings.length) console.log(`page-audit: ${warnings.length} warning(s) on pages not yet reworked\n${warnings.map((w) => `  ! ${w}`).join('\n')}`);
if (errors.length) {
  console.error(`page-audit: ${errors.length} problem(s)\n${errors.map((e) => `  ✗ ${e}`).join('\n')}`);
  process.exit(1);
}
console.log(`page-audit: ${scores.join(', ')}`);
console.log(`page-audit: ${STRICT.size} playbook page(s) pass every rule. ${pages.length - STRICT.size} page(s) still to rework.`);
