/**
 * Business facts live in src/data/company.ts only. This check fails if content or page files
 * hard-code a minimum order, a day range, an hour promise or a dollar price instead of using
 * {{tokens}} or the company.ts exports.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const patterns = [
  { re: /(?<![\d,.])\d{2,3}\s*(pieces|pcs)\b/gi, label: 'hard-coded quantity' },
  { re: /\b\d{1,2}\s*[–-]\s*\d{1,3}\s*(working\s+|business\s+)?days\b/gi, label: 'hard-coded day range' },
  { re: /\b\d{2}\s*hours\b/gi, label: 'hard-coded hour promise' },
  { re: /(?<!US)\$\s?\d/g, label: 'hard-coded price' },
];

function files(dir, exts) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return files(full, exts);
    return exts.some((e) => entry.name.endsWith(e)) ? [full] : [];
  });
}

const targets = [...files('src/content', ['.md']), ...files('src/pages', ['.astro']), 'src/data/pages.ts', ...files('src/components', ['.astro'])];
const errors = [];
for (const file of targets) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const { re, label } of patterns) {
      for (const m of line.matchAll(re)) errors.push(`${file}:${i + 1}: ${label} "${m[0]}"`);
    }
  });
}

if (errors.length) {
  console.error(`facts-check: ${errors.length} hard-coded fact(s). Use a {{token}} or company.ts instead.\n` + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`facts-check: ${targets.length} files clean; every business fact comes from src/data/company.ts.`);
