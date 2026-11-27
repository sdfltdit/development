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
- Product pages are built in batches of five and pushed to staging. Batches 1 to 21 are done (104 product pages). Batch 20 reuses the old `/hemp-clothing-manufacturer/`, `/modal-clothing-manufacturer/` and `/wool-clothing-manufacturer/` URLs, so their redirects and planned-route lines were removed. The lyocell page lives at `/lyocell-clothing-manufacturer/` and the old `/tencel-clothing-manufacturer/` URL 301s to it, because TENCEL is a fibre brand's trademark. Brand fibre names appear only as an explanation, never as our claim. Garment dyeing and washing are not product pages: they become service pages on the old `/dyeing-service/` and `/washing-service/` URLs, so no vintage-wash or garment-dyed product page is built. `/wedding-dress-manufacturer/` reuses its old URL, so its redirect was removed. `/polyester-clothing-manufacturer/` reuses its old URL and was taken off `scripts/planned-routes.txt`. From batch 14 the catalogue also covers small, high-margin textile items (bags, accessories, home textiles, pet clothing), chosen in the owner research of 26 November 2026. `/pet-clothing-manufacturer/` also reuses its old URL, and its old sub-pages now 301 to it. Three batch 13 pages reuse old site URLs (`/hi-vis-workwear-manufacturer/`, `/jumpsuit-romper-manufacturer/`, `/maternity-clothing-manufacturer/`), so their redirects were removed. Before building a page, check `scripts/legacy-urls.txt` for a matching old URL and build on it. The owner does not want leather or faux leather garment pages, and pages must not claim real leather garments. The goal is about 100 product pages, following `docs/product-roadmap.md`. Every new page needs its own search intent and a keyword no existing page owns. Variations (polo, tank, long sleeve, cargo pants, chinos, sweatpants, yoga pants) stay on their parent pages, and their old URLs 301 there.
- Service pages from 26 November 2026 use the same `ProductPage` component with `kind: service` and `hub: services`, so their breadcrumb reads Services and they list on `/all-services/`. Each has a sketch that labels the service work (embroidery placements, print areas, dye effects, wash effects, pattern marks). Services are offered on the garments we make, not on blanks sent in. `/printing/screen-printing/` 301s to `/printing-service/`. `/full-package-production/` (and `/garment-development-service/`) 301 to `/cut-and-sew-service/`, which owns that keyword. `/fulfillment-service/` 301s to `/all-services/`, because no fulfilment service is confirmed. Fabric, trims and labels are sourced for garments we produce, never sold on their own.
- The new site is built fresh from competitor and buyer research, not from the old site's structure or copy. Old URLs matter only for redirects (section 15).
- Owner instruction, 26 November 2026: SDF Clothing is a full factory and makes everything a garment factory makes, knit, woven, cut-and-sew and flat-knit, including socks, sweaters, hats, lingerie with underwire, swimwear, denim with washing, padded and down outerwear, seam-taped waterproof jackets, tailored blazers (fused, half and full canvas), hand beading, garment dyeing and washing, heat-set pleating, bridal and evening wear and children's sleepwear. Pages describe these as things we do.
- Two limits still apply. Certificate and certification names are never published (section 2). Fabric performance and fibre claims (chlorine-resistant, UV, antimicrobial, fluid-resistant, waterproof rating, organic, recycled, bamboo) come from the mill's test report or certificate, and pages say so instead of claiming them as ours.

## 2. Business facts and privacy (hard rules)

Single source of truth: `src/data/company.ts`. Copy uses `{{tokens}}` in Markdown or `fill()` and the exported values in `.astro` files.
`facts-check` fails the build on hard-coded facts such as "300 pieces". `page-audit` fails on any unfilled `{{token}}`.
One number, one source: the hero, glance table, FAQ, meta description and schema must never disagree. Competitors lose trust exactly here.

Names and identity
- Company name: "SDF Clothing". Never "SDF Clothing Ltd" or "SDF Ltd".
- Parent company "SDF Corprt" (spelling confirmed by the owner, 27 November 2026) appears in the footer line, on `/about/` and in schema `parentOrganization`.
- Founder name and job title come from `company.founder`.

