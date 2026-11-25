/**
 * Turns a normal build in dist/ into a private staging build.
 * Adds a noindex header to every response and a robots.txt that blocks all crawlers,
 * so the preview site on workers.dev never competes with sdfltd.com in search.
 * Runs automatically on Cloudflare Pages (CF_PAGES=1), which is used only for the preview,
 * and on demand with: npm run build:staging. The production Worker build never runs it.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

if (process.env.CF_PAGES !== '1' && !process.argv.includes('--force')) process.exit(0);

const DIST = 'dist';
const headersPath = join(DIST, '_headers');
const headers = readFileSync(headersPath, 'utf8');
writeFileSync(headersPath, `/*\n  X-Robots-Tag: noindex, nofollow\n\n${headers}`);
writeFileSync(join(DIST, 'robots.txt'), '# Staging preview. Not for search engines.\nUser-agent: *\nDisallow: /\n');
console.log('staging: noindex header added to every page and robots.txt blocks all crawlers.');
