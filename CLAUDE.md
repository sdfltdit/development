# SDF Clothing website: project rules and page playbook

This file holds every rule agreed while building the home page (`/`) and the T-shirt page (`/t-shirt-manufacturer/`).
Read it fully before creating or reworking any page. When a rule here conflicts with an old page, the rule wins and the old page gets fixed.

Contents:
1. Project and workflow
2. Business facts and privacy (hard rules)
3. Keyword strategy and cannibalization
4. Research before writing
5. On-page SEO checklist
6. Writing: human tone and readability
7. Content quality, E-E-A-T and AI-friendliness
8. Page structure and components
9. Structured data
10. Design, responsive and accessibility
11. Performance
12. Security, forms and privacy
13. Technical SEO, URLs and redirects
14. Automated checks
15. Finishing a page
16. Open items waiting for the owner

---

## 1. Project and workflow

- Stack: Astro 6, static output, TypeScript strict, `trailingSlash: 'always'`. Content collection `landing` in `src/content/landing/*.md`.
- Repo: `github.com/sdfltdit/development`, branch `main`. Every push builds the staging preview on Cloudflare Pages (`development-3n2.pages.dev`).
  Production later runs on Cloudflare Workers (`wrangler.jsonc`, worker in `src/worker/index.ts` for `/api/*`).
- Never touch the owner's other GitHub repos or Cloudflare projects. The live site repo "cloth" stays as it is until launch.
- Staging is hidden from search and AI bots by `scripts/staging.mjs`, which writes a bot-blocking `robots.txt` when `CF_PAGES=1`.
  Do not add a `noindex` header to staging. SEO testing tools must still be able to read it.
- Commits only after `npm run check`, `npm run build` and `npm run verify` pass locally. CI (`.github/workflows/ci.yml`) runs the same plus Lighthouse.
- `yearly-rebuild.yml` rebuilds on 1 January and 22 August so the footer year and "years in business" update. Never hard-code a year or an age.
- Talk to the owner in Banglish. Write all site copy in English.
- Ask the owner before adding any claim, price or feature that is not already confirmed in `src/data/company.ts` or in this file.

## 2. Business facts and privacy (hard rules)

Single source of truth: `src/data/company.ts`. Copy uses `{{tokens}}` in Markdown or `fill()` and the exported values in `.astro` files.
`facts-check` fails the build on hard-coded facts such as "300 pieces".

Names and identity
- Company name: "SDF Clothing". Never "SDF Clothing Ltd" or "SDF Ltd".
- Parent company "SDF Corprt" appears only small, in the footer line and in schema `parentOrganization`. The spelling still needs owner confirmation.
- Founder name and job title come from `company.founder`.

Never publish
- Email addresses or phone numbers, in visible text or in links. Contact is the `/contact/` form and WhatsApp only.
- WhatsApp link is exactly `https://wa.me/8801819172080`, with no text parameter. Use `whatsappUrl` from `company.ts`.
- Certificates or certification names, company registration (RJSC), TIN, trade association names or member numbers.
- Live video call offers.
- Partners or subcontractors. All cutting, sewing, printing (screen, DTF, sublimation) and embroidery is in-house.
- Invented names, testimonials, reviews, client logos, numbers or case studies.
- Stock photos presented as our factory, team or products.
- "Facts last checked", "prices checked on" or similar date notes next to tables. Dates live in schema and the "About this page" block only.

Prices
- Show prices only at 300 pieces (MOQ) and 5,000 pieces (bulk). Never show any quantity in between.
- Prices come from `company.priceIndex` and render through `PriceTable` (use `only` to filter rows). Owner-approved rows:

| Product | 300 pcs | 5,000 pcs |
|---|---|---|
| Basic T-shirt | $5.00 | $2.80 |
| Heavyweight or oversized T-shirt | $6.50 | $3.80 |
| Long sleeve T-shirt | $6.00 | $3.40 |
| Kids' T-shirt | $3.80 | $2.20 |
| Tank top | $4.50 | $2.50 |
| Polo shirt | $7.50 | $4.60 |
| Crewneck sweatshirt | $9.50 | $6.00 |
| Pullover hoodie | $11.00 | $6.80 |
| Zip hoodie | $13.00 | $8.00 |
| Joggers | $9.00 | $5.60 |
| Shorts | $7.00 | $4.30 |
| Woven shirt | $10.00 | $6.50 |

