/**
 * How the /products/ and /all-services/ hubs group their pages.
 * Every product, model and service page must appear in exactly one group, or the build fails.
 */

export interface CatalogueGroup {
  id: string;
  heading: string;
  lead: string;
  slugs: string[];
}

export const productGroups: CatalogueGroup[] = [
  {
    id: 'ways-of-working',
    heading: 'Ways of working with us',
    lead: 'How an order is set up, whatever the product.',
    slugs: ['private-label-clothing-manufacturer', 'low-moq-clothing-manufacturers', 'clothing-manufacturers-for-startups', 'sustainable-clothing-manufacturer'],
  },
  {
    id: 'tops',
    heading: 'T-shirts, hoodies and tops',
    lead: 'Knit and woven tops, from basics to streetwear.',
    slugs: ['t-shirt-manufacturer', 'hoodie-manufacturer', 'sweater-manufacturer', 'shirt-manufacturer', 'streetwear-manufacturer', 'merch-manufacturer', 'menswear-manufacturer', 'bodysuit-manufacturer'],
  },
  {
    id: 'bottoms',
    heading: 'Trousers, shorts and skirts',
    lead: 'Bottoms in fleece, denim, twill and jersey.',
    slugs: ['joggers-manufacturer', 'pants-trousers-manufacturer', 'shorts-manufacturer', 'skirts-manufacturer', 'denim-manufacturer', 'overalls-manufacturer'],
  },
  {
    id: 'outerwear',
    heading: 'Jackets, coats and tailoring',
    lead: 'Outerwear from light shells to padded and tailored pieces.',
    slugs: ['jacket-manufacturer', 'coat-manufacturer', 'puffer-jacket-manufacturer', 'rain-jacket-manufacturer', 'fleece-jacket-manufacturer', 'softshell-jacket-manufacturer', 'varsity-jacket-manufacturer', 'blazer-manufacturer', 'suit-manufacturer'],
  },
  {
    id: 'activewear',
    heading: 'Activewear and sportswear',
    lead: 'Stretch, performance and swim garments.',
    slugs: ['activewear-manufacturer', 'leggings-manufacturer', 'sports-bra-manufacturer', 'tracksuit-manufacturer', 'compression-wear-manufacturer', 'base-layer-manufacturer', 'running-apparel-manufacturer', 'golf-apparel-manufacturer', 'tennis-wear-manufacturer', 'cycling-jersey-manufacturer', 'ski-wear-manufacturer', 'swimwear-manufacturer', 'dancewear-manufacturer'],
  },
  {
    id: 'teamwear',
    heading: 'Teamwear and combat sports',
    lead: 'Kits for clubs, schools, leagues and gyms.',
    slugs: ['football-kit-manufacturer', 'basketball-uniform-manufacturer', 'baseball-uniform-manufacturer', 'rugby-shirt-manufacturer', 'cheerleading-uniform-manufacturer', 'esports-jersey-manufacturer', 'martial-arts-uniform-manufacturer', 'fightwear-manufacturer'],
  },
  {
    id: 'womenswear',
    heading: 'Womenswear, occasion and inclusive',
    lead: 'Dresses, occasion wear and ranges built around different bodies.',
    slugs: ['clothing-manufacturers-for-women', 'dress-manufacturer', 'evening-dress-manufacturer', 'wedding-dress-manufacturer', 'jumpsuit-romper-manufacturer', 'maternity-clothing-manufacturer', 'plus-size-clothing-manufacturer', 'adaptive-clothing-manufacturer', 'shapewear-manufacturer'],
  },
  {
    id: 'underwear',
    heading: 'Underwear, sleep and kids',
    lead: 'Garments worn closest to the skin, for adults and children.',
    slugs: ['underwear-manufacturer', 'lingerie-manufacturer', 'loungewear-manufacturer', 'bathrobe-manufacturer', 'kids-baby-clothing-manufacturer', 'baby-bib-manufacturer'],
  },
  {
    id: 'workwear',
    heading: 'Workwear and uniforms',
    lead: 'Clothing for staff, schools, kitchens, clinics and sites.',
    slugs: ['uniform-manufacturer', 'school-uniform-manufacturer', 'scrubs-manufacturer', 'chef-uniform-manufacturer', 'apron-manufacturer', 'lab-coat-manufacturer', 'coverall-manufacturer', 'hi-vis-workwear-manufacturer', 'security-uniform-manufacturer', 'hotel-uniform-manufacturer'],
  },
  {
    id: 'modest',
    heading: 'Modest and cultural wear',
    lead: 'Modest fashion and traditional garments for global markets.',
    slugs: ['modest-fashion-manufacturer', 'hijab-manufacturer', 'kurta-manufacturer', 'salwar-kameez-manufacturer', 'thobe-manufacturer'],
  },
  {
    id: 'fabrics',
    heading: 'By fabric and finish',
    lead: 'Start from the material or the effect you want.',
    slugs: ['cotton-clothing-manufacturer', 'organic-cotton-clothing-manufacturer', 'recycled-clothing-manufacturer', 'linen-clothing-manufacturer', 'bamboo-clothing-manufacturer', 'hemp-clothing-manufacturer', 'modal-clothing-manufacturer', 'lyocell-clothing-manufacturer', 'wool-clothing-manufacturer', 'silk-clothing-manufacturer', 'polyester-clothing-manufacturer', 'french-terry-clothing-manufacturer', 'corduroy-clothing-manufacturer', 'velour-clothing-manufacturer', 'tie-dye-clothing-manufacturer', 'sublimated-clothing-manufacturer'],
  },
  {
    id: 'accessories',
    heading: 'Accessories and bags',
    lead: 'Small items that complete a range or a merch drop.',
    slugs: ['hat-manufacturer', 'socks-manufacturer', 'gloves-manufacturer', 'scarf-manufacturer', 'bandana-manufacturer', 'neck-gaiter-manufacturer', 'hair-accessories-manufacturer', 'tie-manufacturer', 'embroidered-patch-manufacturer', 'tote-bag-manufacturer', 'drawstring-bag-manufacturer', 'cosmetic-pouch-manufacturer', 'dust-bag-manufacturer'],
  },
  {
    id: 'home',
    heading: 'Home, sleep and pets',
    lead: 'Textiles for the home, travel and four-legged customers.',
    slugs: ['silk-pillowcase-manufacturer', 'sleep-mask-manufacturer', 'cushion-cover-manufacturer', 'tea-towel-manufacturer', 'table-linen-manufacturer', 'pet-clothing-manufacturer'],
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
