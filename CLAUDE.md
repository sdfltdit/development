# SDF Clothing website: project rules and page playbook

This file holds every rule agreed while building the home page (`/`) and the T-shirt page (`/t-shirt-manufacturer/`), checked against official Google and Bing guidance and 39 competitor and guide pages (see `docs/seo-research-2026-11.md`).
Read it fully before creating or reworking any page. When a rule here conflicts with an old page, the rule wins and the old page gets fixed.

Contents:
1. Project and workflow
2. Business facts and privacy (hard rules)
3. Keyword strategy and cannibalization
4. Research before writing
5. On-page SEO checklist
6. Writing: human tone, readability and proofreading
7. Content quality, E-E-A-T and AI search
8. What never goes on the site (spam and trust risks)
9. Page structure and components
10. Structured data
11. Images and infographics
12. Design, responsive and accessibility
13. Performance
14. Security, forms and privacy
15. Technical SEO, crawling, URLs and redirects
16. Launch and monitoring
17. Automated checks
18. Finishing a page
19. Open items waiting for the owner

---

## 1. Project and workflow

- Stack: Astro 6, static output, TypeScript strict, `trailingSlash: 'always'`. Content collection `landing` in `src/content/landing/*.md`.
- Repo: `github.com/sdfltdit/development`, branch `main`. Every push builds the staging preview on Cloudflare Pages (`development-3n2.pages.dev`).
  Production later runs on Cloudflare Workers (`wrangler.jsonc`, worker in `src/worker/index.ts` for `/api/*`).
- Never touch the owner's other GitHub repos or Cloudflare projects. The live site repo "cloth" stays as it is until launch. Its Pages project `cloth-2ou.pages.dev` is connected to `sdfltd.com`: it is the live site, not a duplicate. Never ask the owner to delete it.
- Before reporting a duplicate copy of our content, check that it is live with a fresh request (its `robots.txt` must load). Fetch tools can return cached copies of deleted projects. Checked 26 November 2026: `dhaka-bd.pages.dev`, `the-hug.pages.dev` and `test-5rx.pages.dev` are already deleted.
- Staging is hidden from search and AI bots by `scripts/staging.mjs`, which writes a bot-blocking `robots.txt` when `CF_PAGES=1`.
  Do not add a `noindex` header to staging. SEO testing tools must still be able to read it.
- Commit only after `npm run check`, `npm run build` and `npm run verify` pass locally. CI (`.github/workflows/ci.yml`) runs the same plus Lighthouse (median of 3 runs).
- `yearly-rebuild.yml` rebuilds on 1 January and 22 August so the footer year and "years in business" update. Never hard-code a year or an age.
- Talk to the owner in Banglish. Write all site copy in British English.
- Ask the owner before adding any claim, price or feature that is not already confirmed in `src/data/company.ts` or in this file.
- Product pages are built in batches of five and pushed to staging. Batches 1 to 19 are done (94 product pages). `/wedding-dress-manufacturer/` reuses its old URL, so its redirect was removed. `/polyester-clothing-manufacturer/` reuses its old URL and was taken off `scripts/planned-routes.txt`. From batch 14 the catalogue also covers small, high-margin textile items (bags, accessories, home textiles, pet clothing), chosen in the owner research of 26 November 2026. `/pet-clothing-manufacturer/` also reuses its old URL, and its old sub-pages now 301 to it. Three batch 13 pages reuse old site URLs (`/hi-vis-workwear-manufacturer/`, `/jumpsuit-romper-manufacturer/`, `/maternity-clothing-manufacturer/`), so their redirects were removed. Before building a page, check `scripts/legacy-urls.txt` for a matching old URL and build on it. The owner does not want leather or faux leather garment pages, and pages must not claim real leather garments. The goal is about 100 product pages, following `docs/product-roadmap.md`. Every new page needs its own search intent and a keyword no existing page owns. Variations (polo, tank, long sleeve, cargo pants, chinos, sweatpants, yoga pants) stay on their parent pages, and their old URLs 301 there.
- The new site is built fresh from competitor and buyer research, not from the old site's structure or copy. Old URLs matter only for redirects (section 15).
- Owner instruction, 26 November 2026: SDF Clothing is a full factory and makes everything a garment factory makes, knit, woven, cut-and-sew and flat-knit, including socks, sweaters, hats, lingerie with underwire, swimwear, denim with washing, padded and down outerwear, seam-taped waterproof jackets, tailored blazers (fused, half and full canvas), hand beading, garment dyeing and washing, heat-set pleating, bridal and evening wear and children's sleepwear. Pages describe these as things we do.
- Two limits still apply. Certificate and certification names are never published (section 2). Fabric performance and fibre claims (chlorine-resistant, UV, antimicrobial, fluid-resistant, waterproof rating, organic, recycled, bamboo) come from the mill's test report or certificate, and pages say so instead of claiming them as ours.

## 2. Business facts and privacy (hard rules)

Single source of truth: `src/data/company.ts`. Copy uses `{{tokens}}` in Markdown or `fill()` and the exported values in `.astro` files.
`facts-check` fails the build on hard-coded facts such as "300 pieces". `page-audit` fails on any unfilled `{{token}}`.
One number, one source: the hero, glance table, FAQ, meta description and schema must never disagree. Competitors lose trust exactly here.

Names and identity
- Company name: "SDF Clothing". Never "SDF Clothing Ltd" or "SDF Ltd".
- Parent company "SDF Corprt" appears only small, in the footer line and in schema `parentOrganization`. The spelling still needs owner confirmation.
- Founder name and job title come from `company.founder`.

Never publish
- Email addresses or phone numbers, in visible text, links or schema. Contact is the `/contact/` form and WhatsApp only.
- WhatsApp link is exactly `https://wa.me/8801819172080`, with no text parameter. Use `whatsappUrl` from `company.ts`.
- Certificates or certification names, company registration (RJSC), TIN, trade association names or member numbers. The `/certifications/` page explains our compliance approach without naming any.
- Live video call offers.
- Partners or subcontractors. All cutting, sewing, printing (screen, DTF, sublimation) and embroidery is in-house.
- Invented names, testimonials, reviews, client logos, numbers, counters or case studies.
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