Never publish
- Email addresses or phone numbers, in visible text, links or schema. Contact is the `/contact/` form and WhatsApp only.
- WhatsApp link is exactly `https://wa.me/8801819172080`, with no text parameter. Use `whatsappUrl` from `company.ts`.
- Certificates or certification names, company registration (RJSC), TIN, trade association names or member numbers. The `/certifications/` page explains our compliance approach without naming any.
- Live video call offers.
- Partners or subcontractors. All cutting, sewing, printing (screen, DTF, sublimation) and embroidery is in-house.
  - One owner-confirmed exception (27 November 2026): our sister company makes knit and woven fabric for orders above 5,000 pieces per style, and trims and garment accessories. Never name it, never call it a partner or subcontractor, and use only the `sisterFabricAbove` and `sisterCompany` tokens (`sisterCompanyPolicy` in `company.ts`).
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
- Payment is in three steps for T/T, Wise, Xoom and other direct payments: a 30% deposit to start sampling, then 40% after the sample is approved to start bulk, then 30% when bulk is ready, before delivery (`terms.payment`, `{{payment}}`, `{{paymentScope}}`). Owner instruction, 27 November 2026: there is no separate sample fee. The deposit covers the sample, up to 10 free rounds of corrections (`terms.sampleCorrections`) and express courier door to door anywhere in the world within `{{sampleDays}}` days (`terms.sampleCourier`). Use `sampleFeePolicy` or `{{sampleFee}}`, never a hand-written version. LC orders are paid entirely under the LC, sampling included, with no T/T deposit. Guides may still tell buyers that other factories' quotes should show a sample fee. Standard LC terms (owner instruction, 26 November 2026, updated 27 November) live in `terms.lc`: irrevocable, at sight, UCP 600, the whole order including sampling under the LC, the usual shipping documents, at least 21 days to present, partial shipment and transhipment allowed, bank charges split by country, draft wording checked first. They show on `/work-process/#letter-of-credit`.
- We work in any fabric (`capabilities.fabrics`), knit and woven, and at any GSM (owner, 27 November 2026). `{{tshirtGsm}}` and `{{fleeceGsm}}` are only the weights we make most often, so always word them as "most often", never as a limit.

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
| `/hemp-clothing-manufacturer/` | commercial | hemp clothing manufacturer | custom hemp clothing, hemp cotton blend, hemp fabric, private label hemp clothing |
| `/modal-clothing-manufacturer/` | commercial | modal clothing manufacturer | micro modal, custom modal clothing, modal blend, private label modal clothing |
| `/french-terry-clothing-manufacturer/` | commercial | French terry clothing manufacturer | loopback terry, custom French terry clothing, French terry fabric, private label French terry |
| `/corduroy-clothing-manufacturer/` | commercial | corduroy clothing manufacturer | corduroy jackets, corduroy trousers, custom corduroy clothing, wide wale corduroy |
| `/wool-clothing-manufacturer/` | commercial | wool clothing manufacturer | custom wool clothing, merino wool clothing, wool blend clothing, private label wool clothing |
| `/lyocell-clothing-manufacturer/` | commercial | lyocell clothing manufacturer | custom lyocell clothing, lyocell fabric, lyocell blend, private label lyocell clothing |
| `/velour-clothing-manufacturer/` | commercial | velour clothing manufacturer | velour tracksuits, custom velour clothing, velour hoodies, private label velour |
| `/tie-dye-clothing-manufacturer/` | commercial | tie-dye clothing manufacturer | custom tie-dye, tie-dye hoodies, tie-dye t-shirts, bulk tie-dye |
| `/sublimated-clothing-manufacturer/` | commercial | sublimated clothing manufacturer | sublimation printing, all-over print clothing, custom sublimated clothing, dye sublimation apparel |
| `/adaptive-clothing-manufacturer/` | commercial | adaptive clothing manufacturer | magnetic closure clothing, seated wear, custom adaptive clothing, sensory-friendly clothing |
| `/viscose-clothing-manufacturer/` | commercial | viscose clothing manufacturer | rayon clothing manufacturer, viscose challis, viscose fabric, custom viscose clothing |
| `/nylon-clothing-manufacturer/` | commercial | nylon clothing manufacturer | nylon spandex, polyamide fabric, custom nylon clothing, nylon jackets |
| `/chiffon-clothing-manufacturer/` | commercial | chiffon clothing manufacturer | chiffon blouses, chiffon dresses, polyester chiffon, chiffon vs georgette |
| `/fleece-clothing-manufacturer/` | commercial | fleece clothing manufacturer | brushed fleece, cotton fleece, polar fleece fabric, anti-pill fleece |
| `/ripstop-clothing-manufacturer/` | commercial | ripstop clothing manufacturer | ripstop fabric, ripstop cargo pants, nylon ripstop, cotton ripstop |
| `/jersey-knit-clothing-manufacturer/` | commercial | jersey knit clothing manufacturer | single jersey, cotton jersey fabric, slub jersey, custom jersey clothing |
| `/rib-knit-clothing-manufacturer/` | commercial | rib knit clothing manufacturer | ribbed co-ord sets, 1x1 rib, 2x2 rib, ribbed dresses |
| `/waffle-knit-clothing-manufacturer/` | commercial | waffle knit clothing manufacturer | waffle knit lounge sets, thermal waffle, waffle henley, custom waffle clothing |
| `/ponte-clothing-manufacturer/` | commercial | ponte clothing manufacturer | ponte roma, ponte trousers, ponte dresses, double knit |
| `/scuba-fabric-clothing-manufacturer/` | commercial | scuba fabric clothing manufacturer | scuba dresses, scuba crepe, neoprene-look fabric, custom scuba clothing |
| `/mesh-clothing-manufacturer/` | commercial | mesh clothing manufacturer | athletic mesh, power mesh, mesh shorts, custom mesh clothing |
| `/spandex-clothing-manufacturer/` | commercial | spandex clothing manufacturer | elastane fabric, four-way stretch, cotton spandex, custom spandex clothing |
| `/acrylic-clothing-manufacturer/` | commercial | acrylic clothing manufacturer | acrylic knitwear, acrylic sweaters, acrylic beanies, acrylic vs wool |
| `/georgette-clothing-manufacturer/` | commercial | georgette clothing manufacturer | georgette dresses, polyester georgette, double georgette, custom georgette clothing |
| `/crepe-clothing-manufacturer/` | commercial | crepe clothing manufacturer | crepe fabric, crepe dresses, crepe de chine, moss crepe |
| `/voile-clothing-manufacturer/` | commercial | voile clothing manufacturer | cotton voile, cotton lawn, voile tops, custom voile clothing |
| `/chambray-clothing-manufacturer/` | commercial | chambray clothing manufacturer | chambray shirts, chambray vs denim, chambray dresses, custom chambray clothing |
| `/flannel-clothing-manufacturer/` | commercial | flannel clothing manufacturer | flannel shirts, brushed flannel, flannel pyjamas, custom flannel clothing |
| `/gabardine-clothing-manufacturer/` | commercial | gabardine clothing manufacturer | gabardine trousers, gabardine fabric, gabardine uniforms, wool gabardine |
| `/seersucker-clothing-manufacturer/` | commercial | seersucker clothing manufacturer | seersucker shirts, seersucker shorts, seersucker fabric, custom seersucker clothing |
| `/jacquard-clothing-manufacturer/` | commercial | jacquard clothing manufacturer | jacquard fabric, jacquard knit, dobby fabric, custom jacquard clothing |
| `/muslin-clothing-manufacturer/` | commercial | muslin clothing manufacturer | double gauze, muslin shirts, muslin baby clothes, custom muslin clothing |
| `/tweed-clothing-manufacturer/` | commercial | tweed clothing manufacturer | herringbone tweed, tweed jackets, tweed fabric, custom tweed clothing |
| `/velvet-clothing-manufacturer/` | commercial | velvet clothing manufacturer | stretch velvet, crushed velvet, velvet dresses, velvet blazers |
| `/taffeta-clothing-manufacturer/` | commercial | taffeta clothing manufacturer | taffeta dresses, organza overlays, polyester taffeta, taffeta vs organza |
| `/silk-clothing-manufacturer/` | commercial | silk clothing manufacturer | satin clothing manufacturer, mulberry silk clothing, custom silk clothing, silk momme weight |
| `/bathrobe-manufacturer/` | commercial | bathrobe manufacturer | custom bathrobes, hotel bathrobes, waffle bathrobes, terry bathrobes |
| `/sustainable-clothing-manufacturer/` | commercial | sustainable clothing manufacturer | ethical clothing manufacturer, sustainable fabrics, green claims, made to order clothing |
| `/organic-cotton-clothing-manufacturer/` | commercial | organic cotton clothing manufacturer | organic cotton t-shirts, organic cotton fabric, custom organic clothing, organic cotton certificate |
| `/recycled-clothing-manufacturer/` | commercial | recycled clothing manufacturer | recycled fabric clothing, recycled nylon, recycled cotton, recycled content claims |
| `/private-label-clothing-manufacturer/` | commercial | private label clothing manufacturer | private label clothing manufacturing, private label apparel manufacturer, OEM clothing manufacturer, custom label clothing, white label clothing |
| `/low-moq-clothing-manufacturers/` | commercial | low MOQ clothing manufacturer | low MOQ clothing manufacturing, small batch clothing manufacturer, low minimum order clothing, minimum order quantity for clothing, clothing manufacturer for small quantities |
| `/clothing-manufacturers-for-startups/` | commercial | clothing manufacturer for startups | clothing manufacturer for small brands, first factory order, first clothing order, clothing manufacturer for new brands |
| `/clothing-manufacturer-bangladesh/` | commercial | clothing manufacturer in Bangladesh | Bangladesh garment exports, garment factory in Bangladesh, LDC graduation, clothing production in Bangladesh |
| `/embroidery-service/` | commercial | clothing embroidery service | custom embroidery, 3D puff embroidery, embroidery digitising, embroidered logos |
| `/printing-service/` | commercial | clothing printing service | screen printing, DTF printing, puff print, water-based ink |
| `/dyeing-service/` | commercial | garment dyeing service | garment dyed clothing, pigment dyeing, custom dyed clothing, overdyeing |
| `/washing-service/` | commercial | garment washing service | enzyme wash, stone wash, acid wash, vintage wash |
| `/pattern-making-service/` | commercial | clothing pattern making service | garment pattern maker, pattern grading, digital clothing patterns, fit corrections |
| `/tech-pack-service/` | commercial | tech pack service | tech pack design, clothing tech pack, spec sheet, bill of materials |
| `/lab-dip-service/` | commercial | lab dip service | lab dip approval, Pantone colour matching, colour standard, shade matching |
| `/quality-inspection-service/` | commercial | garment quality inspection | inline inspection, final random inspection, garment quality control, pre-shipment inspection |
| `/fabric-sourcing/` | commercial | fabric sourcing service | custom fabric development, fabric mills, fabric swatches, yarn sourcing |
| `/trims-sourcing/` | commercial | trims sourcing service | garment trims, zips and buttons, custom trims, branded trims |
| `/garment-labels/` | commercial | custom garment labels | woven labels, care labels, heat transfer labels, printed labels |
| `/custom-hang-tags/` | commercial | custom hang tags | swing tags, hang tag strings, barcode tags, kraft hang tags |
| `/garment-polybags/` | commercial | polybags for clothing | suffocation warning, self-seal polybags, recycled polybags, branded polybags |
| `/garment-export-cartons/` | commercial | garment export cartons | shipping marks, carton weight limit, carton dimensions, 5-ply cartons |
| `/cut-and-sew-service/` | commercial | cut and sew manufacturer | cut and sew clothing manufacturer, cut and sew clothing, full package production, CMT clothing manufacturer |
| `/sample-service/` | commercial | clothing sample maker | clothing sample service, garment sample cost, proto sample clothing, pre-production sample |
| `/how-to-create-a-tech-pack/` | informational | how to create a tech pack | tech pack template, tech pack checklist, points of measure, tech pack mistakes |
| `/clothing-brand-startup-costs/` | informational | clothing brand startup costs | cost to start a clothing line, first production run cost, landed cost per garment, launch budget worksheet |
| `/insights/aql-inspection-explained/` | informational | AQL inspection | AQL sampling table, AQL 2.5, acceptance quality limit, critical, major and minor defects |
| `/insights/fabric-gsm-explained/` | informational | fabric GSM | GSM meaning, GSM chart, GSM vs oz, how to measure GSM |
| `/insights/incoterms-explained/` | informational | Incoterms | Incoterms 2020, FOB vs EXW, FOB vs CIF, DDP shipping |
| `/insights/lab-dip-explained/` | informational | what is a lab dip | lab dip process, lab dip vs strike-off, delta E tolerance, lab dip comments |
| `/insights/printing-methods-compared/` | informational | clothing printing methods | screen printing vs DTF, DTG vs screen printing, best printing method for t-shirts, print durability |
| `/insights/payment-terms-lc-vs-tt/` | informational | payment terms for clothing orders | letter of credit, telegraphic transfer, LC at sight, documents against payment |
| `/insights/how-to-calculate-landed-cost/` | informational | how to calculate landed cost | landed cost formula, freight cost per unit, import duty on clothing, HS codes for clothing |
| `/insights/moq-meaning-clothing/` | informational | what does MOQ mean | MOQ per style, MOQ per colour, how to negotiate MOQ, MOQ vs sample order |
| `/insights/shade-variation-explained/` | informational | shade variation | shade band, roll-to-roll shading, shade sorting, metamerism |
| `/insights/garment-grading-explained/` | informational | garment grading | grade rules, size increments, base size, grading and fit |
| `/insights/international-size-chart-guide/` | informational | international size chart | UK vs US sizes, EU clothing sizes, size conversion, how to build a size chart |
| `/insights/stitch-quality-spi-explained/` | informational | stitches per inch | SPI chart, stitch types, seam strength, stitch density |
| `/insights/avoiding-clothing-manufacturer-scams/` | informational | clothing manufacturer scams | fake clothing factory, payment fraud, verify a manufacturer, red flags in quotes |
| `/private-label-clothing-guide/` | informational | how private label clothing works | private label vs white label, private label margins, brand ownership, private label checklist |
| `/print-on-demand-vs-private-label/` | informational | print on demand vs private label | print on demand margins, blank apparel, when to switch from print on demand, POD quality |
| `/guides/clothing-manufacturing-lead-time/` | informational | clothing manufacturing lead time | how long does clothing production take, time and action calendar, peak season delays, sea freight transit time |
| `/guides/how-clothing-manufacturers-work/` | informational | how clothing manufacturers work | garment factory departments, merchandiser role, production line, factory capacity |
| `/digital-3d-sample-vs-physical-sample/` | informational | 3D sample vs physical sample | 3D garment sampling, virtual sample, fit sample, sample rounds |
| `/bangladesh-vs-china-clothing-manufacturing/` | informational | Bangladesh vs China clothing manufacturing | China plus one, Bangladesh vs China garment cost, moving production from China, China fabric supply |
| `/bangladesh-vs-vietnam-clothing-manufacturing/` | informational | Bangladesh vs Vietnam clothing manufacturing | Vietnam garment factories, EVFTA rules of origin, Bangladesh vs Vietnam cost, sportswear sourcing |
| `/bangladesh-vs-india-clothing-manufacturing/` | informational | Bangladesh vs India clothing manufacturing | India garment factories, UK India trade deal, Bangladesh vs India cost, hand embroidery sourcing |
| `/bangladesh-vs-pakistan-clothing-manufacturing/` | informational | Bangladesh vs Pakistan clothing manufacturing | Pakistan garment factories, Pakistan denim, GSP Plus, Bangladesh vs Pakistan cost |
| `/insights/how-to-negotiate-with-clothing-manufacturers/` | informational | how to negotiate with clothing manufacturers | negotiate clothing prices, price breaks by quantity, payment terms negotiation, negotiation mistakes |
| `/how-to-start-a-clothing-brand/` | informational | how to start a clothing brand | clothing brand niche, clothing brand business plan, first collection size, clothing brand launch checklist |
| `/insights/hex-code-vs-pantone-tcx-for-clothing-manufacturers/` | informational | hex code vs Pantone TCX | Pantone TCX vs TPG, Pantone colour in a tech pack, cotton vs polyester colour, physical colour standard |
| `/insights/oem-vs-odm-vs-cmt/` | informational | OEM vs ODM vs CMT | ODM clothing manufacturer, FOB vs CMT, CM only production, design ownership |
| `/insights/customs-clearance-guide/` | informational | customs clearance guide | customs broker, commercial invoice for clothing, EORI number, customs delays |
| `/insights/fabric-types-glossary/` | informational | fabric types glossary | knit vs woven fabric, natural vs synthetic fibres, fabric weave types, choosing fabric for clothing |
| `/insights/manufacturing-costs/` | informational | clothing manufacturing costs | cost breakdown of a garment, CM cost, fabric cost per garment, lower production costs |
| `/how-to-scale-a-clothing-brand/` | informational | how to scale a clothing brand | reorder planning, inventory planning, wholesale clothing brand, cash flow for clothing brands |
| `/direct-factory-vs-trading-company-vs-buying-agent/` | informational | factory vs trading company | buying agent, sourcing agent fees, spot a trading company, buying direct from a factory |
| `/in-house-qc-vs-third-party-inspection-vs-no-inspection/` | informational | in-house QC vs third-party inspection | third-party inspection company, factory QC team, inspection cost, skipping inspection |
| `/freight-forwarder-vs-factory-arranged-shipping-vs-diy/` | informational | freight forwarder vs factory shipping | what a freight forwarder does, sea vs air freight, LCL vs FCL, DIY shipping |
| `/insights/embroidery-problems-explained/` | informational | embroidery problems | embroidery puckering, embroidery registration, thread breaks, stabiliser backing |
| `/insights/knitting-defects-explained/` | informational | knitted fabric defects | barre in knitted fabric, needle lines, spirality, fabric inspection before cutting |
| `/insights/pattern-fit-problems-explained/` | informational | garment fit problems | drag lines, fit sample review, pattern adjustments, ease allowance |
| `/insights/garment-finishing-explained/` | informational | garment finishing | thread trimming, pressing and folding, garment packing, finishing defects |
| `/overseas-vs-local-clothing-manufacturer/` | informational | overseas vs local clothing manufacturer | domestic clothing manufacturer, offshore manufacturing costs, nearshoring clothing, local manufacturing pros and cons |
| `/eu-epr-explained/` | informational | EU textile EPR | extended producer responsibility for textiles, Directive (EU) 2025/1892, eco-modulated fees, EPR registration |
| `/insights/cpsia-compliance-guide/` | informational | CPSIA compliance for clothing | children's product certificate, tracking labels, sleepwear flammability, drawstring rules |
| `/insights/digital-product-passport-textile/` | informational | digital product passport for textiles | ESPR, DPP registry, textile delegated act, product data |
| `/insights/eu-clothing-regulations-2026/` | informational | EU clothing regulations 2026 | destruction ban, PFHxA restriction, PPWR packaging rules, forced labour regulation |
| `/insights/circular-fashion-guide/` | informational | circular fashion | design for durability, textile recycling, take-back schemes, mono-material |
| `/insights/` (guides hub) | navigational | clothing manufacturing guides | none |
| `/tools/` (hub) | navigational | clothing manufacturing tools | none |
| `/tools/gsm-converter/` | tool | GSM converter | GSM to oz, oz to GSM, fabric weight calculator |
| `/tools/aql-calculator/` | tool | AQL calculator | AQL sample size, accept and reject numbers, inspection level II |
| `/tools/lead-time-calculator/` | tool | lead time calculator | production timeline, order by date, launch date planning |
| `/tools/garment-cost-calculator/` | tool | garment cost calculator | landed cost calculator, cost per piece, profit margin on clothing |
| `/tools/shrinkage-calculator/` | tool | fabric shrinkage calculator | shrinkage percentage, shrinkage allowance, wash test |
| `/tools/moq-calculator/` | tool | MOQ calculator | size ratio, size curve, split by colour |
| `/tools/color-converter/` | tool | colour converter | hex to RGB, RGB to CMYK, hex to Lab |
| `/tools/delta-e-calculator/` | tool | delta E calculator | CMC 2:1, CIEDE2000, colour difference |
| `/tools/wash-care-label-generator/` | tool | care label generator | care label wording, fibre content, washing instructions |
| `/tools/manufacturer-email-generator/` | tool | manufacturer email generator | email a clothing manufacturer, RFQ email template, first email to a factory |
| `/tools/hs-code/` | tool | HS code finder | clothing HS code, chapter 61 vs 62, HS 2028 |
| `/how-to-find-clothing-manufacturer/` | informational | how to find a clothing manufacturer | apparel manufacturers by country, how to choose apparel manufacturers, types of apparel manufacturers, where to find clothing manufacturers, questions to ask a clothing manufacturer |
| `/products/`, `/all-services/`, `/work-process/`, `/pricing/` | navigational | custom clothing products, clothing manufacturing services, clothing production process, clothing manufacturing prices | none |
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
- Guides use the generic template in `src/pages/[...slug].astro`, with the body in Markdown. The template adds an "On this page" list when a guide has 6 or more H2s, a Sources list from the `sources` frontmatter (title, publisher, url), and the "About this page" block. Old `/insights/...` URLs live in `src/content/landing/insights/`. `keyword-check` reads subfolders.
- Guide numbers about SDF Clothing come from tokens only. Derived totals such as `{{pulloverHoodieMoqTotal}}` (price at MOQ times MOQ) are generated in `company.ts`.
- Thin legacy insight URLs are merged into the guide that covers them, never built as thin pages. `/insights/acceptable-delta-e-for-lab-dip/` 301s to `/insights/lab-dip-explained/`, and `/insights/sample-cost-explained/` 301s to `/sample-service/`, which owns "garment sample cost".
- `{{moqUnit}}` already reads "pieces per style". Never write "{{moqUnit}} per style" or "{{moqUnit}} per design" (fixed across 90+ files on 26 November 2026). Write "{{moq}} {{moqUnit}}", and say "with each design counted as a style" where designs matter. Our payment schedule appears only through `{{payment}}`, and LC terms through `{{lc}}` and `terms.lc.rules`.
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
- Old site URLs: the new site launches on the same domain, so old URLs that Google has indexed or other sites link to would turn into 404s and lose their rankings. Every URL in `scripts/legacy-urls.txt` must be built, 301 to a page that answers the same need (`public/_redirects`, straight to the final page, no chains), or answer 410 Gone (`src/data/gone.ts`) when nothing matches. Never 301 to a loosely related hub. See "301 or 410 for old URLs" at the end of this file. `redirect-check` fails otherwise. Pages planned for later go in `scripts/planned-routes.txt`.
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

