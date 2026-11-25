import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

const sha = (content) => `'sha256-${createHash('sha256').update(content, 'utf8').digest('base64')}'`;
const scriptHashes = new Set();
const styleHashes = new Set();

for (const file of htmlFiles(DIST)) {
  let html = readFileSync(file, 'utf8');
  html = html.replace(/<!--(?!\[if)[\s\S]*?-->/g, '');
  writeFileSync(file, html);

  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g)) {
    if (match[1].trim()) scriptHashes.add(sha(match[1]));
  }
  for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    styleHashes.add(sha(match[1]));
  }
  if (/\sstyle="/.test(html)) {
    throw new Error(`Inline style attribute found in ${file}. Move it to a stylesheet so the CSP stays strict.`);
  }
}

const headersPath = join(DIST, '_headers');
const headers = readFileSync(headersPath, 'utf8')
  .replace('__CSP_SCRIPT_HASHES__', [...scriptHashes].sort().join(' '))
  .replace('__CSP_STYLE_HASHES__', [...styleHashes].sort().join(' '));
writeFileSync(headersPath, headers);

console.log(`postbuild: stripped HTML comments, ${scriptHashes.size} inline script hash(es), ${styleHashes.size} inline style hash(es) written to CSP.`);