- Prices never go in a `<title>`. They change, and Google warns against it.
- Every page that mentions the MOQ also says how it splits (per style, across colours and sizes). Buyers on competitor sites complain when this is unclear.

Markets and terms
- Target buyers worldwide. Bangladesh is where the factory is, never a target market. Use `shipping.regions` (North America, UK and Europe, Australia and NZ, Middle East, Asia and beyond).
- The `/clothing-manufacturer-bangladesh/` page is allowed because overseas buyers search for Bangladesh as a sourcing country. It is written for them, not for local buyers.
- Payment methods come from `terms.paymentMethods`: LC, T/T, Wise, WorldRemit, Xoom, etc.
- We work in any fabric (`capabilities.fabrics`), knit and woven. T-shirt weight range is `{{tshirtGsm}}` GSM.

## 3. Keyword strategy and cannibalization

One page, one search intent, one primary keyword, one URL.

- `keyword-check` fails if two pages share a primary keyword.
- `page-audit` fails if a supporting keyword equals another page's primary keyword, or if two pages (the home page included) claim the same supporting keyword.
- Before choosing keywords, read the map below. A new keyword goes to the page whose intent fits best. Other pages link to it instead of targeting it.
- Mentioning another page's keyword in passing is fine and natural. Targeting it (in a heading, title, FAQ question or repeated) is not.

Keyword types to cover on each page, where they fit naturally:
- Primary (head term) and 3 to 5 supporting variants (custom, private label, style or fabric variants).
- Related terms buyers use: fabrics, GSM, fits, printing methods, trims, sample stages, AQL, FOB.
- Question keywords as H2s or FAQ questions ("What GSM…", "How long…", "Do you…").
- Commercial and transactional terms in context: price, MOQ, sample, quote, order.
- Long-tail phrasing in FAQ questions, written the way a buyer asks. Do not create pages for each variation (see section 8).

Keyword map (keep it in sync with frontmatter and `pages.ts`):