`page-audit` hard-fails pages in its `STRICT` set and prints warnings for the rest. Cannibalization errors fail for every page. Add a page to `STRICT` once it follows this playbook. Pages in `STRICT` now: `/`, `/t-shirt-manufacturer/`, `/hoodie-manufacturer/`, `/joggers-manufacturer/`, `/pants-trousers-manufacturer/`, `/shorts-manufacturer/`, `/shirt-manufacturer/`, `/jacket-manufacturer/`, `/activewear-manufacturer/`, `/leggings-manufacturer/`, `/tracksuit-manufacturer/`, `/streetwear-manufacturer/`, `/dress-manufacturer/`, `/skirts-manufacturer/`, `/loungewear-manufacturer/`, `/kids-baby-clothing-manufacturer/`, `/uniform-manufacturer/`, `/underwear-manufacturer/`, `/clothing-manufacturers-for-women/`, `/plus-size-clothing-manufacturer/`, `/modest-fashion-manufacturer/`, `/merch-manufacturer/`, `/school-uniform-manufacturer/`, `/scrubs-manufacturer/`, `/cotton-clothing-manufacturer/`, `/linen-clothing-manufacturer/`, `/bamboo-clothing-manufacturer/`, `/denim-manufacturer/`, `/swimwear-manufacturer/`, `/sports-bra-manufacturer/`, `/puffer-jacket-manufacturer/`, `/blazer-manufacturer/`, `/socks-manufacturer/`, `/sweater-manufacturer/`, `/hat-manufacturer/`, `/lingerie-manufacturer/`, `/rain-jacket-manufacturer/`, `/varsity-jacket-manufacturer/`, `/fleece-jacket-manufacturer/`, `/softshell-jacket-manufacturer/`, `/coat-manufacturer/`, `/football-kit-manufacturer/`, `/basketball-uniform-manufacturer/`, `/cycling-jersey-manufacturer/`, `/rugby-shirt-manufacturer/`, `/baseball-uniform-manufacturer/`, `/esports-jersey-manufacturer/`, `/cheerleading-uniform-manufacturer/`, `/dancewear-manufacturer/`, `/martial-arts-uniform-manufacturer/`, `/fightwear-manufacturer/`, `/golf-apparel-manufacturer/`, `/tennis-wear-manufacturer/`, `/running-apparel-manufacturer/`, `/compression-wear-manufacturer/`, `/base-layer-manufacturer/`, `/ski-wear-manufacturer/`, `/chef-uniform-manufacturer/`, `/apron-manufacturer/`, `/lab-coat-manufacturer/`, `/coverall-manufacturer/`, `/hi-vis-workwear-manufacturer/`, `/security-uniform-manufacturer/`, `/hotel-uniform-manufacturer/`, `/jumpsuit-romper-manufacturer/`, `/maternity-clothing-manufacturer/`, `/silk-pillowcase-manufacturer/`, `/sleep-mask-manufacturer/`, `/embroidered-patch-manufacturer/`, `/pet-clothing-manufacturer/`, `/cushion-cover-manufacturer/`, `/dust-bag-manufacturer/`, `/tote-bag-manufacturer/`, `/cosmetic-pouch-manufacturer/`, `/drawstring-bag-manufacturer/`, `/scarf-manufacturer/`, `/bandana-manufacturer/`, `/neck-gaiter-manufacturer/`, `/hair-accessories-manufacturer/`, `/tie-manufacturer/`, `/baby-bib-manufacturer/`, `/tea-towel-manufacturer/`, `/table-linen-manufacturer/`, `/gloves-manufacturer/`, `/shapewear-manufacturer/`, `/evening-dress-manufacturer/`, `/wedding-dress-manufacturer/`, `/bodysuit-manufacturer/`, `/suit-manufacturer/`, `/menswear-manufacturer/`, `/overalls-manufacturer/`, `/kurta-manufacturer/`, `/salwar-kameez-manufacturer/`, `/hijab-manufacturer/`, `/thobe-manufacturer/`, `/polyester-clothing-manufacturer/`, `/hemp-clothing-manufacturer/`, `/modal-clothing-manufacturer/`, `/french-terry-clothing-manufacturer/`, `/corduroy-clothing-manufacturer/`, `/wool-clothing-manufacturer/`, `/lyocell-clothing-manufacturer/`, `/velour-clothing-manufacturer/`, `/tie-dye-clothing-manufacturer/`, `/sublimated-clothing-manufacturer/`, `/adaptive-clothing-manufacturer/`, `/embroidery-service/`, `/printing-service/`, `/dyeing-service/`, `/washing-service/`, `/pattern-making-service/`, `/tech-pack-service/`, `/lab-dip-service/`, `/quality-inspection-service/`, `/fabric-sourcing/`, `/trims-sourcing/`, `/garment-labels/`, `/how-to-create-a-tech-pack/`, `/clothing-brand-startup-costs/`, `/insights/aql-inspection-explained/`, `/insights/fabric-gsm-explained/`, `/insights/incoterms-explained/`, `/insights/lab-dip-explained/`, `/insights/printing-methods-compared/`, `/insights/payment-terms-lc-vs-tt/`, `/insights/how-to-calculate-landed-cost/`, `/insights/moq-meaning-clothing/`, `/insights/shade-variation-explained/`, `/insights/garment-grading-explained/`, `/insights/international-size-chart-guide/`, `/insights/stitch-quality-spi-explained/`, `/insights/avoiding-clothing-manufacturer-scams/`, `/private-label-clothing-guide/`, `/print-on-demand-vs-private-label/`, `/guides/clothing-manufacturing-lead-time/`, `/guides/how-clothing-manufacturers-work/`, `/digital-3d-sample-vs-physical-sample/`, `/bangladesh-vs-china-clothing-manufacturing/`, `/bangladesh-vs-vietnam-clothing-manufacturing/`, `/bangladesh-vs-india-clothing-manufacturing/`, `/bangladesh-vs-pakistan-clothing-manufacturing/`, `/insights/how-to-negotiate-with-clothing-manufacturers/`, `/how-to-start-a-clothing-brand/`, `/insights/hex-code-vs-pantone-tcx-for-clothing-manufacturers/`, `/insights/oem-vs-odm-vs-cmt/`, `/insights/customs-clearance-guide/`, `/insights/fabric-types-glossary/`, `/insights/manufacturing-costs/`, `/how-to-scale-a-clothing-brand/`, `/direct-factory-vs-trading-company-vs-buying-agent/`, `/in-house-qc-vs-third-party-inspection-vs-no-inspection/`, `/freight-forwarder-vs-factory-arranged-shipping-vs-diy/`, `/tools/`, `/tools/aql-calculator/`, `/tools/garment-cost-calculator/`, `/tools/gsm-converter/`, `/tools/lead-time-calculator/`, `/tools/shrinkage-calculator/`, `/tools/moq-calculator/`, `/tools/color-converter/`, `/tools/delta-e-calculator/`, `/tools/wash-care-label-generator/`, `/tools/manufacturer-email-generator/`, `/private-label-clothing-manufacturer/`, `/low-moq-clothing-manufacturers/`, `/clothing-manufacturers-for-startups/`, `/cut-and-sew-service/`, `/sample-service/`, `/clothing-manufacturer-bangladesh/`, `/how-to-find-clothing-manufacturer/`, `/silk-clothing-manufacturer/`, `/bathrobe-manufacturer/`, `/sustainable-clothing-manufacturer/`, `/organic-cotton-clothing-manufacturer/`, `/recycled-clothing-manufacturer/`, `/products/`, `/all-services/`, `/pricing/`, `/work-process/`, `/tools/hs-code/`, `/insights/`, `/insights/embroidery-problems-explained/`, `/insights/knitting-defects-explained/`, `/insights/pattern-fit-problems-explained/`, `/insights/garment-finishing-explained/`, `/overseas-vs-local-clothing-manufacturer/`, `/about/`, `/contact/`, `/booking/`, `/verify-us/`, `/certifications/`, `/get-a-quote/`, `/privacy/`, `/terms/`, `/cookies/`, `/accessibility/`, `/editorial-policy/`, `/faq/`, `/nda/`, `/garment-development-service/`, `/garment-packing-and-export/`, `/viscose-clothing-manufacturer/`, `/nylon-clothing-manufacturer/`, `/chiffon-clothing-manufacturer/`, `/fleece-clothing-manufacturer/`, `/ripstop-clothing-manufacturer/`, `/jersey-knit-clothing-manufacturer/`, `/rib-knit-clothing-manufacturer/`, `/waffle-knit-clothing-manufacturer/`, `/ponte-clothing-manufacturer/`, `/scuba-fabric-clothing-manufacturer/`, `/mesh-clothing-manufacturer/`, `/spandex-clothing-manufacturer/`, `/acrylic-clothing-manufacturer/`, `/georgette-clothing-manufacturer/`, `/crepe-clothing-manufacturer/`, `/voile-clothing-manufacturer/`, `/chambray-clothing-manufacturer/`, `/flannel-clothing-manufacturer/`, `/gabardine-clothing-manufacturer/`, `/seersucker-clothing-manufacturer/`, `/jacquard-clothing-manufacturer/`, `/muslin-clothing-manufacturer/`, `/tweed-clothing-manufacturer/`, `/velvet-clothing-manufacturer/`, `/taffeta-clothing-manufacturer/`, `/eu-epr-explained/`, `/insights/cpsia-compliance-guide/`, `/insights/digital-product-passport-textile/`, `/insights/eu-clothing-regulations-2026/`, `/insights/circular-fashion-guide/`, `/custom-hang-tags/`, `/garment-polybags/`, `/garment-export-cartons/`.

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

