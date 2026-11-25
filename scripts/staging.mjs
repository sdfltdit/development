/**
 * Turns a normal build in dist/ into a private staging build.
 * Adds a noindex header to every response and a robots.txt that blocks all crawlers,
 * so the preview site on workers.dev never competes with sdfltd.com in search.
 * Run only for the staging deploy: npm run build:staging
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const headersPath = join(DIST, '_headers');
const headers = readFileSync(headersPath, 'utf8');
writeFileSync(headersPath, `/*\n  X-Robots-Tag: noindex, nofollow\n\n${headers}`);
writeFileSync(join(DIST, 'robots.txt'), '# Staging preview. Not for search engines.\nUser-agent: *\nDisallow: /\n');
console.log('staging: noindex header added to every page and robots.txt blocks all crawlers.');