| Page | Intent | Primary keyword | Supporting keywords |
|---|---|---|---|
| `/` (hub) | commercial | custom clothing manufacturer | apparel manufacturers, garments manufacturer, fashion manufacturer |
| `/t-shirt-manufacturer/` | commercial | t-shirt manufacturer | custom t-shirt manufacturer, polo shirt manufacturer, private label t-shirts, oversized t-shirts, heavyweight t-shirts |
| `/hoodie-manufacturer/` | commercial | hoodie manufacturer | custom hoodie manufacturer, private label hoodies, sweatshirt manufacturer, zip hoodie manufacturer, heavyweight hoodies |
| `/joggers-manufacturer/` | commercial | joggers manufacturer | sweatpants manufacturer, custom joggers, private label joggers, fleece joggers |
| `/pants-trousers-manufacturer/` | commercial | pants manufacturer | trousers manufacturer, cargo pants manufacturer, chino manufacturer, custom pants |
| `/shorts-manufacturer/` | commercial | shorts manufacturer | custom shorts manufacturer, sweat shorts, athletic shorts, private label shorts |
| `/shirt-manufacturer/` | commercial | shirt manufacturer | woven shirt manufacturer, custom shirt manufacturer, button-up shirts, private label shirts |
| `/jacket-manufacturer/` | commercial | jacket manufacturer | bomber jacket manufacturer, windbreaker manufacturer, custom jackets, coach jackets |
| `/activewear-manufacturer/` | commercial | activewear manufacturer | sportswear manufacturer, gym wear manufacturer, private label activewear, custom sportswear |
| `/leggings-manufacturer/` | commercial | leggings manufacturer | custom leggings, yoga pants manufacturer, squat-proof leggings, private label leggings |
| `/tracksuit-manufacturer/` | commercial | tracksuit manufacturer | custom tracksuits, track jackets, private label tracksuits, fleece tracksuits |
| `/streetwear-manufacturer/` | commercial | streetwear manufacturer | streetwear clothing manufacturer, custom streetwear, private label streetwear |
| `/dress-manufacturer/` | commercial | dress manufacturer | custom dresses, private label dresses, maxi dresses, jersey dresses |
| `/skirts-manufacturer/` | commercial | skirt manufacturer | custom skirts, midi skirts, pleated skirts, private label skirts |
| `/loungewear-manufacturer/` | commercial | loungewear manufacturer | pyjama manufacturer, sleepwear manufacturer, lounge sets, private label loungewear |
| `/kids-baby-clothing-manufacturer/` | commercial | kids clothing manufacturer | baby clothing manufacturer, children's clothing manufacturer, custom kids clothing, private label baby clothes |
| `/uniform-manufacturer/` | commercial | uniform manufacturer | workwear manufacturer, corporate uniforms, hospitality uniforms, custom work shirts |
| `/underwear-manufacturer/` | commercial | underwear manufacturer | boxer briefs manufacturer, private label underwear, custom underwear, men's underwear manufacturer |
| `/clothing-manufacturers-for-women/` | commercial | women's clothing manufacturer | womenswear manufacturer, custom women's clothing, blouse manufacturer, co-ord sets |
| `/plus-size-clothing-manufacturer/` | commercial | plus size clothing manufacturer | plus size grading, size inclusive clothing, extended sizes, private label plus size clothing |
| `/modest-fashion-manufacturer/` | commercial | modest fashion manufacturer | abaya manufacturer, modest clothing manufacturer, custom abayas, modest wear |
| `/merch-manufacturer/` | commercial | merch manufacturer | band merch, custom merch, creator merch, bulk merch |
| `/school-uniform-manufacturer/` | commercial | school uniform manufacturer | custom school uniforms, school polo shirts, PE kits, school sweatshirts |
| `/scrubs-manufacturer/` | commercial | scrubs manufacturer | medical scrubs manufacturer, custom scrubs, private label scrubs, scrub tops |
| `/cotton-clothing-manufacturer/` | commercial | cotton clothing manufacturer | combed cotton, ring-spun cotton, custom cotton clothing, cotton fabric weight |
| `/linen-clothing-manufacturer/` | commercial | linen clothing manufacturer | custom linen clothing, linen blend, pre-washed linen, private label linen clothing |
| `/bamboo-clothing-manufacturer/` | commercial | bamboo clothing manufacturer | bamboo viscose, viscose from bamboo, custom bamboo clothing, private label bamboo clothing |
| `/denim-manufacturer/` | commercial | denim manufacturer | jeans manufacturer, custom jeans, denim jacket manufacturer, private label jeans |
| `/swimwear-manufacturer/` | commercial | swimwear manufacturer | bikini manufacturer, custom swimwear, private label swimwear, swim shorts |
| `/sports-bra-manufacturer/` | commercial | sports bra manufacturer | custom sports bras, padded sports bras, private label sports bras, moulded cups |
| `/puffer-jacket-manufacturer/` | commercial | puffer jacket manufacturer | padded jackets, down jackets, custom puffer jackets, puffer vests |
| `/blazer-manufacturer/` | commercial | blazer manufacturer | school blazers, custom blazers, private label blazers, tailored jackets |
| `/socks-manufacturer/` | commercial | socks manufacturer | custom socks, private label socks, athletic socks, crew socks |
| `/sweater-manufacturer/` | commercial | sweater manufacturer | knitwear manufacturer, custom sweaters, cardigan manufacturer, private label knitwear |
| `/hat-manufacturer/` | commercial | hat manufacturer | cap manufacturer, custom caps, beanie manufacturer, bucket hats |
| `/lingerie-manufacturer/` | commercial | lingerie manufacturer | bra manufacturer, private label lingerie, custom bras, underwire bras |
| `/rain-jacket-manufacturer/` | commercial | rain jacket manufacturer | waterproof jacket manufacturer, custom rain jackets, seam-taped jackets, rainwear manufacturer |
| `/varsity-jacket-manufacturer/` | commercial | varsity jacket manufacturer | letterman jackets, custom varsity jackets, chenille patches, private label varsity jackets |
| `/fleece-jacket-manufacturer/` | commercial | fleece jacket manufacturer | polar fleece jackets, sherpa jackets, custom fleece jackets, quarter-zip fleece |
| `/softshell-jacket-manufacturer/` | commercial | softshell jacket manufacturer | custom softshell jackets, softshell vests, corporate softshell jackets, bonded softshell |
| `/coat-manufacturer/` | commercial | coat manufacturer | overcoat manufacturer, trench coat manufacturer, wool coats, custom coats |
| `/football-kit-manufacturer/` | commercial | football kit manufacturer | soccer uniforms, custom football shirts, sublimated football kits, goalkeeper kits |
| `/basketball-uniform-manufacturer/` | commercial | basketball uniform manufacturer | basketball jerseys, custom basketball uniforms, reversible basketball jerseys, basketball shorts |
| `/cycling-jersey-manufacturer/` | commercial | cycling jersey manufacturer | bib shorts, custom cycling kit, cycling apparel manufacturer, chamois pads |
| `/rugby-shirt-manufacturer/` | commercial | rugby shirt manufacturer | rugby jerseys, custom rugby shirts, rugby kits, heavyweight rugby shirts |
| `/baseball-uniform-manufacturer/` | commercial | baseball uniform manufacturer | baseball jerseys, custom baseball uniforms, baseball pants, softball uniforms |
| `/esports-jersey-manufacturer/` | commercial | esports jersey manufacturer | gaming jerseys, custom esports jerseys, esports apparel, esports hoodies |
| `/cheerleading-uniform-manufacturer/` | commercial | cheerleading uniform manufacturer | cheer uniforms, cheer shells, custom cheerleading uniforms, cheer skirts |
| `/dancewear-manufacturer/` | commercial | dancewear manufacturer | leotard manufacturer, dance costumes, custom dancewear, ballet wear |
| `/martial-arts-uniform-manufacturer/` | commercial | martial arts uniform manufacturer | BJJ gi manufacturer, karate uniforms, custom gis, judo uniforms |
| `/fightwear-manufacturer/` | commercial | fightwear manufacturer | MMA shorts, custom fight shorts, boxing shorts, BJJ rash guards |
| `/golf-apparel-manufacturer/` | commercial | golf apparel manufacturer | golf polo shirts, custom golf apparel, private label golf apparel, golf pullovers |
| `/tennis-wear-manufacturer/` | commercial | tennis wear manufacturer | tennis dresses, tennis skirts, custom tennis apparel, tennis polos |
| `/running-apparel-manufacturer/` | commercial | running apparel manufacturer | running shorts, running singlets, custom running gear, race shirts |
| `/compression-wear-manufacturer/` | commercial | compression wear manufacturer | compression shirts, compression tights, custom compression wear, compression sleeves |
| `/base-layer-manufacturer/` | commercial | base layer manufacturer | thermal underwear, merino base layers, thermal leggings, custom base layers |
| `/ski-wear-manufacturer/` | commercial | ski wear manufacturer | ski jackets, ski pants, custom ski wear, snowboard jackets |
| `/chef-uniform-manufacturer/` | commercial | chef uniform manufacturer | chef jackets, chef trousers, custom chef uniforms, chef coats |
| `/apron-manufacturer/` | commercial | apron manufacturer | custom aprons, bib aprons, waist aprons, private label aprons |
| `/lab-coat-manufacturer/` | commercial | lab coat manufacturer | custom lab coats, white lab coats, embroidered lab coats, medical lab coats |
| `/coverall-manufacturer/` | commercial | coverall manufacturer | boiler suits, custom coveralls, mechanic coveralls, insulated coveralls |
| `/hi-vis-workwear-manufacturer/` | commercial | hi-vis workwear manufacturer | high visibility clothing, hi-vis vests, custom hi-vis jackets, reflective safety clothing |
| `/security-uniform-manufacturer/` | commercial | security uniform manufacturer | security guard uniforms, custom security uniforms, security shirts, security jackets |
| `/hotel-uniform-manufacturer/` | commercial | hotel uniform manufacturer | housekeeping uniforms, spa uniforms, custom hotel uniforms, front desk uniforms |
| `/jumpsuit-romper-manufacturer/` | commercial | jumpsuit manufacturer | custom jumpsuits, playsuits, romper manufacturer, private label jumpsuits |
| `/maternity-clothing-manufacturer/` | commercial | maternity clothing manufacturer | maternity wear, nursing tops, custom maternity clothing, maternity dresses |
| `/silk-pillowcase-manufacturer/` | commercial | silk pillowcase manufacturer | mulberry silk pillowcases, satin pillowcases, custom silk pillowcases, private label silk pillowcases |
| `/sleep-mask-manufacturer/` | commercial | sleep mask manufacturer | silk eye masks, custom sleep masks, contoured sleep masks, private label sleep masks |
| `/embroidered-patch-manufacturer/` | commercial | embroidered patch manufacturer | custom embroidered patches, iron-on patches, hook-and-loop patches, uniform patches |
| `/pet-clothing-manufacturer/` | commercial | pet clothing manufacturer | dog hoodies, dog jackets, custom dog clothes, private label pet clothing |
| `/cushion-cover-manufacturer/` | commercial | cushion cover manufacturer | custom cushion covers, throw pillow covers, embroidered cushion covers, private label cushion covers |
| `/dust-bag-manufacturer/` | commercial | dust bag manufacturer | custom dust bags, shoe dust bags, handbag dust bags, garment bags |
| `/tote-bag-manufacturer/` | commercial | tote bag manufacturer | custom tote bags, canvas tote bags, cotton tote bags, private label tote bags |
| `/cosmetic-pouch-manufacturer/` | commercial | cosmetic pouch manufacturer | makeup bags, custom pouches, zipper pouches, toiletry bags |
| `/drawstring-bag-manufacturer/` | commercial | drawstring bag manufacturer | custom drawstring bags, drawstring backpacks, gym sacks, cinch bags |
| `/scarf-manufacturer/` | commercial | scarf manufacturer | custom scarves, printed silk scarves, knitted scarves, football scarves |
| `/bandana-manufacturer/` | commercial | bandana manufacturer | custom bandanas, printed bandanas, cotton bandanas, dog bandanas |
| `/neck-gaiter-manufacturer/` | commercial | neck gaiter manufacturer | custom neck gaiters, neck warmers, sublimated neck gaiters, cooling neck gaiters |
| `/hair-accessories-manufacturer/` | commercial | hair accessories manufacturer | custom scrunchies, satin bonnets, headbands, hair wraps |
| `/tie-manufacturer/` | commercial | tie manufacturer | custom ties, school ties, bow ties, corporate ties |
| `/baby-bib-manufacturer/` | commercial | baby bib manufacturer | muslin swaddles, bandana bibs, burp cloths, custom baby bibs |
| `/tea-towel-manufacturer/` | commercial | tea towel manufacturer | custom tea towels, printed tea towels, kitchen towels, oven gloves |
| `/table-linen-manufacturer/` | commercial | table linen manufacturer | custom napkins, tablecloths, table runners, placemats |
| `/gloves-manufacturer/` | commercial | gloves manufacturer | knitted gloves, custom gloves, fleece gloves, touchscreen gloves |
| `/shapewear-manufacturer/` | commercial | shapewear manufacturer | custom shapewear, private label shapewear, shaping shorts, shaping bodysuits |
| `/evening-dress-manufacturer/` | commercial | evening dress manufacturer | evening gowns, prom dresses, custom evening dresses, beaded dresses |
| `/wedding-dress-manufacturer/` | commercial | wedding dress manufacturer | bridal gowns, custom wedding dresses, private label wedding dresses, bridesmaid dresses |
| `/bodysuit-manufacturer/` | commercial | bodysuit manufacturer | crop tops, custom bodysuits, private label bodysuits, ribbed bodysuits |
| `/suit-manufacturer/` | commercial | suit manufacturer | custom suits, men's suits, women's suits, private label suits |
| `/menswear-manufacturer/` | commercial | menswear manufacturer | men's clothing manufacturer, custom menswear, private label menswear, men's casualwear |
| `/overalls-manufacturer/` | commercial | overalls manufacturer | dungarees, custom overalls, denim overalls, shortalls |
| `/kurta-manufacturer/` | commercial | kurta manufacturer | men's kurtas, kurtis, custom kurtas, kurta pyjama sets |
| `/salwar-kameez-manufacturer/` | commercial | salwar kameez manufacturer | shalwar kameez, salwar suits, custom salwar kameez, private label salwar kameez |
| `/hijab-manufacturer/` | commercial | hijab manufacturer | custom hijabs, modal hijabs, chiffon hijabs, private label hijabs |
| `/thobe-manufacturer/` | commercial | thobe manufacturer | kandura manufacturer, custom thobes, jubba, private label thobes |
| `/polyester-clothing-manufacturer/` | commercial | polyester clothing manufacturer | recycled polyester clothing, custom polyester clothing, poly-cotton clothing, private label polyester clothing |
| `/private-label-clothing-manufacturer/` | commercial | private label clothing manufacturer | private label clothing manufacturing, private label apparel manufacturer, OEM clothing manufacturer, custom label clothing, white label clothing |
| `/low-moq-clothing-manufacturers/` | commercial | low MOQ clothing manufacturer | low MOQ clothing manufacturing, small batch clothing manufacturer, low minimum order clothing, minimum order quantity clothing, clothing manufacturer small quantities |
| `/clothing-manufacturers-for-startups/` | commercial | clothing manufacturer for startups | clothing manufacturer for small brands, start a clothing brand manufacturer, first clothing order, clothing manufacturer for new brands |
| `/clothing-manufacturer-bangladesh/` | commercial | clothing manufacturer in Bangladesh | garment manufacturer Bangladesh, apparel manufacturer Bangladesh, Bangladesh clothing factory, manufacturing clothes in Bangladesh, Bangladesh vs China clothing |
| `/cut-and-sew-service/` | commercial | cut and sew manufacturer | cut and sew clothing manufacturer, cut and sew clothing, full package production, CMT clothing manufacturer |
| `/sample-service/` | commercial | clothing sample maker | clothing sample service, garment sample cost, proto sample clothing, pre-production sample |
| `/how-to-find-clothing-manufacturer/` | informational | how to find a clothing manufacturer | apparel manufacturers by country, how to choose apparel manufacturers, types of apparel manufacturers, where to find clothing manufacturers, questions to ask a clothing manufacturer |
| `/products/`, `/all-services/`, `/work-process/` | navigational | custom clothing products, clothing manufacturing services, clothing production process | none |
| Utility pages | navigational | brand phrases ("SDF Clothing prices", "verify SDF Clothing", "contact SDF Clothing") | none |