- Real factory photos and real customer testimonials or case studies (none are used until supplied).
- T-shirt page claims to confirm: tipping stripes, branded buttons, racer-back and slub fabric, strike-off approval, wash test, reorders skipping the proto sample.
- Fabric claims: bamboo clothing is labelled "viscose made from bamboo" with no antibacterial or green claims (FTC). Organic or recycled claims rest on the mill's certificate, never on ours.
- Kids' and school uniform pages: we leave lab testing and certificates to the brand or importer. Confirm this is how SDF Clothing works.
- Decide whether AI training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) may crawl the live site.
- Safety garments (high-visibility, flame-resistant, protective lab coats): pages say the fabric or tape rating comes from its maker and the buyer arranges certification of the finished garment. Confirm this is how SDF Clothing works.
- Silk and satin clothing and bathrobes: confirmed by the owner on 27 November 2026. Silk weight and grade still come from the mill's report.
- Embroidered patches: pages offer embroidered and sublimation-printed patches only. Woven patches are not offered unless the owner confirms label weaving.
- Decide whether analytics (GA4 or similar) is wanted, which needs a consent banner.

Country comparison guides (Bangladesh vs China, Vietnam, India, Pakistan) stay neutral and dated ("as of November 2026"). Never print US tariff percentages, because they change too often. Tell readers to check the current HTS rate. Recheck LDC graduation, EU GSP (Regulation (EU) 2026/1395 from 1 Jan 2027), EU-India FTA status and UK-India CETA before editing these pages.