Markets and terms
- Target buyers worldwide. Bangladesh is where the factory is, never a target market. Use `shipping.regions` (North America, UK and Europe, Australia and NZ, Middle East, Asia and beyond).
- Payment methods come from `terms.paymentMethods`: LC, T/T, Wise, WorldRemit, Xoom, etc.
- We work in any fabric (`capabilities.fabrics`), knit and woven. T-shirt weight range is `{{tshirtGsm}}` GSM.

## 3. Keyword strategy and cannibalization

One page, one search intent, one primary keyword.

- `keyword-check` fails if two pages share a primary keyword.
- `page-audit` fails if a page's supporting keyword equals another page's primary keyword, and warns when two spoke pages share a supporting keyword.
- Before choosing keywords, read the map below. A new keyword goes to the page whose intent fits best. Other pages link to it instead of targeting it.

Keyword types to cover on each page, where they fit naturally:
- Primary (head term) and 3 to 5 supporting variants (custom, private label, style or fabric variants).
- LSI and semantic terms: fabrics, GSM, fits, printing methods, trims, stages.
- Question keywords as H2s or FAQ questions ("What GSM…", "How long…", "Do you…").
- Commercial and transactional terms in context: price, MOQ, sample, quote, order.
- Long-tail and voice phrasing in FAQ questions, written the way a buyer asks.

Keyword map (keep it updated):

| Page | Intent | Primary keyword | Supporting keywords |
|---|---|---|---|
| `/` (hub) | commercial | custom clothing manufacturer | apparel manufacturers, garments manufacturer, fashion manufacturer, low MOQ clothing manufacturing, private label clothing manufacturing |
| `/t-shirt-manufacturer/` | commercial | t-shirt manufacturer | custom t-shirt manufacturer, polo shirt manufacturer, private label t-shirts, oversized t-shirts, heavyweight t-shirts |
| `/hoodie-manufacturer/` | commercial | hoodie manufacturer | custom hoodie manufacturer, private label hoodies, sweatshirt manufacturer, zip hoodie manufacturer, heavyweight hoodie manufacturer |
| `/private-label-clothing-manufacturer/` | commercial | private label clothing manufacturer | private label apparel manufacturer, OEM clothing manufacturer, custom label clothing, white label clothing |
| `/low-moq-clothing-manufacturers/` | commercial | low MOQ clothing manufacturer | small batch clothing manufacturer, low minimum order clothing, minimum order quantity clothing |
| `/clothing-manufacturers-for-startups/` | commercial | clothing manufacturer for startups | clothing manufacturer for small brands, first clothing order, clothing manufacturer for new brands |
| `/clothing-manufacturer-bangladesh/` | commercial | clothing manufacturer in Bangladesh | garment manufacturer Bangladesh, apparel manufacturer Bangladesh, Bangladesh clothing factory |
| `/cut-and-sew-service/` | commercial | cut and sew manufacturer | cut and sew clothing, full package production, CMT clothing manufacturer |
| `/sample-service/` | commercial | clothing sample maker | clothing sample service, garment sample cost, proto sample clothing |
| `/how-to-find-clothing-manufacturer/` | informational | how to find a clothing manufacturer | questions to ask a clothing manufacturer, types of apparel manufacturers |
| Utility pages | navigational | brand phrases ("SDF Clothing prices", "verify SDF Clothing", "contact SDF Clothing") | none |

Hub and spoke linking
- The home page mentions each topic briefly and links to its spoke page. Detail lives only on the spoke.
- The home page's two shared supporting terms (low MOQ, private label) appear briefly with a link to the spoke that owns them.
- Every spoke links back to `/` and to 3 to 8 related spokes (`related` frontmatter), using the target page's keyword as anchor text where it reads naturally.
- When a spoke grows, check the home page and sibling pages do not drift into covering the same topic in depth.

## 4. Research before writing

1. Search the primary keyword and its main variants. Read the top 5 to 10 ranking pages, including factory sites, guides and People Also Ask.
2. List the questions buyers ask, the specs competitors show and the gaps they leave. Fill the gaps with facts we can prove.
3. Never copy competitor wording or structure. Never name competitors on the page.
4. Collect sources for citations (official or trade bodies, never competitors) in the `citations` frontmatter.
5. Write down any fact not yet in `company.ts` and ask the owner before using it.
6. Check for duplicate copies of our content elsewhere (old `*.pages.dev` projects) and tell the owner.

## 5. On-page SEO checklist

`seo-check` and `page-audit` enforce the items marked (auto).