Hub and spoke linking
- The home page covers every topic briefly and links to the spoke that owns it. Detail lives only on the spoke.
- Every spoke links back to `/` and to 3 to 8 related spokes (`related` frontmatter), using the target page's keyword as anchor text where it reads naturally.
- When a spoke grows, check that the home page and sibling pages do not drift into covering the same topic in depth.

## 4. Research before writing

1. Search the primary keyword and its main variants. Read at least 10 ranking pages in full: factory sites, directories, buyer guides and People Also Ask.
2. Note what the best pages do well (numbers, process steps, comparison tables, buyer-risk sections, "what to send for a quote") and where they fail (no prices, conflicting numbers, empty FAQs, fluff).
3. List the questions buyers ask. Answer each with a fact we can stand behind.
4. Never copy competitor wording or structure. Never name competitors on the page.
5. Collect sources for citations (official or trade bodies, never competitors) in the `citations` frontmatter.
6. Write down any fact not yet in `company.ts` and ask the owner before using it.
7. Check for duplicate copies of our content elsewhere (old `*.pages.dev` projects) and tell the owner.
8. Add a short note of what was found to `docs/` so the next page starts from it.

## 5. On-page SEO checklist

`seo-check` and `page-audit` enforce the items marked (auto).

| Element | Rule |
|---|---|
| Title (auto) | 50–60 characters so it is not cut off (Google has no hard limit, but truncates). Primary keyword first. Ends with "\| SDF Clothing". Unique, not boilerplate. No prices or dates. |
| Meta description (auto) | 150–160 characters (same reason). Unique. Primary keyword in the first sentence. Says who it is for and one or two concrete facts (MOQ, sample days). No keyword lists. |
| H1 (auto) | Exactly one, the most prominent text on the page. Contains the primary keyword. Same topic as the title, worded differently. |
| First 100 words (auto) | The answer paragraph (`answer`, 160–520 characters) names the primary keyword and says plainly what we make, for whom, MOQ and timing. |
| Headings (auto) | H2 → H3 order, no skipped levels. Primary keyword in at least one H2. Supporting keywords in H2s, H3s or FAQ questions. Many H2s phrased as the buyer's question. |
| Primary density (auto) | 0.8–2.0% of visible words in `<main>`. Never forced. |
| Supporting keywords (auto) | Each 2+ times and in at least one heading, FAQ question or internal link text. |
| URL | Lowercase, hyphens, contains the primary keyword or its core noun. One URL per topic. Never change a live URL without a 301. |
| Canonical, robots, OG, Twitter (auto) | Set by `BaseLayout` and `Seo.astro` from `Astro.url`. Never hand-write them. |
| Internal links (auto) | At least 3 pages link to a finished page, and one uses its primary or a supporting keyword as anchor text. Anchor text says where the link goes. No "click here", "read more" or "learn more". No links to `#`. Do not chain links side by side or over-link. |
| External links | Only to sources that help the reader. `rehypeExternalLinks` adds `target="_blank"`, `rel="noopener noreferrer"` and "(opens in a new tab)" in Markdown. Do the same by hand in `.astro`. Use `nofollow` only for sources we do not trust. |
| Breadcrumbs | Every page except home, visible and in schema. |
| CTA | A quote CTA in the hero, one mid-page where it fits, and `CtaBand` at the end. No pop-ups, modals or newsletter prompts. |
| Dates | `published` and `updated` in frontmatter or `pages.ts`. Change `updated` only when the content changes in substance. Google treats date-bumping without real changes as a warning sign. |