Guide batch 6 merges (301): the multi-country sourcing URL plus the five `/clothing-manufacturer-for-<country>-brands/` URLs, go to `/clothing-manufacturer-bangladesh/`. UK start and launch checklist go to `/how-to-start-a-clothing-brand/`. `/oem-clothing-manufacturer/` goes to private label. Full package vs CMT goes to `/insights/oem-vs-odm-vs-cmt/`. Three Pantone and colour URLs go to the hex vs Pantone guide. The POM guide goes to `/how-to-create-a-tech-pack/`, which owns points of measure. Do not use GitHub task-list checkboxes in markdown: they render unlabelled inputs and fail Lighthouse accessibility.

## 301 or 410 for old URLs

Old sdfltd.com URLs are indexed and may have backlinks, so none may simply 404. Each old URL gets one of two answers:
- **301** only when a new page answers the same need (same product, same question). Listed in `public/_redirects`.
- **410 Gone** when nothing on the new site matches, or the topic is ruled out (certification pages, invented journal posts, foreign-country manufacturer pages). Listed in `src/data/gone.ts`. The worker serves the 404 page with status 410 and `X-Robots-Tag: noindex`. Every gone path must also match `assets.run_worker_first` in `wrangler.jsonc`, which `redirect-check` enforces.
Never 301 to a loosely related page such as the home page, because search engines treat that as a soft 404.