| Element | Rule |
|---|---|
| Title (auto) | 50–60 characters. Primary keyword first. Ends with "\| SDF Clothing". Unique on the site. |
| Meta description (auto) | 150–160 characters. Primary keyword in the first sentence. Says who it is for and one concrete fact (MOQ, sample days). Ends with the brand or a fact. No "Bangladesh" as a market. |
| H1 (auto) | Exactly one. Contains the primary keyword. Worded differently from the title. |
| First 100 words (auto) | The answer paragraph (`answer`, 160–520 characters) names the primary keyword and says plainly what we make, for whom, MOQ and timing. Written to be quoted as a featured snippet or by an AI answer. |
| Headings (auto) | H2 → H3 order, no skipped levels. Primary keyword in at least one H2. Supporting keywords in H2s, H3s or FAQ questions. Many H2s phrased as the buyer's question. |
| Primary density (auto) | 0.8–2.0% of visible words in `<main>`. Never forced. |
| Supporting keywords (auto) | Each 2+ times and in at least one heading, FAQ question or internal link text. |
| URL | Lowercase, hyphens, contains the primary keyword or its core noun. Never change a live URL without a 301. |
| Canonical, robots, OG, Twitter (auto) | Set by `BaseLayout` and `Seo.astro` from `Astro.url`. Never hand-write them. |
| Images (auto) | Width and height set. Alt describes the image in under 140 characters, with at most one target keyword and only when it is the honest description. Decorative images use `alt=""`. |
| Internal links (auto) | At least 3 pages link to a finished page, and at least one uses its primary or a supporting keyword as anchor text. Card links use descriptive text, never "click here" or "learn more". |
| External links | Only trusted sources. `rehypeExternalLinks` adds `target="_blank"`, `rel="noopener noreferrer"` and "(opens in a new tab)" in Markdown. Do the same by hand in `.astro`. |
| Breadcrumbs | Every page except home, visible and in schema. |
| CTA | Every page ends with `CtaBand` (quote form and WhatsApp). |
| Dates | `published` and `updated` in frontmatter or `pages.ts`. Update `updated` whenever content changes. |

## 6. Writing: human tone and readability

Readability
- Flesch Reading Ease 60 or higher on every page, measured on prose only (p, li, td, summary). Aim for 65–80. `page-audit` checks this.
- Sentences under 30 words. Most between 10 and 20. Paragraphs 2–4 lines.
- Prefer short common words: "use" not "utilize", "help" not "facilitate", "about" not "approximately".
- No semicolons anywhere in visible copy (`seo-check` fails on them).

Human tone
- Write like a factory manager answering a buyer's email: plain, specific, friendly, first person plural ("we") to the buyer ("you").
- Active voice. Concrete numbers from `company.ts` instead of adjectives.
- No marketing or self-praise: world-class, leading, premium quality, high-quality, best price, one-stop, hassle-free, cutting-edge, amazing, excellent, trusted by, look no further, take your brand to the next level. `page-audit` blocks these. State the fact instead ("AQL 2.5 final inspection", not "top quality").
- Avoid AI-sounding filler (`page-audit` blocks most of these): "In today's fast-paced world", "delve", "unlock", "seamless", "robust", "tailored solutions", "whether you're X or Y", "it's worth noting", "in conclusion". Do not open sections with rhetorical questions or end them with summaries of what was just said.
- Vary sentence openings and lengths. Do not repeat the same pattern ("We…", "We…", "We…") line after line.
- Be honest about limits. The home page has a "What we do not do" style section. Spokes say plainly what we cannot do (for example blanks, no stock).

Duplicate content
- No sentence and no 8-word phrase repeated within a page (`page-audit`), except target keywords.
- No paragraph copied from another page. If two pages need the same fact, state it in new words and link to the page that owns the topic.
- FAQ questions must not repeat across pages. A shared question goes on the page that owns the topic.
- Target keywords may repeat as often as reads naturally within the density limit.

## 7. Content quality, E-E-A-T and AI-friendliness

- Every page must offer something the buyer cannot get from a generic page: real specs, real prices at 300 and 5,000 pieces, real timings, real limits.
- Show experience through process detail (what we check at each stage, what goes wrong and how we prevent it), not claims.
- "About this page" block on every product and service page: who reviewed it (founder from `company.founder`, linked to `/about/`), where facts come from, and how to report an error. Schema `WebPage` gets `reviewed: true`.
- Use tables for specs, fabrics, printing methods and prices. Use numbered lists for steps. Both are easy for search engines and AI tools to quote.
- The `answer` paragraph and the first sentence of each FAQ answer give a direct yes, no or number first, then the detail.
- Keep entity facts identical everywhere (name, founded year, MOQ, sample days, location). `company.ts` makes this automatic.
- `llms.txt` (`src/pages/llms.txt.ts`) lists key pages. Set `inLlms` and `llmsLabel` for new hand-built pages.
- Neutral comparisons only (factory-direct vs other options), never naming other companies.
- Length guide: pillar or hub pages about 2,000+ words, spoke pages 700–1,500 words. Never pad to hit a number.