## 6. Writing: human tone, readability and proofreading

Readability
- Flesch Reading Ease 60 or higher on every page, measured on prose only (p, li, td, summary, dd). Aim for 65–80. `page-audit` checks this.
- Sentences under 30 words (`page-audit`). Most between 10 and 20. Paragraphs 2–4 lines.
- Prefer short common words: "use" not "utilise", "help" not "facilitate", "about" not "approximately".
- No semicolons anywhere in visible copy (`seo-check`).

Human tone
- Write like a factory manager answering a buyer's email: plain, specific, friendly, "we" for SDF Clothing and "you" for the buyer.
- Active voice. Concrete numbers from `company.ts` instead of adjectives.
- No marketing or self-praise. `page-audit` blocks words such as world-class, leading, premier, premium quality, high-quality, best price, one-stop, hassle-free, cutting-edge, amazing, excellent, unparalleled, trusted by, trusted partner, passion, we pride ourselves, look no further. State the fact instead ("AQL 2.5 final inspection", not "top quality").
- No AI-sounding filler. `page-audit` blocks delve, seamless (so write "circular-knit" for seamless knitting), robust, unlock, leverage, game-changer, tailored solutions, "in today's", "it's worth noting", "in conclusion". Do not open sections with rhetorical questions or end them by restating what was just said.
- Vary sentence openings and lengths. Do not start line after line with "We".
- Be honest about limits. Say plainly what we do not do (no blanks, no stock, no partners).

Proofreading
- British English everywhere (colour, programme, fibre, labelling, organise, centre). `page-audit` fails on American spellings in visible text.
- Product nouns must match the page. A copy-paste slip such as "each hoodie" on the polo section is the most common error on competitor sites. Read every FAQ answer against the page topic.
- No leftover text: TODO, TBD, lorem, placeholder, undefined, NaN or `{{token}}` (`page-audit`).
- No empty FAQ answers (`page-audit`).
- Read the finished page once aloud from top to bottom before committing.

Duplicate content
- No sentence and no 8-word phrase repeated within a page (`page-audit`), except target keywords.
- No paragraph copied from another page. If two pages need the same fact, state it in new words and link to the page that owns the topic.
- FAQ questions must not repeat across pages. A shared question goes on the page that owns the topic.
- Target keywords may repeat as often as reads naturally within the density limit.

## 7. Content quality, E-E-A-T and AI search

What makes a page better than the competitors we studied
- Real numbers they hide: prices at 300 and 5,000 pieces, MOQ split, sample days, bulk days, AQL level, FOB port.
- Process detail that shows experience: what we check at each stage, what goes wrong and how we prevent it.
- A buyer-risk section where it fits (reorder colour drift, prints that crack, risky first orders, small orders ignored) answered with what we actually do.
- A "What to send for a quote" list so buyers know how to start.
- Comparison tables where a buyer must choose: GSM bands, printing methods, CMT vs full package, sample types.
- Honest limits.

