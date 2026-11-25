/**
 * Submits every URL in dist/sitemap.xml to IndexNow (Bing, Yandex, Seznam and others).
 * Run after a deploy: npm run indexnow
 */
import { readFileSync } from 'node:fs';

const KEY = 'fd7cd2f3994149a79e347c65f8ba196f';
const HOST = 'sdfltd.com';

async function submit(urls, attempt = 1) {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
    });
    if (!res.ok && res.status !== 202) throw new Error(`IndexNow returned ${res.status}`);
    return res.status;
  } catch (error) {
    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
      return submit(urls, attempt + 1);
    }
    throw error;
  }
}

const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

try {
  const status = await submit(urls);
  console.log(`indexnow: submitted ${urls.length} URLs (HTTP ${status}).`);
} catch (error) {
  console.error(`indexnow: submission failed – ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