## 8. Page structure and components

Layout and shared parts
- Every page uses `BaseLayout`, which includes `SiteHeader`, `SiteFooter`, `Seo`, skip link and scripts. Header and footer change in one place and update every page.
- Navigation lives in `src/data/nav.ts`. Add every new page to the right group and, where useful, to the footer groups.
- Header: badge logo, mobile `<details>` menu closed before paint on mobile, body scroll locked while open, links close the menu.
- Footer: badge logo, groups as `<details>` (closed on mobile below 48rem, open on desktop), "Part of SDF Corprt." line, WhatsApp link, auto year.
- No mobile sticky CTA bar. No theme toggle.

Product or service page pattern (copy `src/pages/t-shirt-manufacturer.astro`)
1. Hero: eyebrow, H1, answer paragraph, two CTAs, infographic.
2. Facts at a glance: spec table plus a supporting infographic.
3. Styles or options as cards, linking to related spokes where relevant.
4. Fabric, printing or option tables.
5. A section for each supporting keyword that needs one (for example the polo section).
6. Prices with `<PriceTable only={[...]}>`.
7. Order steps, quality checklist, first-order guidance.
8. FAQ (5–9 questions, `FaqList`), `RelatedLinks`, "About this page", `CtaBand`.

Dedicated pages
- A page with its own layout keeps its SEO fields and FAQ in `src/content/landing/<slug>.md` (frontmatter only) and reads them with `getEntry('landing', '<slug>')`.
- Add the slug to the `dedicated` set inside `getStaticPaths` in `src/pages/[...slug].astro` so the generic template skips it.
- Simple spoke pages can stay on the generic template with Markdown body.

Frontmatter fields (validated by Zod in `src/content.config.ts`): kind, hub, navLabel, cardSummary, title, description, h1, eyebrow, primaryKeyword, secondaryKeywords, intent, answer, facts, specs, specsCaption, showPrices, serviceType, citations, faq, related, published, updated.

## 9. Structured data

Built in `src/lib/schema.ts`. Never paste JSON-LD by hand.
- Every page: `WebPage` (with dates, `reviewed` where reviewed) and `BreadcrumbList` (except home).
- `Organization` with `parentOrganization` (SDF Corprt), `areaServed: Worldwide`, logo `logo.png` 600×526, founder. No certification or association data.
- Home: `Organization`, `WebSite`.
- Product and service pages: `Service` with `serviceType` and `audience`, plus `Person` for the founder.
- FAQ sections: `FAQPage`. Google stopped showing FAQ rich results on 7 May 2026, but the markup stays valid and helps AI tools.
- Only mark up content that is visible on the page. No `Review` or `AggregateRating` until real reviews exist.

## 10. Design, responsive and accessibility

Theme
- Black only (`#000`) with thin red accents. Tokens in `src/styles/global.css`: `--color-accent` #ff3333 for red text, `--color-accent-strong` #cc0000 for buttons and borders, `--color-accent-strong-hover` #e00000, white focus ring. `color-scheme: dark`, theme colour `#000000`.
- Use CSS variables for every colour, space and font size. BEM class names. No inline styles except computed values.
- Logo: `logo-badge.svg` (white circle, red ring) in header, footer, favicons, app icons and OG image. `logo.png` is for schema only.
- Infographics come from `src/lib/infographics.ts`, built from `company.ts`, dark palette only, served at `/images/infographics/<name>-dark.svg`. A new infographic needs width, height and a descriptive alt in `infographicMeta`.

Responsive
- Mobile first. Check 320, 375, 414, 768, 1024, 1280, 1440 and 1920px wide. No horizontal scroll at any width (`body` uses `overflow-x: clip`).
- Tables: Markdown tables are wrapped automatically by `rehypeTableLabels`. Hand-built tables use the `table--stack` class with `data-label` on each cell so they turn into cards below 48rem. Cells use `overflow-wrap: break-word`, never `anywhere`.
- Fluid type with `clamp()`. Touch targets at least 44×44px.