E-E-A-T
- "About this page" block on every product, service and guide page: who reviewed it (founder from `company.founder`, linked to `/about/`), where the facts come from, and how to report an error. Schema `WebPage` gets `reviewed: true`.
- Guide pages (`kind: guide`) also show a visible byline and a table of contents when they have 6 or more H2s, and cite official or trade sources.
- Every page is fact-checked against `company.ts` and reviewed before it is published.
- The `answer` paragraph and the first sentence of each FAQ answer give a direct yes, no or number first, then the detail.
- Keep entity facts identical everywhere (name, founded year, MOQ, sample days, location). `company.ts` makes this automatic.

AI search (Google AI Overviews and AI Mode, ChatGPT search, Copilot, Perplexity)
- Google's own guidance: AI search is still SEO. Pages must be indexable and eligible for a snippet. No special markup, llms.txt, chunking or rewriting for AI is needed.
- Unique, first-hand, non-commodity content wins. Ask "could a generic AI write this page without our records?" If yes, the page needs more substance.
- Clear headings, short paragraphs, tables and lists make answers easy to quote.
- `llms.txt` (`src/pages/llms.txt.ts`) stays for non-Google tools. Set `inLlms` and `llmsLabel` for new hand-built pages. Google ignores it.
- Never hide instructions for AI systems in a page. Bing treats this as prompt injection abuse.

Length
- Google has no preferred word count. Cover the topic fully and stop. As a guide from the pages that rank: product and service pages usually land at 900–1,600 words of main content, guides at 1,800–2,500. Never pad to reach a number.

## 8. What never goes on the site (spam and trust risks)

- No location or doorway pages ("T-shirt manufacturer for Canada", "hoodies for London") and no long lists of countries or cities. Two competitors we studied do this, and Google's spam policy names it.
- No pages mass-produced for keyword variations or AI fan-out queries. A higher page count does not make a site better.
- No keyword stuffing in copy, headings, alt text or link text.
- No hidden text. Accordions, tabs and screen-reader-only text are fine.
- No superlatives without proof, no fake counters ("2,500+ brands"), no client logos without permission.
- No paid or swapped links, no artificial mentions.
- No pop-ups, countdown banners or stale offers.
- No two URLs for the same topic.

## 9. Page structure and components

Layout and shared parts
- Every page uses `BaseLayout`, which includes `SiteHeader`, `SiteFooter`, `Seo`, skip link and scripts. Header and footer change in one place and update every page.
- Navigation lives in `src/data/nav.ts`. The header Products menu and the home page show only the 12 core products in `featuredProducts` plus "All products", so the menu stays usable as the catalogue grows. New product pages are not added to the header menu. They are reached from `/products/` (which lists every product automatically) and from related links on sibling pages.
- Header: badge logo, mobile `<details>` menu closed before paint on mobile, body scroll locked while open, links close the menu.
- Footer: badge logo, groups as `<details>` (closed on mobile below 48rem, open on desktop), "Part of SDF Corprt." line, WhatsApp link, auto year.
- No mobile sticky CTA bar. No theme toggle.

Product pages use `src/components/ProductPage.astro`
- SEO fields, specs and FAQ go in `src/content/landing/<slug>.md` (frontmatter only). Set `linkText` to a short anchor that contains the primary keyword, such as "Joggers manufacturer details". The home page and the products hub use it.
- The rest of the copy goes in a typed file `src/data/products/<slug>.ts` (`ProductContent` in `types.ts`): styles, two to four content blocks (table, checklist or prose), prices or a "how it is priced" note, steps, quality, what to send for a quote, first order.
- The page file `src/pages/<slug>.astro` only imports the data file and renders `<ProductPage>`. Add the slug to `dedicated` in `src/pages/[...slug].astro`.
- The hero uses a labelled garment sketch from `src/lib/garments.ts` (`garment-<key>` infographic). Add a sketch for a new garment, check it as a PNG with `rsvg-convert`, and keep every label explained in the page text.
- Price tokens are generated from `company.priceIndex`: `{{joggersFrom}}`, `{{joggersBulk}}`, `{{pulloverHoodieFrom}}` and so on. Products without a price row get a `noPrice` note instead of a number.

Product or service page section order (the T-shirt page is hand-built, the others use `ProductPage`)
1. Hero: eyebrow, H1, answer paragraph, two CTAs, infographic.
2. Facts at a glance: spec table (MOQ with its split, sample and bulk days, fabrics, weights, printing, port) plus a supporting infographic.
3. Styles or options as cards, linking to related spokes where relevant.
4. Fabric, printing or option tables.
5. A section for each supporting keyword that needs one (for example the polo section).
6. Buyer risks and how we handle them, where the topic has them.
7. Prices with `<PriceTable only={[...]}>`.
8. Order steps, quality checklist, what to send for a quote, first-order guidance.
9. FAQ (5–9 questions, `FaqList`), `RelatedLinks`, "About this page", `CtaBand`.

Guide page pattern (`kind: guide`)
1. H1 and a short direct answer.
2. Byline, table of contents.
3. Steps, comparison tables and checklists.
4. A neutral section on when SDF Clothing is and is not a fit, with one link to the relevant spoke.
5. FAQ, sources, "About this page", `CtaBand`.

Dedicated pages
- A page with its own layout keeps its SEO fields and FAQ in `src/content/landing/<slug>.md` (frontmatter only) and reads them with `getEntry('landing', '<slug>')`.
- Add the slug to the `dedicated` set inside `getStaticPaths` in `src/pages/[...slug].astro` so the generic template skips it.
- Simple spoke pages can stay on the generic template with Markdown body.

Frontmatter fields (validated by Zod in `src/content.config.ts`): kind, hub, navLabel, cardSummary, title, description, h1, eyebrow, primaryKeyword, secondaryKeywords, intent, answer, facts, specs, specsCaption, showPrices, serviceType, citations, faq, related, published, updated.

## 10. Structured data

