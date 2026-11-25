/**
 * Turns a normal build in dist/ into a preview build for Cloudflare Pages.
 * Search engines and AI crawlers are blocked in robots.txt, so the preview never competes
 * with sdfltd.com in search. Every other user agent is allowed, so SEO checkers, Lighthouse
 * and similar tools can test the preview exactly as they would test the live site.
 * Runs automatically on Cloudflare Pages (CF_PAGES=1) and on demand with npm run build:staging.
 * The production Worker build never runs it.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

if (process.env.CF_PAGES !== '1' && !process.argv.includes('--force')) process.exit(0);

const blocked = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'Googlebot-Video',
  'Storebot-Google',
  'Google-InspectionTool',
  'GoogleOther',
  'Google-Extended',
  'AdsBot-Google',
  'AdsBot-Google-Mobile',
  'Mediapartners-Google',
  'Bingbot',
  'MSNBot',
  'AdIdxBot',
  'BingPreview',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'YandexImages',
  'Sogou',
  'SeznamBot',
  'Yeti',
  'PetalBot',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'cohere-ai',
];

const body = [
  '# Preview of the sdfltd.com rebuild. Not for search engines.',
  '# Search engines and AI crawlers are blocked. SEO testing tools are allowed.',
  '',
  ...blocked.map((agent) => `User-agent: ${agent}`),
  'Disallow: /',
  '',
  'User-agent: *',
  'Allow: /',
  'Disallow: /api/',
  '',
].join('\n');

writeFileSync(join('dist', 'robots.txt'), body);
console.log(`staging: robots.txt blocks ${blocked.length} search engine and AI crawlers, other tools allowed.`);
