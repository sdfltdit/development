/**
 * One search intent, one page. Fails if two pages declare the same primary keyword.
 * Reads primaryKeyword from src/data/pages.ts and from every landing page's frontmatter.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const owners = new Map();
const add = (keyword, owner) => {
  const key = keyword.trim().toLowerCase();
  owners.set(key, [...(owners.get(key) ?? []), owner]);
};

const registry = readFileSync('src/data/pages.ts', 'utf8');
for (const match of registry.matchAll(/path:\s*'([^']+)'[\s\S]*?primaryKeyword:\s*'([^']+)'/g)) add(match[2], match[1]);

const dir = 'src/content/landing';
for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const fm = readFileSync(join(dir, file), 'utf8').split('---')[1] ?? '';
  const keyword = fm.match(/^primaryKeyword:\s*(.+)$/m)?.[1];
  if (!keyword) {
    console.error(`keyword-check: ${file} has no primaryKeyword`);
    process.exit(1);
  }
  add(keyword.replace(/^["']|["']$/g, ''), `/${file.replace(/\.md$/, '')}/`);
}

const clashes = [...owners].filter(([, list]) => list.length > 1);
if (clashes.length) {
  console.error('keyword-check: keyword cannibalization\n' + clashes.map(([k, l]) => `  ✗ "${k}" is the primary keyword of ${l.join(' and ')}`).join('\n'));
  process.exit(1);
}
console.log(`keyword-check: ${owners.size} primary keywords, each owned by exactly one page.`);
