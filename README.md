# sdfltd.com – SDF Clothing website (rebuild)

Static Astro site for SDF Clothing, served by a Cloudflare Worker with static assets. The Worker also handles the quote form at `/api/quote`.

## Status

Phase 1 of the rebuild. 23 pages are built, and all 301 URLs from the old site are covered by a page, a redirect, a 410 or the planned list in `scripts/planned-routes.txt`. Do not switch the domain to this build until `npm run verify:launch` passes, which requires the planned list to be empty.

## Requirements

- Node.js 22.12 or newer
- A Cloudflare account with `sdfltd.com` on Cloudflare
- A Resend account with `sdfltd.com` verified as a sending domain (for the quote form)
- A Cloudflare Turnstile widget for `sdfltd.com` (spam protection)

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run check` | Type checks, keyword-cannibalization check, hard-coded-fact check |
| `npm run build` | Build to `dist/`, strip HTML comments, write CSP hashes into `dist/_headers` |
| `npm run verify` | On-page SEO gate and legacy-URL/redirect gate on the build |
| `npm run verify:launch` | Same, but fails while any URL is still planned |
| `npm run ci` | check + build + verify |
| `npm run preview` | Build and run the Worker locally with Wrangler |
| `npm run deploy` | Run all gates, then deploy with Wrangler |
| `npm run indexnow` | Submit every sitemap URL to IndexNow after a deploy |

## Where things live

```
src/data/company.ts     Every business fact (MOQ, lead times, prices, contacts). Change it here only.
src/data/pages.ts       SEO meta for hand-built pages (title, description, primary keyword, date)
src/data/nav.ts         Header and footer navigation
src/content/landing/    Product, service and business-model pages (Markdown + frontmatter)
src/content.config.ts   Zod schema: a page without its SEO fields does not build
src/lib/schema.ts       JSON-LD generator (Organization, WebPage, Service, FAQPage, Dataset...)
src/layouts/            Base layout: head tags, header, footer, skip link
src/components/         UI blocks (fact strip, price table, FAQ, quote form...)
src/worker/index.ts     Quote form API, rate limit, Turnstile, Resend email, 410 handling
public/_headers         Security and cache headers (CSP hashes are filled in at build)
public/_redirects       Old URL -> new URL map
scripts/                Build and quality-gate scripts
```

## Writing content

- Use `{{tokens}}` for facts in Markdown and frontmatter, for example `{{moq}}`, `{{sampleDays}}`, `{{bulkDays}}`, `{{quoteHours}}`. The full list is `tokens` in `src/data/company.ts`. The build fails on an unknown token, and `facts-check` fails if a number such as "300 pieces" or "10–14 days" is typed by hand.
- Each page owns one primary keyword. `keyword-check` fails if two pages share one.
- Final titles must be 50–60 characters and descriptions 150–160 characters, measured after tokens are filled. `seo-check` enforces this.
- Markdown body headings start at `##`; the template renders the single `<h1>`.
- Internal links must use the final URL with a trailing slash. Links to redirected or missing URLs fail the build.

## Deploying on Cloudflare

1. Create a GitHub repository for this project and push it.
2. In Cloudflare: **Workers & Pages → Create → Import a repository**, choose the repository. Build command `npm run build`, deploy command `npx wrangler deploy`.
3. Add the secrets under the Worker's **Settings → Variables and Secrets**:
   - `RESEND_API_KEY` – Resend API key
   - `TURNSTILE_SECRET` – Turnstile secret key
4. Add the build variable `PUBLIC_TURNSTILE_SITE_KEY` (Turnstile site key) so the widget renders.
5. Check `QUOTE_TO` and `QUOTE_FROM` in `wrangler.jsonc`. `QUOTE_FROM` must use a domain verified in Resend.
6. Turn on **Cloudflare Web Analytics** for the site (cookieless).
7. On launch day only: under the Worker's **Domains**, add `sdfltd.com` and `www.sdfltd.com`, after removing them from the old project. Then redirect `www` to the apex with a Cloudflare redirect rule.
8. Verify the new site in Google Search Console and Bing Webmaster Tools, submit `https://sdfltd.com/sitemap.xml`, and run `npm run indexnow`.

`workers_dev` and `preview_urls` are off, so the site is only reachable on its own domain and no duplicate copy can be indexed.

## Values to confirm

`unconfirmed` in `src/data/company.ts` lists the facts copied from the old site that SDF management still has to confirm. The pages also make these commitments, which must be true before launch:

- Weekly progress photos during bulk production
- Factory visits in Dhaka by appointment
- One named merchandiser per buyer
- Defects found in final inspection reworked or replaced at SDF's cost
- NDA available before buyers share files
- Reply to quote requests within the stated hours
- A team member reviews every page before publication, and pages follow the review cadence in the editorial policy

## Removed from the old site on purpose

- All certification claims, logos and schema (business decision)
- `.well-known` files that described APIs and agents that do not exist
- Visitor IP lookups on the contact page (privacy)
- Stock and unlicensed photos (the old hero image showed a public figure)
- Unused Supabase and Resend client code

## Live preview (staging) while we build

A private preview runs on Cloudflare as a separate Worker, `sdfltd-staging`, on a workers.dev address. It never touches sdfltd.com.

1. Push this project to its own private GitHub repository (not the repository that runs the live site).
2. In Cloudflare: Workers & Pages → Create → Import a repository → pick the repository.
3. Build command: `npm run build:staging`. Deploy command: `npx wrangler deploy --env staging`.
4. Every push now updates the preview at `https://sdfltd-staging.<your-subdomain>.workers.dev`.
5. Put that address in `env.staging.vars.ALLOWED_ORIGIN` in `wrangler.jsonc` so the forms work on the preview.

On Cloudflare Pages the build writes a robots.txt that blocks search engines and AI crawlers (Googlebot, Bingbot, GPTBot and others) but allows every other tool, so SEO checkers and Lighthouse can test the preview while search engines stay out. For a password, add Cloudflare Access (Zero Trust → Access → Applications) to the workers.dev address.

At launch: delete the `sdfltd-staging` Worker, then deploy the main Worker with `npm run deploy` and attach sdfltd.com under the Worker's Domains & Routes.