Built in `src/lib/schema.ts`. Never paste JSON-LD by hand. Validate new types with the Rich Results Test and the Schema.org validator.
- Every page: `WebPage` (with dates, `reviewed` where reviewed) and `BreadcrumbList` (except home).
- Full `Organization` on the home page and `/about/` only (`fullOrganization: true`). Other pages reference it by `@id`. It carries `parentOrganization` (SDF Corprt), `areaServed: Worldwide`, logo `logo.png` 600×526 (works on white), founder. No certification, association, phone or email data.
- Home: `Organization`, `WebSite`.
- Product and service pages: `Service` with `serviceType`, `provider` and `audience`.
- Guide pages: `Article` with author, publisher, dates.
- FAQ sections: `FAQPage`. Google stopped showing FAQ rich results on 7 May 2026, but the markup stays valid and other tools read it.
- Only mark up content that is visible on the page. No `Review` or `AggregateRating` until real reviews exist. Schema is never a ranking shortcut.

## 11. Images and infographics

- Use `<img>` (or Astro `<Image />`), never CSS backgrounds, for meaningful images. Width and height always set.
- Alt text describes the image in context in under 140 characters (`page-audit`). At most one target keyword, only when it is the honest description. Decorative images use `alt=""`.
- File names are short and descriptive (`heavyweight-tshirt-neck-rib.webp`, not `IMG_0023.jpg`).
- Place images next to the text they illustrate. Reuse the same URL for the same image.
- Every fact shown inside an infographic must also appear as text or in a table on the same page. Search engines and screen readers cannot read figures inside images.
- Infographics come from `src/lib/infographics.ts`, built from `company.ts`, dark palette only, served at `/images/infographics/<name>-dark.svg`. A new one needs width, height and alt in `infographicMeta`.
- Real factory photos only, when the owner supplies them. Compress to WebP or AVIF, keep the original in the repo.

## 12. Design, responsive and accessibility

Theme
- Black only (`#000`) with thin red accents. Tokens in `src/styles/global.css`: `--color-accent` #ff3333 for red text, `--color-accent-strong` #cc0000 for buttons and borders, `--color-accent-strong-hover` #e00000, white focus ring. `color-scheme: dark`, theme colour `#000000`.
- Use CSS variables for every colour, space and font size. BEM class names. No inline styles except computed values.
- Logo: `logo-badge.svg` (white circle, red ring) in header, footer, favicons, app icons and OG image. `logo.png` is for schema only.

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

## 13. Performance

- Target Lighthouse 100 on mobile for performance, accessibility, best practices and SEO. CI fails below 90 (performance) and 95 (others).
- Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS 0 (CI fails above 0.01).
- Static HTML by default. Add client JavaScript only when a feature needs it, and keep it small and inline-hashed or bundled.
- Above-the-fold image: `loading="eager"` and `fetchpriority="high"`. Everything else lazy.
- Self-hosted fonts in `public/fonts` with `font-display: swap`, preloaded where critical.
- Passive listeners for scroll and touch events.

## 14. Security, forms and privacy

- Headers in `public/_headers`: HSTS, CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy.
- CSP uses hashes. `scripts/postbuild.mjs` hashes every inline script and style. Any new inline script must survive this, so never add `unsafe-inline`.
  New third-party hosts must be added to the CSP on purpose, never with a wildcard.
- Forms post to the worker (`/api/*`). The worker validates every field, checks Cloudflare Turnstile and rate-limits per IP. Keep server-side validation and spam protection on any new form.
- No secrets in front-end code. Keys live in Cloudflare environment variables.
- Forms show a notice on how data is used, linking to `/privacy/`.
- The site sets no tracking cookies (stated on `/cookies/`), so there is no cookie banner. Adding GA4, Meta Pixel, Hotjar or similar needs owner approval, a consent banner and updates to `/cookies/`, `/privacy/` and the CSP first.

## 15. Technical SEO, crawling, URLs and redirects

- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` and `llms.txt` are generated from `src/data/pages.ts` and the collection. A page is included automatically once registered.
- Production `robots.txt` allows all crawlers except Bytespider and blocks `/api/`. Search and AI answer crawlers (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot) must stay allowed. Whether to allow AI training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) is an owner decision.
- Never block a page with robots.txt to keep it out of search. Use `noindex`.
- `scripts/indexnow.mjs` pings Bing and other IndexNow engines after production deploys. Google does not use IndexNow.
- Old site URLs: the new site launches on the same domain, so old URLs that Google has indexed or other sites link to would turn into 404s and lose their rankings. Every URL in `scripts/legacy-urls.txt` must 301 to the best new page through `public/_redirects`. Point straight at the final page (no chains). An old URL with no matching new page goes to the nearest hub, never to a page built just to catch it. `redirect-check` fails otherwise. Pages planned for later go in `scripts/planned-routes.txt`.
- Custom 404 page with navigation. HTTPS only, one host (no `www` duplicate) at launch.
- English only for now. Add `hreflang` only if a translated version is created.

## 16. Launch and monitoring

- Verify the domain in Google Search Console and Bing Webmaster Tools, submit `sitemap.xml` to both.
- Watch the Search Console performance and generative AI reports and the Bing AI Performance report (Copilot citations) monthly.
- Check Core Web Vitals in Search Console after launch.
- Re-run the research in `docs/` once a year or after a major Google or Bing guideline change, and update this file.

## 17. Automated checks

| Command | Script | What it checks |
|---|---|---|
| `npm run check` | `astro check`, `keyword-check`, `facts-check` | Types, unique primary keywords, no hard-coded facts |
| `npm run build` | `astro build`, `postbuild`, `staging` | Build, CSP hashes, staging robots |
| `npm run verify` | `seo-check` | Title and description length, H1, headings, canonical, schema, images, links, orphans, sitemap, no email, phone, semicolon, association name or partner wording |
| | `redirect-check` | Every legacy URL redirects to a real page |
| | `page-audit` | FRE ≥ 60, marketing and AI-filler words, British spelling, leftover text and unfilled tokens, dead or generic links, empty FAQ answers, keyword placement and density, supporting keywords, cannibalization across all pages, long sentences, repeated phrases, alt text, inbound links and anchors |
| CI | Lighthouse CI (`lighthouserc.json`) | Scores, CLS and LCP on key pages, median of 3 runs |

`page-audit` hard-fails pages in its `STRICT` set and prints warnings for the rest. Cannibalization errors fail for every page. Add a page to `STRICT` once it follows this playbook. Pages in `STRICT` now: `/`, `/t-shirt-manufacturer/`, `/hoodie-manufacturer/`, `/joggers-manufacturer/`, `/pants-trousers-manufacturer/`, `/shorts-manufacturer/`, `/shirt-manufacturer/`, `/jacket-manufacturer/`, `/activewear-manufacturer/`, `/leggings-manufacturer/`, `/tracksuit-manufacturer/`, `/streetwear-manufacturer/`, `/dress-manufacturer/`, `/skirts-manufacturer/`, `/loungewear-manufacturer/`, `/kids-baby-clothing-manufacturer/`, `/uniform-manufacturer/`, `/underwear-manufacturer/`, `/clothing-manufacturers-for-women/`, `/plus-size-clothing-manufacturer/`, `/modest-fashion-manufacturer/`, `/merch-manufacturer/`, `/school-uniform-manufacturer/`, `/scrubs-manufacturer/`, `/cotton-clothing-manufacturer/`, `/linen-clothing-manufacturer/`, `/bamboo-clothing-manufacturer/`, `/denim-manufacturer/`, `/swimwear-manufacturer/`, `/sports-bra-manufacturer/`, `/puffer-jacket-manufacturer/`, `/blazer-manufacturer/`, `/socks-manufacturer/`, `/sweater-manufacturer/`, `/hat-manufacturer/`, `/lingerie-manufacturer/`, `/rain-jacket-manufacturer/`, `/varsity-jacket-manufacturer/`, `/fleece-jacket-manufacturer/`, `/softshell-jacket-manufacturer/`, `/coat-manufacturer/`, `/football-kit-manufacturer/`, `/basketball-uniform-manufacturer/`, `/cycling-jersey-manufacturer/`, `/rugby-shirt-manufacturer/`, `/baseball-uniform-manufacturer/`, `/esports-jersey-manufacturer/`, `/cheerleading-uniform-manufacturer/`, `/dancewear-manufacturer/`, `/martial-arts-uniform-manufacturer/`, `/fightwear-manufacturer/`, `/golf-apparel-manufacturer/`, `/tennis-wear-manufacturer/`, `/running-apparel-manufacturer/`, `/compression-wear-manufacturer/`, `/base-layer-manufacturer/`, `/ski-wear-manufacturer/`, `/chef-uniform-manufacturer/`, `/apron-manufacturer/`, `/lab-coat-manufacturer/`, `/coverall-manufacturer/`, `/hi-vis-workwear-manufacturer/`, `/security-uniform-manufacturer/`, `/hotel-uniform-manufacturer/`, `/jumpsuit-romper-manufacturer/`, `/maternity-clothing-manufacturer/`, `/silk-pillowcase-manufacturer/`, `/sleep-mask-manufacturer/`, `/embroidered-patch-manufacturer/`, `/pet-clothing-manufacturer/`, `/cushion-cover-manufacturer/`, `/dust-bag-manufacturer/`, `/tote-bag-manufacturer/`, `/cosmetic-pouch-manufacturer/`, `/drawstring-bag-manufacturer/`, `/scarf-manufacturer/`, `/bandana-manufacturer/`, `/neck-gaiter-manufacturer/`, `/hair-accessories-manufacturer/`, `/tie-manufacturer/`, `/baby-bib-manufacturer/`, `/tea-towel-manufacturer/`, `/table-linen-manufacturer/`, `/gloves-manufacturer/`, `/shapewear-manufacturer/`, `/evening-dress-manufacturer/`, `/wedding-dress-manufacturer/`, `/bodysuit-manufacturer/`, `/suit-manufacturer/`, `/menswear-manufacturer/`, `/overalls-manufacturer/`, `/kurta-manufacturer/`, `/salwar-kameez-manufacturer/`, `/hijab-manufacturer/`, `/thobe-manufacturer/`, `/polyester-clothing-manufacturer/`.

What no script can check, so a person must: facts are true, product nouns match the page, the page answers the buyer better than the top results, and it reads like a person wrote it.

## 18. Finishing a page

1. Research note saved in `docs/`. All facts confirmed and in `company.ts`. Unconfirmed claims removed or asked about.
2. Keyword map row updated in section 3. `primaryKeyword` and `secondaryKeywords` set in frontmatter or `pages.ts`.
3. Page linked from `nav.ts`, its hub page, the home page where relevant and at least 3 pages in total, one with keyword anchor text.
4. `npm run check && npm run build && npm run verify` pass.
5. Route added to `STRICT` in `scripts/page-audit.mjs`, then `npm run verify` again.
6. Lighthouse on mobile: 100 in all four categories. Check the page at 320px and 1440px with the menu open and tables visible.
7. Read the page aloud once. Check every FAQ answer matches the page topic.
8. `updated` date set. Commit with a clear message, push, and confirm both CI and Cloudflare Pages are green.
9. Report to the owner in Banglish: keywords targeted, FRE score, what changed, and any facts that still need confirmation.

## 19. Open items waiting for the owner

- Confirm the spelling "SDF Corprt".
- LC terms for the payment section.
- Real factory photos and real customer testimonials or case studies (none are used until supplied).
- T-shirt page claims to confirm: tipping stripes, branded buttons, racer-back and slub fabric, strike-off approval, wash test, reorders skipping the proto sample.
- Fabric claims: bamboo clothing is labelled "viscose made from bamboo" with no antibacterial or green claims (FTC). Organic or recycled claims rest on the mill's certificate, never on ours.
- Kids' and school uniform pages: we leave lab testing and certificates to the brand or importer. Confirm this is how SDF Clothing works.
- Decide whether AI training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) may crawl the live site.
- Safety garments (high-visibility, flame-resistant, protective lab coats): pages say the fabric or tape rating comes from its maker and the buyer arranges certification of the finished garment. Confirm this is how SDF Clothing works.
- Silk: does SDF Clothing work with pure mulberry silk as well as polyester satin? Pages offer both, with silk weight and grade taken from the mill's report.
- Towels: does SDF Clothing weave terry fabric, or buy it and cut, sew and embroider? Needed before a towel or bathrobe page.
- Embroidered patches: pages offer embroidered and sublimation-printed patches only. Woven patches are not offered unless the owner confirms label weaving.
- Decide whether analytics (GA4 or similar) is wanted, which needs a consent banner.
