# SDF Clothing website: page playbook

These rules come from building the home page and the T-shirt page. Follow them for every new or reworked page.
`npm run check`, `npm run build` and `npm run verify` enforce most of them. CI runs all three on every push.

## 1. Before writing a page

1. Pick one search intent for the page. Check the keyword map (section 3) so no other page already owns it.
2. Choose one primary keyword and 3 to 5 supporting keywords. Each supporting keyword must be a close variant of this page's topic.
   It must never be another page's primary keyword.
3. Search the keyword and read the top 5 to 10 ranking pages. Note the questions they answer, the specs they list and the gaps they leave.
   Cover the gaps with facts we can stand behind. Never copy their wording.
4. Put every business fact in `src/data/company.ts` first, then use it in copy through a `{{token}}` or `fill()`.
   `npm run check` fails on hard-coded facts such as "300 pieces".

## 2. On-page placement (checked by `scripts/page-audit.mjs`)

| Element | Rule |
|---|---|
| Title | 50–60 characters. Primary keyword at the start. Ends with "\| SDF Clothing". |
| Meta description | 150–160 characters. Primary keyword in the first sentence. Ends with "SDF Clothing" or a plain fact. |
| H1 | Exactly one. Contains the primary keyword. Different wording from the title. |
| First 100 words | The answer paragraph names the primary keyword and says plainly what we do. |
| H2 and H3 | Primary keyword in at least one. No skipped levels. |
| Primary density | 0.8–2.0% of visible words in `<main>`. |
| Supporting keywords | Each appears 2+ times and in at least one heading, FAQ question or internal link text. |
| URL | Lowercase, hyphens, the primary keyword or its core noun. |
| Alt text | Describes the image in under 140 characters. At most one target keyword, only when it is the honest description. |
| Inbound links | At least 3 other pages link here. At least one link uses the primary or a supporting keyword as anchor text. |
| Outbound links | Only trusted sources. External links open in a new tab with "(opens in a new tab)" for screen readers. |

## 3. Keyword map (no cannibalization)

`npm run check` fails if two pages share a primary keyword. `page-audit` fails if a supporting keyword equals another page's primary.

| Page | Primary keyword | Supporting keywords |
|---|---|---|
| `/` | custom clothing manufacturer | apparel manufacturers, garments manufacturer, fashion manufacturer, low MOQ clothing manufacturing, private label clothing manufacturing (the last two are mentioned briefly and link to their spoke pages) |
| `/t-shirt-manufacturer/` | t-shirt manufacturer | custom t-shirt manufacturer, polo shirt manufacturer, private label t-shirts, oversized t-shirts, heavyweight t-shirts |
| `/hoodie-manufacturer/` | hoodie manufacturer | custom hoodie manufacturer, private label hoodies, sweatshirt manufacturer, zip hoodie manufacturer, heavyweight hoodie manufacturer |
| `/private-label-clothing-manufacturer/` | private label clothing manufacturer | private label apparel manufacturer, OEM clothing manufacturer, custom label clothing, white label clothing |
| `/low-moq-clothing-manufacturers/` | low MOQ clothing manufacturer | small batch clothing manufacturer, low minimum order clothing, minimum order quantity clothing |
| `/clothing-manufacturers-for-startups/` | clothing manufacturer for startups | clothing manufacturer for small brands, first clothing order, clothing manufacturer for new brands |
| `/clothing-manufacturer-bangladesh/` | clothing manufacturer in Bangladesh | garment manufacturer Bangladesh, apparel manufacturer Bangladesh, Bangladesh clothing factory |
| `/cut-and-sew-service/` | cut and sew manufacturer | cut and sew clothing, full package production, CMT clothing manufacturer |
| `/sample-service/` | clothing sample maker | clothing sample service, garment sample cost, proto sample clothing |
| `/how-to-find-clothing-manufacturer/` | how to find a clothing manufacturer | questions to ask a clothing manufacturer, types of apparel manufacturers |

Rules for the map:
- The home page is the hub. It may mention every topic briefly and link out. Product and service detail lives on the spoke page.
- A spoke page links back to the home page with "custom clothing manufacturer" or a close variant, and to related spokes with their primary keyword.
- When a new page is added, add its row here, its entry in `src/data/pages.ts` or its Markdown frontmatter, and its link in `src/data/nav.ts`.
- If two pages want the same term, give it to the page whose searcher intent fits best and link to it from the other.

## 4. Writing rules

- Write like a factory manager answering a buyer's email: plain, specific, short sentences.
- Flesch Reading Ease 60 or higher on every page, measured on prose only. Aim for 65–80. Keep sentences under 30 words.
- No semicolons in visible copy.
- No marketing language. `page-audit` blocks words such as world-class, leading, premium quality, high-quality, best price, one-stop, hassle-free, amazing, excellent.
  State the fact instead ("AQL 2.5 final inspection", not "top quality").
- No repeated sentences or 8-word phrases within a page, and no copy reused from another page. Target keywords may repeat.
- Every claim must be true for SDF Clothing today. Never invent names, reviews, numbers, clients or photos.
- Use active voice, "we" for SDF Clothing and "you" for the buyer.
- Short paragraphs of 2–4 lines. Use tables for specs and prices.
- Answer real buyer questions in the FAQ. Each answer starts with a direct yes, no or number.

## 5. Privacy and business rules

- Company name is "SDF Clothing". The parent "SDF Corprt" appears only in the footer and schema.
- Never show an email address or phone number. Use the `/contact/` form and the WhatsApp link `https://wa.me/8801819172080`.
- Never publish certificates, registration numbers, TIN, trade association names or memberships.
- No live video call offers.
- All printing and embroidery is in-house. Never mention partners.
- Show prices only for 300 pieces and 5,000 pieces, from `company.priceIndex`.
- Target buyers worldwide. Do not target Bangladesh as a market.

## 6. Page structure

A product or service page follows the T-shirt page pattern (`src/pages/t-shirt-manufacturer.astro`):

1. Hero with the H1, a one-paragraph answer and an infographic.
2. Facts at a glance (spec table).
3. Main content sections with H2s that each answer one question.
4. Prices from `PriceTable` with the `only` filter.
5. Order steps, quality checks and first-order guidance where relevant.
6. FAQ (5–9 questions), related pages, "About this page" and `CtaBand`.

Technical rules:
- A page with custom layout reads its frontmatter with `getEntry('landing', slug)` and is added to the `dedicated` set in `src/pages/[...slug].astro`.
- Use `BaseLayout`, which brings the header, footer, canonical, Open Graph and robots tags.
- Schema: WebPage, BreadcrumbList, Organization, plus Service or Product and FAQPage where the content exists.
- Images through `<Image />` or the `Infographic` component with width and height. Infographics are built in `src/lib/infographics.ts` from `company.ts`.
- Black theme only. Use the CSS variables in `src/styles/global.css`. Red is for accents, borders and buttons.

## 7. Finishing a page

1. `npm run check && npm run build && npm run verify` must pass.
2. Add the route to `STRICT` in `scripts/page-audit.mjs`. From then on every rule is a hard failure for that page.
3. Run Lighthouse on mobile. Target 100 in all four categories.
4. Update the `updated` date in the frontmatter or `pages.ts`.
