/**
 * How the /products/ and /all-services/ hubs group their pages.
 * Every product, model and service page must appear in exactly one group, or the build fails.
 */

export interface CatalogueGroup {
  id: string;
  heading: string;
  lead: string;
  slugs: string[];
  part?: string;
}

export interface CataloguePart {
  id: string;
  heading: string;
  lead: string;
}

/** Top-level split of the products hub, linked from the main menu. A mixed product sits where its usual construction is. */
export const productParts: CataloguePart[] = [
  { id: 'knit', heading: 'Knit garments', lead: 'Clothing cut from knitted fabric such as jersey, rib, fleece and interlock. It stretches and moves with the body.' },
  { id: 'woven', heading: 'Woven garments', lead: 'Clothing cut from woven fabric such as poplin, twill, denim and canvas. It holds its shape and takes structure well.' },
  { id: 'accessories', heading: 'Accessories and home textiles', lead: 'Small items that complete a range or a merch drop, plus textiles for the home and pets.' },
  { id: 'more', heading: 'Ways of working, ranges and fabrics', lead: 'Start from how you want to work with us, who the range is for or the fabric you want.' },
];

export const productGroups: CatalogueGroup[] = [
  {
    id: 'knit-tops',
    part: 'knit',
    heading: 'T-shirts, hoodies and joggers',
    lead: 'Everyday jersey and fleece, from basics to streetwear.',
    slugs: ['t-shirt-manufacturer', 'hoodie-manufacturer', 'sweater-manufacturer', 'joggers-manufacturer', 'fleece-jacket-manufacturer', 'streetwear-manufacturer', 'merch-manufacturer', 'bodysuit-manufacturer'],
  },
  {
    id: 'activewear',
    part: 'knit',
    heading: 'Activewear and sportswear',
    lead: 'Stretch, performance and swim garments.',
    slugs: ['activewear-manufacturer', 'leggings-manufacturer', 'sports-bra-manufacturer', 'tracksuit-manufacturer', 'compression-wear-manufacturer', 'base-layer-manufacturer', 'running-apparel-manufacturer', 'golf-apparel-manufacturer', 'tennis-wear-manufacturer', 'cycling-jersey-manufacturer', 'swimwear-manufacturer', 'dancewear-manufacturer'],
  },
  {
    id: 'teamwear',
    part: 'knit',
    heading: 'Teamwear and combat sports',
    lead: 'Kits for clubs, schools, leagues and gyms.',
    slugs: ['football-kit-manufacturer', 'basketball-uniform-manufacturer', 'baseball-uniform-manufacturer', 'rugby-shirt-manufacturer', 'cheerleading-uniform-manufacturer', 'esports-jersey-manufacturer', 'fightwear-manufacturer'],
  },
  {
    id: 'underwear',
    part: 'knit',
    heading: 'Underwear, lounge and kids',
    lead: 'Garments worn closest to the skin, for adults and children.',
    slugs: ['underwear-manufacturer', 'lingerie-manufacturer', 'shapewear-manufacturer', 'loungewear-manufacturer', 'kids-baby-clothing-manufacturer'],
  },
  {
    id: 'bottoms',
    part: 'woven',
    heading: 'Shirts, trousers and denim',
    lead: 'Shirts and bottoms in poplin, twill, denim and canvas.',
    slugs: ['shirt-manufacturer', 'pants-trousers-manufacturer', 'shorts-manufacturer', 'skirts-manufacturer', 'denim-manufacturer', 'overalls-manufacturer'],
  },
  {
    id: 'outerwear',
    part: 'woven',
    heading: 'Jackets, coats and tailoring',
    lead: 'Outerwear from light shells to padded and tailored pieces.',
    slugs: ['jacket-manufacturer', 'coat-manufacturer', 'puffer-jacket-manufacturer', 'rain-jacket-manufacturer', 'softshell-jacket-manufacturer', 'varsity-jacket-manufacturer', 'ski-wear-manufacturer', 'blazer-manufacturer', 'suit-manufacturer'],
  },
  {
    id: 'dresses',
    part: 'woven',
    heading: 'Dresses, robes and cultural wear',
    lead: 'Dresses, occasion wear, bathrobes and traditional garments.',
    slugs: ['dress-manufacturer', 'evening-dress-manufacturer', 'wedding-dress-manufacturer', 'jumpsuit-romper-manufacturer', 'bathrobe-manufacturer', 'kurta-manufacturer', 'salwar-kameez-manufacturer', 'thobe-manufacturer', 'hijab-manufacturer'],
  },
  {
    id: 'workwear',
    part: 'woven',
    heading: 'Workwear and uniforms',
    lead: 'Clothing for staff, schools, kitchens, clinics, sites and dojos.',
    slugs: ['uniform-manufacturer', 'school-uniform-manufacturer', 'scrubs-manufacturer', 'chef-uniform-manufacturer', 'apron-manufacturer', 'lab-coat-manufacturer', 'coverall-manufacturer', 'hi-vis-workwear-manufacturer', 'security-uniform-manufacturer', 'hotel-uniform-manufacturer', 'martial-arts-uniform-manufacturer'],
  },
  {
    id: 'accessories-items',
    part: 'accessories',
    heading: 'Accessories',
    lead: 'Headwear, neckwear, socks, gloves and branding pieces.',
    slugs: ['hat-manufacturer', 'socks-manufacturer', 'gloves-manufacturer', 'scarf-manufacturer', 'bandana-manufacturer', 'neck-gaiter-manufacturer', 'hair-accessories-manufacturer', 'tie-manufacturer', 'embroidered-patch-manufacturer', 'baby-bib-manufacturer'],
  },
  {
    id: 'bags',
    part: 'accessories',
    heading: 'Bags and pouches',
    lead: 'Fabric bags for retail, merch and packaging.',
    slugs: ['tote-bag-manufacturer', 'drawstring-bag-manufacturer', 'cosmetic-pouch-manufacturer', 'dust-bag-manufacturer'],
  },
  {
    id: 'home',
    part: 'accessories',
    heading: 'Home, sleep and pets',
    lead: 'Textiles for the home, travel and four-legged customers.',
    slugs: ['silk-pillowcase-manufacturer', 'sleep-mask-manufacturer', 'cushion-cover-manufacturer', 'tea-towel-manufacturer', 'table-linen-manufacturer', 'pet-clothing-manufacturer'],
  },
  {
    id: 'ways-of-working',
    part: 'more',
    heading: 'Ways of working with us',
    lead: 'How an order is set up, whatever the product.',
    slugs: ['private-label-clothing-manufacturer', 'low-moq-clothing-manufacturers', 'clothing-manufacturers-for-startups', 'sustainable-clothing-manufacturer'],
  },
  {
    id: 'ranges',
    part: 'more',
    heading: 'Ranges by customer',
    lead: 'Collections built around who will wear them.',
    slugs: ['clothing-manufacturers-for-women', 'menswear-manufacturer', 'plus-size-clothing-manufacturer', 'maternity-clothing-manufacturer', 'adaptive-clothing-manufacturer', 'modest-fashion-manufacturer'],
  },
  {
    id: 'fabrics',
    part: 'more',
    heading: 'By fabric and finish',
    lead: 'Start from the material or the effect you want.',
    slugs: ['cotton-clothing-manufacturer', 'organic-cotton-clothing-manufacturer', 'recycled-clothing-manufacturer', 'linen-clothing-manufacturer', 'bamboo-clothing-manufacturer', 'hemp-clothing-manufacturer', 'modal-clothing-manufacturer', 'lyocell-clothing-manufacturer', 'wool-clothing-manufacturer', 'silk-clothing-manufacturer', 'polyester-clothing-manufacturer', 'french-terry-clothing-manufacturer', 'corduroy-clothing-manufacturer', 'velour-clothing-manufacturer', 'tie-dye-clothing-manufacturer', 'sublimated-clothing-manufacturer'],
  },
];