## Free tools pattern

- Tools live at `src/pages/tools/<slug>.astro` and render through `src/components/ToolPage.astro`, which adds the header, tool section, guide prose, FAQ, related tools, `CtaBand`, a link back to `/tools/` and `WebApplication` plus `FAQPage` schema. Register each tool in `src/data/tools.ts` (hub card and related links) and `src/data/pages.ts` (SEO meta and keywords).
- Tool logic is a bundled `<script>` (never inline), with shared helpers in `src/scripts/tools/common.ts`. Every field has a label and an error line (`<id>-error`) written in words. Results sit in an `aria-live` region and update as the user types.
- SDF numbers inside tools come from `company.ts` (the lead time calculator reads `terms.sampleDays` and `terms.bulkDays` through data attributes). Example values in inputs are examples only and the page says so.
- The page text shows each formula, so the maths can be checked without JavaScript, and a `noscript` note says so.
- Tools run entirely in the browser and send or store nothing, as `/tools/` states.
- AQL plans follow ISO 2859-1 single sampling, normal inspection, levels I to III, AQL 0.65 to 6.5 (`src/scripts/tools/aql.ts`, checked against the standard tables).
- Colour maths lives in `src/scripts/tools/colour.ts` (sRGB D65 to CIELAB, ΔE 1976, CIEDE2000 checked against Sharma's published test pairs, CMC 2:1 with the standard as reference). Pantone values are never included, because they are Pantone's data.
- The care label generator writes wording only. Care symbols are registered trademarks in several countries, so the page tells brands to check the rules where they sell.
- Tool merges (301): `/tools/production-timeline/` and `/tools/sample-timeline-estimator/` go to the lead time calculator, `/tools/price-calculator/` to the garment cost calculator, `/tools/sample-decision-helper/` to `/digital-3d-sample-vs-physical-sample/`. `/tools/eu-readiness-checker/` is 410 Gone, because EU textile rules change too often for a checker to stay right. `/insights/fiber-blend-hs-classification-explained/` 301s to `/tools/hs-code/`.
- When adding to a `related` list that is already full (8), replace a link on purpose and check the dropped page still has 3 inbound links. Popping the last item silently removed inbound links twice.

## Commercial page rework (27 November 2026)

- The five core commercial pages (private label, low MOQ, startups, cut and sew, sample service) now use `ProductPage` with data files, their own sketches (`privatelabel`, `lowmoq`, `startup`, `cutsew`, `sample`), price tables, buyer-risk sections and 6 to 7 FAQs. Their Markdown bodies were removed, because `ProductPage` does not render them.
- Removed unconfirmed claims found during the rework: "weekly photo updates" and "email us your dates" (startups), "care labels produced to each market's rules" (private label now says the brand confirms wording), and a reference to trade association membership (Bangladesh guide).
- Hubs joined `STRICT` on 27 November 2026. Company and legal pages joined on the same day (see "Company pages" below).

## Sustainable, organic and recycled pages (27 November 2026)

- Built at the owner's request on the old URLs. `/sustainability/`, `/csr/`, `/insights/sustainable-clothing-manufacturing/` and `/sustainable-fashion-manufacturing-guide/` 301 to `/sustainable-clothing-manufacturer/`. `/silk-clothing-manufacturer/` is built again and no longer redirects.
- These pages never call SDF Clothing itself green, eco-friendly or certified. Every claim rests on the fabric mill's certificate and delivery documents, which we pass to the buyer, and certification names are still never published. If a buyer needs the finished garment certified, the page says to raise it at quote stage.
- Since 27 September 2026 the EU Empowering Consumers Directive (2024/825) bans generic environmental claims such as eco-friendly or sustainable without recognised outstanding performance. Pages explain this to buyers as general guidance and push specific, documented claims (a stated share of organic or recycled fibre). Recheck before editing.
- "Recycled polyester clothing" stays a supporting keyword of the polyester page. The recycled page targets recycled fabric clothing, recycled nylon and recycled cotton.
- After changing anything in `src/data/company.ts`, delete `.astro` and `node_modules/.astro` before building locally. Astro caches rendered Markdown, so token changes do not show in unchanged `.md` files and local checks can pass while CI fails (27 November 2026).
- Hub listing pages (`/products/`, `/all-services/`, `/tools/` and any page with `CollectionPage` schema) are exempt from the keyword density check, because their word count is mostly product cards. Every other rule still applies. Product and service groups on the hubs come from `src/data/catalogue.ts`, and the build fails if a page is missing from a group or listed twice.
- HS code finder (27 November 2026): four-digit headings only, HS 2022 chapters 61 and 62 plus 6212, in `src/scripts/tools/hs.ts`. Heading texts and chapter notes were checked against the US Census Bureau Schedule B chapters 61 and 62, and knitted jumpsuits in 6114 against CBP rulings. 22 garment, construction and wearer cases are tested in the browser. Never add six-digit or national codes, because they depend on fibre and country. Recheck the headings when HS 2028 applies on 1 January 2028.

## Guide batch 8 and the guides hub (27 November 2026)

- `/insights/` is now the guides hub, built with `HubPage` (`hub="guides"`) from `guideGroups` in `src/data/catalogue.ts`. Every `kind: guide` page must be in exactly one group or the build fails.
- 301 merges: inclusive sizing guide and petite to `/clothing-manufacturers-for-women/`, RMG industry data to the Bangladesh guide, garment washing guide to `/washing-service/`, fabric cutting guide to `/cut-and-sew-service/`, sock guides to `/socks-manufacturer/`, wholesale partnership to the scaling guide, every yarn URL to the fabric types glossary, platform alternative to the factory vs trading company guide, first-order questions to the how-to-find guide.
- Still planned (4): company pages (agreement, careers, case studies, visa docs), which wait for real details from the owner.
- Regulatory and circular guides (27 November 2026): EU EPR, CPSIA, digital product passport, EU clothing regulations 2026 and circular fashion sit in the guides group "Rules, compliance and circular fashion". Every date was checked against official texts and law-firm or lab bulletins on 27 November 2026 (EPR Directive (EU) 2025/1892, ESPR destruction ban, PPWR (EU) 2025/40, PFHxA (EU) 2024/2462, Empowering Consumers (EU) 2024/825, Forced Labour (EU) 2024/3015). The textile labelling revision had no published proposal by mid-2026. Recheck dates before editing. These guides never call SDF Clothing green and never name certificates. The factory is never the EPR producer on FOB orders, and lab tests and certificates for CPSIA stay with the importer.

## Company pages (27 November 2026)

- Brand pages use brand-first titles with no " | SDF Clothing" suffix, because the brand is already the keyword: "About SDF Clothing: …", "Contact SDF Clothing: …", "Verify SDF Clothing: …", "SDF Clothing Privacy Policy: …". Non-brand company pages keep the suffix.
- Keywords: about = "about SDF Clothing", contact = "contact SDF Clothing", verify = "verify SDF Clothing", legal pages = "SDF Clothing privacy policy", "SDF Clothing terms of use", "SDF Clothing cookie policy", "SDF Clothing accessibility", "SDF Clothing editorial policy". Booking = "garment factory visit", certifications = "clothing factory compliance", get a quote = "clothing manufacturing quote", FAQ = "clothing manufacturer FAQ", NDA = "clothing manufacturer NDA".
- `page-audit` skips density for a primary keyword that contains "SDF Clothing" (a navigational query on a short page). It must still sit in the title, description, H1, first 100 words and a heading, and appear at most 4 times.
- Legal pages share an "Our other policies" nav in `ProsePage`, with keyword anchors.
- `/faq/` holds company-level questions only. Its questions must not repeat a question on another page (check with a grep before adding one). Product questions stay on product pages.
- `/nda/` rests only on the confirmed promise "we never share your files, and we sign your NDA first if you ask". Never claim we have our own NDA template.
- 301s: `/confidentiality/` to `/nda/`, `/clothing-factory/` to `/about/`.

## Main menu and products hub (27 November 2026)

- Owner's menu: Products (dropdown: Knit garments, Woven garments, Accessories and home textiles, All products), Services, How it works, Pricing, About, Contact. No other dropdowns. No "Get a quote" button in the header, by the owner's choice: it lives in the CTA band above the footer and in page content. Data in `primaryNav` in `src/data/nav.ts`.
- `/products/` is split into parts (`productParts` in `src/data/catalogue.ts`): knit, woven, accessories, and "ways of working, ranges and fabrics". Every group needs a `part`, or the build fails. A mixed product (dresses, uniforms, kids, jumpsuits) sits where its usual construction is, and its own page covers both.
- Part headings are H2, group headings H3, card titles H4 on this hub only.
- Services menu and `/all-services/` follow the owner's six groups: Product development, Material sourcing, Garment manufacturing, Printing and embroidery, Quality and compliance, Global supply chain. Each group has an "Included" line (`activities`) and may add non-collection cards (`extras`). "Testing" is left out of the quality line because lab tests and certificates stay with the brand or importer.
- Each service group also has an `about` paragraph on `/all-services/`.
- Owner facts (27 November 2026): an in-house design team and design department exist, and work on orders from 5,000 pieces per style (`designFrom` token). Below that, the buyer brings the design. Standard quotes include labels, tags, a single polybag per piece and export cartons, and any custom packaging is done to the buyer's instructions. All factory-side export documents are provided. Prices are quoted FOB, and other terms are shipped on request.
- `/garment-development-service/` reuses its old URL (redirect removed). Keyword "garment development service".
- `/garment-packing-and-export/` keyword "garment packing and export". Proof of origin: EU GSP uses the REX statement on origin (Form A ended for the EU in 2021), the UK DCTS takes an origin declaration or Form A, other markets a certificate of origin. Always tell buyers their customs broker confirms the duty rate. The owner chose not to confirm REX registration, so the page only promises "the certificate of origin or origin statement your importer asks for" and never names REX or Form A.
- Footer (27 November 2026): brand block (one-line description, address, message and WhatsApp links, official-domain notice), then four columns from `footerNav` (Products, Services, Company, Resources), then a base row with copyright and `legalNav`. Keep each column to six links or fewer, with short labels, so rows stay even.
- About page (27 November 2026) answers the five buyer questions in order: who we are (overview, founder, group), what we make (product parts and service groups), capabilities (in-house steps and a figures table), where and how we operate (location, hours, regions, process), why buyers trust us, then company details and three company FAQs. Owner facts (27 November 2026): a team of 600+ people (`capabilities.workforce`), about 50,000 pieces a month (`capabilities.monthlyCapacity`), main markets the EU, US, Australia and Japan (`exportMarkets`, `mainMarkets()`). The owner asked us to write the story, mission, vision and values. The story uses only confirmed facts, with no invented dated milestones. Factory floor area, line and machine counts stay unpublished until the owner supplies them.
- The About page opens with a "SDF Clothing at a glance" table (business type, founded, group, team, capacity, main markets, location, website), the format buyers know from factory profiles. Two-column label and value tables stay as plain tables on mobile, because `table--stack` repeats a "Detail" label on every row.
- Workplace facts (owner, 27 November 2026) live in `workplace` in `company.ts`: canteen, medical care, daycare and childcare, no overtime, no child labour, festival bonuses. They show on `/about/#people` and in one line on `/certifications/`. The owner confirmed the on-site medical room and that a national ID card is collected from every worker on joining.

## Packing pages (27 November 2026)

- Owner asked for labels, tags, polybags and cartons to be researched and written. `/custom-hang-tags/` (Material sourcing group), `/garment-polybags/` and `/garment-export-cartons/` (Global supply chain group) use `ProductPage` with sketches `hangtag`, `polybag` and `carton`. "Hang tags" moved from the labels page to the hang tag page, and the labels page now targets "heat transfer labels" and shows a care label rules table by market (US FTC, Canada bilingual fibre and CA number, EU and UK fibre names, Australia care standard).
- Confirmed facts only: one standard tag, a single clear polybag per piece and export cartons with standard marks are in the garment price. Custom tags, bags and cartons are quoted on top. Industry figures (card 300 to 700 GSM, film 1.5 to 3 mil, warning laws in five US states plus NYC and Chicago, 50 lb or about 23 kg carton caps in US retailer manuals) come from retailer manuals, the FTC, Canada's Competition Bureau and packaging suppliers checked on 27 November 2026. They are described as market practice, never as our own standard.

## Fabric pages and fabric minimums (27 November 2026)

- Owner instruction: every fabric gets a page in the product page pattern. 45 fibre, fabric and finish pages now exist: the 16 older ones (cotton to sublimated), batch 1 (viscose, nylon, chiffon, fleece, ripstop) and batches 2 to 5 (jersey, rib, waffle, ponte, scuba, mesh, spandex, acrylic, georgette, crepe, voile, chambray, flannel, gabardine, seersucker, jacquard, muslin, tweed, velvet, taffeta). Interlock, piqué and tricot stay in the fabric glossary only, because their buyers search for the garment (polos, base layers, linings), which other pages own. Poplin, oxford, twill and canvas are covered by the shirt, pants and tote pages. Satin is covered by the silk page.
- Fabric supply (`fabricSupply` in `company.ts`): orders at the minimum use ready fabric from local mills and stock, or ready fabric imported from China, Taiwan, Hong Kong and South Korea (`{{fabricImports}}`). Fabric knitted or woven to the buyer's own construction or weight starts at 5,000 pieces per style (`{{customFabricFrom}}`), made by the sister company, because smaller runs lose money. We never sell fabric on its own.
- Colour minimum (owner, 27 November 2026): 150 pieces per colour for knit and woven alike (`{{perColour}}`), so up to 2 colours at 300 pieces (`{{coloursAtMoq}}`). Never write that knit and woven minimums differ.
- Colour matching by lab dip at the minimum stays as other pages already promise. The 5,000 threshold covers fabric construction and woven-in patterns, not colour.
- Every fabric page shows `fabricMoqBlock()` (one-column table with the fabric construction, plus the `fabric` infographic) and `weightBlock()` (typical GSM ranges, confirmed on the swatch) from `src/data/products/fabric-moq.ts`. GSM ranges were checked against mill and fabric-shop listings on 27 November 2026, for example chiffon 30 to 70 GSM, georgette 60 to 100, ponte 250 to 380 and leggings spandex 180 to 280.
- Batches 2 to 5 were generated from structured specs by a script (each page still has its own fabric facts, risks, FAQs and sketch pattern). Keep new fabric pages in that shape: unique facts, a buyer-risk list, the minimum and weight tables, links to sibling fabrics and to the glossary section "Production pages for each fabric".
- The products hub groups fabric pages by fibre, knit fabric, woven fabric, and patterns, pile and finishes.