Accessibility (WCAG 2.1 AA)
- Skip link, landmarks, one H1, logical heading order, visible focus on every interactive element.
- Text contrast 4.5:1 (3:1 for large text). Red text only in the lighter accent.
- Every form field has a `<label>`. Errors are written in words next to the field.
- Icon-only buttons have `aria-label`. Tables have a caption (visually hidden is fine).
- Lighthouse accessibility 100.

## 11. Performance

- Target Lighthouse 100 on mobile for performance, accessibility, best practices and SEO. CI fails below 90 (performance) and 95 (others) on the median of 3 runs.
- CLS 0, LCP under 2.5s, no blocking scripts.
- Static HTML by default. Add client JavaScript only when a feature needs it, and keep it small and inline-hashed or bundled.
- Above-the-fold image: `loading="eager"` and `fetchpriority="high"`. Everything else lazy.
- Self-hosted fonts in `public/fonts` with `font-display: swap`, preloaded where critical.
- Passive listeners for scroll and touch events.

## 12. Security, forms and privacy

- Headers in `public/_headers`: HSTS, CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy.
- CSP uses hashes. `scripts/postbuild.mjs` hashes every inline script and style. Any new inline script must survive this, so never add `unsafe-inline`.
  New third-party hosts must be added to the CSP on purpose, never with a wildcard.
- Forms post to the worker (`/api/*`). The worker validates every field, checks Cloudflare Turnstile and rate-limits per IP. Keep server-side validation and spam protection on any new form.
- No secrets in front-end code. Keys live in Cloudflare environment variables.
- Forms show a notice on how data is used, linking to `/privacy/`.

## 13. Technical SEO, URLs and redirects

- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` and `llms.txt` are generated from `src/data/pages.ts` and the collection. A page is included automatically once registered.
- `scripts/indexnow.mjs` pings search engines after production deploys.
- Old site URLs: every URL in `scripts/legacy-urls.txt` must 301 to the best new page through `public/_redirects`. `redirect-check` fails otherwise. Pages planned for later go in `scripts/planned-routes.txt`.
- Custom 404 page with navigation. HTTPS only, one host (no `www` duplicate) at launch.
- English only for now. Add `hreflang` only if a translated version is created.

## 14. Automated checks

| Command | Script | What it checks |
|---|---|---|
| `npm run check` | `astro check`, `keyword-check`, `facts-check` | Types, unique primary keywords, no hard-coded facts |
| `npm run build` | `astro build`, `postbuild`, `staging` | Build, CSP hashes, staging robots |
| `npm run verify` | `seo-check` | Title and description length, H1, headings, canonical, schema, images, links, orphans, sitemap, no email, phone, semicolon, association name or partner wording |
| | `redirect-check` | Every legacy URL redirects to a real page |
| | `page-audit` | FRE ≥ 60, marketing words, keyword placement and density, supporting keywords, cannibalization, long sentences, repeated phrases, alt text, inbound links and anchors |
| CI | Lighthouse CI (`lighthouserc.json`) | Scores, CLS and LCP on key pages |

`page-audit` hard-fails only pages in its `STRICT` set and prints warnings for the rest. Add a page to `STRICT` once it follows this playbook. Pages in `STRICT` now: `/`, `/t-shirt-manufacturer/`.

## 15. Finishing a page

1. All facts confirmed and in `company.ts`. Unconfirmed claims removed or asked about.
2. Keyword map row added or updated in section 3. `primaryKeyword` and `secondaryKeywords` set in frontmatter or `pages.ts`.
3. Page linked from `nav.ts`, its hub page, the home page where relevant and at least 3 pages in total, one with keyword anchor text.
4. `npm run check && npm run build && npm run verify` pass.
5. Route added to `STRICT` in `scripts/page-audit.mjs`, then run `npm run verify` again.
6. Lighthouse on mobile: 100 in all four categories. Check the page at 320px and 1440px with the menu open and tables visible.
7. `updated` date set. Commit with a clear message, push, and confirm both CI and Cloudflare Pages are green.
8. Report to the owner in Banglish: keywords targeted, FRE score, what changed, and any facts that still need confirmation.

## 16. Open items waiting for the owner

- Confirm the spelling "SDF Corprt".
- LC terms for the payment section.
- Real factory photos and real customer testimonials (none are used until supplied).
- T-shirt page claims to confirm: tipping stripes, branded buttons, racer-back and slub fabric, strike-off approval, wash test, reorders skipping the proto sample.
- Delete old duplicate projects that show our content (`dhaka-bd.pages.dev`, `the-hug.pages.dev`).