export const serviceGroups: CatalogueGroup[] = [
  {
    id: 'development',
    heading: 'Development',
    lead: 'Turning an idea into an approved sample.',
    slugs: ['tech-pack-service', 'pattern-making-service', 'sample-service', 'lab-dip-service'],
  },
  {
    id: 'production',
    heading: 'Production',
    lead: 'Making the bulk order on our own lines.',
    slugs: ['cut-and-sew-service'],
  },
  {
    id: 'decoration',
    heading: 'Decoration and finishing',
    lead: 'Prints, embroidery, dyes and washes, done in-house.',
    slugs: ['printing-service', 'embroidery-service', 'dyeing-service', 'washing-service'],
  },
  {
    id: 'sourcing',
    heading: 'Sourcing and labels',
    lead: 'Fabric, trims and branding for the garments we make.',
    slugs: ['fabric-sourcing', 'trims-sourcing', 'garment-labels'],
  },
  {
    id: 'quality',
    heading: 'Quality',
    lead: 'Checks from fabric arrival to the final audit.',
    slugs: ['quality-inspection-service'],
  },
];

export const guideGroups: CatalogueGroup[] = [
  {
    id: 'starting',
    heading: 'Starting and growing a brand',
    lead: 'From the first idea to steady reorders.',
    slugs: ['how-to-start-a-clothing-brand', 'clothing-brand-startup-costs', 'how-to-scale-a-clothing-brand', 'private-label-clothing-guide', 'print-on-demand-vs-private-label', 'insights/moq-meaning-clothing'],
  },
  {
    id: 'factories',
    heading: 'Finding and working with a factory',
    lead: 'How to choose a supplier and work with them well.',
    slugs: ['how-to-find-clothing-manufacturer', 'direct-factory-vs-trading-company-vs-buying-agent', 'overseas-vs-local-clothing-manufacturer', 'insights/how-to-negotiate-with-clothing-manufacturers', 'insights/avoiding-clothing-manufacturer-scams', 'insights/oem-vs-odm-vs-cmt', 'guides/how-clothing-manufacturers-work'],
  },
  {
    id: 'countries',
    heading: 'Sourcing countries',
    lead: 'Bangladesh and how it compares with other sourcing countries.',
    slugs: ['clothing-manufacturer-bangladesh', 'bangladesh-vs-china-clothing-manufacturing', 'bangladesh-vs-vietnam-clothing-manufacturing', 'bangladesh-vs-india-clothing-manufacturing', 'bangladesh-vs-pakistan-clothing-manufacturing'],
  },
  {
    id: 'development',
    heading: 'Design, fit and colour',
    lead: 'Tech packs, samples, sizing and colour approval.',
    slugs: ['how-to-create-a-tech-pack', 'digital-3d-sample-vs-physical-sample', 'insights/garment-grading-explained', 'insights/international-size-chart-guide', 'insights/pattern-fit-problems-explained', 'insights/hex-code-vs-pantone-tcx-for-clothing-manufacturers', 'insights/lab-dip-explained'],
  },
  {
    id: 'quality',
    heading: 'Fabric, decoration and quality',
    lead: 'What makes a garment last, and how faults are caught.',
    slugs: ['insights/fabric-types-glossary', 'insights/fabric-gsm-explained', 'insights/knitting-defects-explained', 'insights/shade-variation-explained', 'insights/stitch-quality-spi-explained', 'insights/printing-methods-compared', 'insights/embroidery-problems-explained', 'insights/garment-finishing-explained', 'insights/aql-inspection-explained', 'in-house-qc-vs-third-party-inspection-vs-no-inspection'],
  },
  {
    id: 'costs',
    heading: 'Costs, payment and shipping',
    lead: 'Pricing an order, paying for it and getting it home.',
    slugs: ['insights/manufacturing-costs', 'insights/how-to-calculate-landed-cost', 'insights/payment-terms-lc-vs-tt', 'insights/incoterms-explained', 'insights/customs-clearance-guide', 'freight-forwarder-vs-factory-arranged-shipping-vs-diy', 'guides/clothing-manufacturing-lead-time'],
  },
];
