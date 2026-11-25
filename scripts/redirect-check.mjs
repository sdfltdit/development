/**
 * Makes sure no old URL is lost. Every URL from the previous site (scripts/legacy-urls.txt) must be
 * built in dist/, redirected in _redirects, marked gone, or listed in scripts/planned-routes.txt.
 * Redirect targets must exist or be planned, and redirects must not chain.
 * With LAUNCH=1 the planned list must be empty: everything has to be built or redirected.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const launch = process.env.LAUNCH === '1';
const read = (file) =>
  readFileSync(file, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

const legacy = read('scripts/legacy-urls.txt');
const planned = new Set(read('scripts/planned-routes.txt'));
const gone = new Set(['/journal/gots-7-recertification-2026/']);
const redirects = new Map(
  read(join(DIST, '_redirects')).map((l) => {
    const [from, to, code] = l.split(/\s+/);
    return [from, { to, code }];
  }),
);

const built = (route) => existsSync(join(DIST, route, 'index.html')) || (/\.[a-z0-9]+$/i.test(route) && existsSync(join(DIST, route)));
const errors = [];
let pendingCount = 0;

for (const url of legacy) {
  if (built(url) || redirects.has(url) || gone.has(url)) continue;
  if (planned.has(url)) {
    pendingCount += 1;
    if (launch) errors.push(`${url}: still planned, must be built or redirected before launch`);
    continue;
  }
  errors.push(`${url}: old URL is not built, redirected, gone or planned`);
}

for (const [from, { to, code }] of redirects) {
  if (code !== '301') errors.push(`${from}: redirect uses ${code}, expected 301`);
  if (to.endsWith('.xml')) continue;
  if (redirects.has(to)) errors.push(`${from} -> ${to}: redirect chain`);
  if (!built(to)) {
    if (planned.has(to)) {
      if (launch) errors.push(`${from} -> ${to}: target not built yet`);
    } else {
      errors.push(`${from} -> ${to}: target does not exist and is not planned`);
    }
  }
  if (built(from)) errors.push(`${from}: is redirected but a page is also built at that URL`);
}

if (errors.length) {
  console.error(`redirect-check: ${errors.length} problem(s)\n` + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(
  `redirect-check: ${legacy.length} legacy URLs covered, ${redirects.size} redirects valid` +
    (launch ? '.' : `, ${pendingCount} URL(s) planned for later phases.`),
);
