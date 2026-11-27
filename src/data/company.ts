/**
 * Single source of truth for every business fact on the site.
 * Pages, schema, llms.txt and the {{token}} replacements in Markdown all read from here.
 * Change a value once and every page updates on the next build.
 *
 * `unconfirmed` lists the keys that were taken from the previous website and still need
 * sign-off from SDF management. Clear a key from the list once the value is confirmed.
 */

export const site = {
  url: 'https://sdfltd.com',
  name: 'SDF Clothing',
  locale: 'en_US',
  language: 'en',
  defaultOgImage: '/og-default.png',
  themeColor: '#000000',
} as const;

export const company = {
  brandName: 'SDF Clothing',
  legalName: 'SDF Clothing',
  parentCompany: 'SDF Corprt',
  description:
    'SDF Clothing is a custom clothing manufacturer serving fashion brands worldwide from its own factory in Dhaka, Bangladesh, making cut-and-sew clothing in any fabric, such as T-shirts, hoodies and sweatshirts for fashion brands and private label programmes.',
  alternateNames: ['SDF Ltd', 'SDF Garments'],
  foundingDate: '1998-08-22',
  foundingYear: 1998,
  founder: {
    name: 'Chowdhury Remon',
    jobTitle: 'Founder & CEO',
  },
  address: {
    street: 'House 125, Road 01, Baridhara DOHS',
    locality: 'Dhaka',
    region: 'Dhaka Division',
    postalCode: '1212',
    country: 'BD',
    countryName: 'Bangladesh',
  },
  geo: { latitude: 23.7956, longitude: 90.4203 },
  phone: '+8801819172080',
  phoneDisplay: '+880 1819 172080',
  whatsapp: '8801819172080',
  contactPath: '/contact/',
  email: 'contact@sdfltd.com',
  officialDomain: 'sdfltd.com',
  hours: 'Saturday to Thursday, 9:00–18:00 Bangladesh time (GMT+6)',
  sameAs: [
    'https://www.linkedin.com/company/clothing-manufacturers',
    'https://www.facebook.com/ClothingManufacturers/',
    'https://www.instagram.com/clothing_manufacturerss',
    'https://clutch.co/profile/sdf-clothing',
  ],
  showRegistration: false,
  registration: {
    rjsc: 'C3457',
    tin: '000792572',
  },
} as const;

export const terms = {
  moq: 300,
  moqUnit: 'pieces per style',
  sampleDays: '10–14',
  bulkDays: '30–45',
  quoteHours: 48,
  aql: '2.5',
  incoterm: 'FOB',
  port: 'Chittagong',
  currencies: ['USD', 'GBP', 'EUR', 'CAD', 'AUD'],
  sampleCorrections: 10,
  sampleCourier: 'DHL, FedEx, Aramex or another express courier',
  payment: [
    { share: 30, when: 'as a deposit to start sampling' },
    { share: 40, when: 'after you approve the sample, to start bulk production' },
    { share: 30, when: 'when bulk is ready, before delivery' },
  ],
  paymentScope: 'This schedule applies to T/T, Wise, Xoom and other direct payments. Orders paid by letter of credit follow the LC terms instead, bank to bank',
  paymentMethods: ['LC (letter of credit)', 'T/T bank transfer', 'Wise', 'WorldRemit', 'Xoom', 'etc.'],
  paymentMethod: 'LC (letter of credit) or T/T bank transfer, as well as Wise, WorldRemit, Xoom, etc. Payment always goes to the company bank account named on our proforma invoice',
  lc: {
    summary: 'an irrevocable letter of credit payable at sight, subject to UCP 600',
    rules: [
      'Irrevocable documentary credit, subject to UCP 600, the ICC rules for letters of credit',
      'Payable at sight, so payment is made as soon as the documents match the credit',
      'Issued by a bank acceptable to us, with SDF Clothing named as beneficiary',
      'The whole order, sampling included, is covered by the LC, so no T/T deposit is needed',
      'Documents: commercial invoice, packing list, bill of lading or air waybill and certificate of origin, plus any inspection certificate you ask for',
      'Latest shipment date set from the agreed production time, with at least 21 days after shipment to present documents',
      'Partial shipments and transhipment allowed unless we agree otherwise',
      'Bank charges in your country are yours, and bank charges in Bangladesh are ours',
      'Your bank sends us the draft LC wording to check before it is issued',
    ],
  },
  replyHours: 24,
} as const;

/**
 * Owner, 27 November 2026: how fabric is supplied and the minimums that follow.
 * Orders at the minimum use ready fabric from local mills and stock, or ready fabric imported from the countries below.
 * Custom-made fabric (own colour, weight or construction) starts at the sister company threshold, because smaller runs lose money.
 * Owner, 27 November 2026: at least 150 pieces per colour, for knit and woven alike.
 * We never sell fabric on its own.
 */
export const fabricSupply = {
  importFrom: ['China', 'Taiwan', 'Hong Kong', 'South Korea'],
  perColour: 150,
} as const;

/** Owner, 27 November 2026: our sister company makes knit and woven fabric for large orders, plus trims, garment accessories and packaging (hang tags, polybags, cartons and branded packaging). Trims and packaging are supplied only with our garment orders. Never name it. */
/** Owner, 27 November 2026: the in-house design team works on orders of this many pieces per style or more. */
export const designTeamFrom = 5000;

export const sisterCompany = {
  fabricAbove: 5000, // pieces per style
} as const;

export const sisterCompanyPolicy = `For orders from ${sisterCompany.fabricAbove.toLocaleString('en-GB')} pieces per style, our sister company can make the knit or woven fabric for you. It also makes trims, garment accessories and packaging for the clothing we produce`;

export const sampleFeePolicy = `There is no separate sample fee. Your ${terms.payment[0].share}% deposit covers the sample, up to ${terms.sampleCorrections} free rounds of corrections and express courier to your door anywhere in the world`;

export const capabilities = {
  inHouse: ['Pattern making and grading', 'Cutting', 'Sewing', 'Screen printing', 'DTF printing', 'Sublimation printing', 'Embroidery', 'Finishing and packing', 'Quality inspection'],
  fabrics: 'All fabric types, knit and woven, from cotton jersey, fleece and French terry to polyester, blends and recycled fabrics',
  /** Owner, 27 November 2026: we work at any GSM. These two ranges are only the weights we make most often. */
  tshirtGsm: '140–260',
  workforce: '600+',
  monthlyCapacity: 50000,
  fleeceGsm: '240–420',
} as const;

export interface PriceRow {
  product: string;
  fabric: string;
  gsm: string;
  fobMoq: string;
  fobBulk: string;
}

export const priceIndex = {
  checkedAt: '2026-11-26',
  currency: 'USD',
  bulkQty: '5,000',
  basis: 'FOB Chittagong per piece, with one-colour print or no decoration and standard poly bag packing',
  rows: [
    { product: 'Basic T-shirt', fabric: 'Cotton jersey', gsm: '160–180', fobMoq: '5.00', fobBulk: '2.80' },
    { product: 'Heavyweight or oversized T-shirt', fabric: 'Cotton jersey', gsm: '220–260', fobMoq: '6.50', fobBulk: '3.80' },
    { product: 'Long sleeve T-shirt', fabric: 'Cotton jersey', gsm: '180', fobMoq: '6.00', fobBulk: '3.40' },
    { product: "Kids' T-shirt", fabric: 'Cotton jersey', gsm: '160', fobMoq: '3.80', fobBulk: '2.20' },
    { product: 'Tank top', fabric: 'Cotton jersey', gsm: '160', fobMoq: '4.50', fobBulk: '2.50' },
    { product: 'Polo shirt', fabric: 'Cotton piqué', gsm: '200–220', fobMoq: '7.50', fobBulk: '4.60' },
    { product: 'Crewneck sweatshirt', fabric: 'Fleece', gsm: '280–320', fobMoq: '9.50', fobBulk: '6.00' },
    { product: 'Pullover hoodie', fabric: 'Fleece', gsm: '300–340', fobMoq: '11.00', fobBulk: '6.80' },
    { product: 'Zip hoodie', fabric: 'Fleece', gsm: '300–340', fobMoq: '13.00', fobBulk: '8.00' },
    { product: 'Joggers', fabric: 'Fleece', gsm: '280–320', fobMoq: '9.00', fobBulk: '5.60' },
    { product: 'Shorts', fabric: 'French terry', gsm: '240–280', fobMoq: '7.00', fobBulk: '4.30' },
    { product: 'Woven shirt', fabric: 'Cotton poplin', gsm: '110–130', fobMoq: '10.00', fobBulk: '6.50' },
  ] satisfies PriceRow[],
} as const;

export const whatsappUrl = `https://wa.me/${company.whatsapp}`;

export const contactTopics = ['New product enquiry', 'Existing order', 'Factory visit', 'Partnership or supplier', 'Other'] as const;

export const quoteProducts = ['T-shirts', 'Hoodies or sweatshirts', 'Joggers or sweatpants', 'Polo shirts', 'Other garments'] as const;

export const visitPurposes = ['First meeting and factory tour', 'Sample or fit review', 'Production check', 'Pre-shipment inspection', 'Other'] as const;

/** Owner, 27 November 2026: workplace facilities and policies for our team. */
export const workplace = [
  { label: 'Canteen', text: 'a canteen on site, so every shift has somewhere to eat and rest' },
  { label: 'Medical care', text: 'a medical room for first aid and health checks during working hours' },
  { label: 'Daycare and childcare', text: 'childcare on site, so parents can work knowing their children are looked after' },
  { label: 'No overtime', text: 'production is planned within normal working hours, never by stretching shifts' },
  { label: 'No child labour', text: 'we do not employ children, and we collect a national ID card from every worker when they join' },
  { label: 'Festival bonuses', text: 'paid to every worker for the main festivals each year' },
] as const;

/** Owner, 27 November 2026: main export markets. */
export const exportMarkets = ['the European Union', 'the United States', 'Australia', 'Japan'] as const;

export function mainMarkets(): string {
  return `${exportMarkets.slice(0, -1).join(', ')} and ${exportMarkets[exportMarkets.length - 1]}`;
}

export const shipping = {
  scope: 'worldwide',
  regions: [
    { name: 'North America', note: 'USA and Canada. Care, fibre and origin labels to US rules, and bilingual English and French labels for Canada.' },
    { name: 'UK and Europe', note: 'Fibre content and care labels to UK and EU textile rules, in the languages you sell in.' },
    { name: 'Australia and NZ', note: 'Care labels to the Australian and New Zealand mandatory care labelling standards.' },
    { name: 'Middle East', note: 'Labels, sizing and packing to your market rules and your retailer instructions.' },
    { name: 'Asia and beyond', note: 'Any other country. Tell us where you sell and we confirm labels and packing on your quote.' },
  ],
} as const;

export const unconfirmed: readonly string[] = [
  'terms.sampleDays',
  'terms.bulkDays',
  'terms.payment',
  'terms.sampleCorrections',
  'terms.sampleCourier',
  'terms.replyHours',
  'company.hours',
  'capabilities.inHouse',
  'capabilities.tshirtGsm',
  'capabilities.fleeceGsm',
];

export function yearsInBusiness(today: Date = new Date()): number {
  const founded = new Date(company.foundingDate);
  let years = today.getFullYear() - founded.getFullYear();
  const anniversary = new Date(today.getFullYear(), founded.getMonth(), founded.getDate());
  if (today < anniversary) years -= 1;
  return years;
}

export function paymentSummary(): string {
  return terms.payment.map((p) => `${p.share}% ${p.when}`).join(', then ');
}

/** Owner, 27 November 2026: how samples are made and kept. */
export const sampling = {
  baseSize: 'M',
  counterSamples: 4,
  counterSampleHolders: ['our factory floor', 'you, the buyer', 'our head office', 'the merchandiser who follows your order from sample to shipment'],
} as const;

/** Owner, 27 November 2026: buyers get an email update at every stage, kept as the official record of the order. No address is published. */
export const orderUpdates = {
  short: 'By email at every stage, kept as an official record',
  sentence: 'We email you an update at every stage of your order, so you keep an official written record.',
} as const;

/** Owner, 27 November 2026: a customer ID is emailed (through the contact form worker) once payment or the LC is confirmed. Department teams reply only to messages that quote it. Customer care answers everyone. */
export const customerId = {
  issued: 'once your payment is confirmed or your letter of credit reaches us',
  sentTo: 'the email address you used on our contact form',
  teams: 'merchandising, design, production and quality teams',
  policy:
    'Once your payment is confirmed or your letter of credit reaches us, we email your customer ID to the address you used on our contact form. Our merchandising, design, production and quality teams reply only to messages that quote it.',
} as const;

/** Owner, 27 November 2026: fabric comes only from nominated and approved suppliers, and is checked before and during sewing. */
export const fabricChecks = {
  supplierPortal: 'https://supplier.sdfltd.com/',
  steps: [
    { label: 'Nominated suppliers', text: 'fabric comes only from our nominated and approved mills and factories' },
    { label: 'Certificates', text: 'mill certificates and test reports checked against the order' },
    { label: 'Roll check', text: 'rolls checked for width, weight and shade on arrival' },
    { label: 'Yarn count', text: 'yarn count checked against the fabric specification' },
    { label: '4-point inspection', text: 'rolls graded for defects with the 4-point system before cutting' },
    { label: 'During sewing', text: 'panels and garments checked at every step of the sewing line' },
  ],
} as const;

/**
 * Default measurement tolerances (owner asked us to use industry best practice, 27 November 2026).
 * Half measurements taken flat, in centimetres. A tolerance in the buyer's tech pack always wins.
 */
export const measurementTolerances = [
  { point: 'Half chest or bust', knit: '±1', woven: '±1' },
  { point: 'Body length', knit: '±1.5', woven: '±1' },
  { point: 'Sleeve length', knit: '±1', woven: '±1' },
  { point: 'Shoulder width', knit: '±1', woven: '±0.5' },
  { point: 'Half waist, relaxed', knit: '±1', woven: '±0.5' },
  { point: 'Half hip', knit: '±1', woven: '±1' },
  { point: 'Inseam', knit: '±1', woven: '±1' },
  { point: 'Neck width and cuff or leg opening', knit: '±0.5', woven: '±0.5' },
  { point: 'Small details such as pocket placement', knit: '±0.3', woven: '±0.3' },
] as const;

export const tokens: Record<string, string> = {
  moq: String(terms.moq),
  moqUnit: terms.moqUnit,
  sampleDays: terms.sampleDays,
  bulkDays: terms.bulkDays,
  quoteHours: String(terms.quoteHours),
  aql: terms.aql,
  incoterm: terms.incoterm,
  port: terms.port,
  founded: String(company.foundingYear),
  years: String(yearsInBusiness()),
  payment: paymentSummary(),
  lc: terms.lc.summary,
  sampleFee: `${sampleFeePolicy}.`,
  sampleCorrections: String(terms.sampleCorrections),
  sisterFabricAbove: sisterCompany.fabricAbove.toLocaleString('en-GB'),
  customFabricFrom: sisterCompany.fabricAbove.toLocaleString('en-GB'),
  perColour: String(fabricSupply.perColour),
  coloursAtMoq: String(Math.floor(terms.moq / fabricSupply.perColour)),
  fabricImports: `${fabricSupply.importFrom.slice(0, -1).join(', ')} and ${fabricSupply.importFrom[fabricSupply.importFrom.length - 1]}`,
  workforce: capabilities.workforce,
  monthlyCapacity: capabilities.monthlyCapacity.toLocaleString('en-GB'),
  mainMarkets: mainMarkets(),
  designFrom: designTeamFrom.toLocaleString('en-GB'),
  baseSize: sampling.baseSize,
  orderUpdatesShort: orderUpdates.short,
  customerIdPolicy: customerId.policy,
  customerIdIssued: customerId.issued,
  orderUpdates: orderUpdates.sentence,
  counterSamples: String(sampling.counterSamples),
  counterSampleHolders: `${sampling.counterSampleHolders.slice(0, -1).join(', ')} and ${sampling.counterSampleHolders[sampling.counterSampleHolders.length - 1]}`,
  sisterCompany: `${sisterCompanyPolicy}.`,
  sampleCourier: terms.sampleCourier,
  paymentScope: `${terms.paymentScope}.`,
  replyHours: String(terms.replyHours),
  tshirtGsm: capabilities.tshirtGsm,
  fleeceGsm: capabilities.fleeceGsm,
  teeFrom: `$${priceIndex.rows[0].fobMoq}`,
  teeBulk: `$${priceIndex.rows[0].fobBulk}`,
  bulkQty: priceIndex.bulkQty,
  city: company.address.locality,
};

const priceKey = (product: string): string =>
  product
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');

measurementTolerances.forEach((row, i) => {
  tokens[`tol${i + 1}Point`] = row.point;
  tokens[`tol${i + 1}Knit`] = `${row.knit} cm`;
  tokens[`tol${i + 1}Woven`] = `${row.woven} cm`;
});

for (const row of priceIndex.rows) {
  tokens[`${priceKey(row.product)}From`] = `$${row.fobMoq}`;
  tokens[`${priceKey(row.product)}Bulk`] = `$${row.fobBulk}`;
  tokens[`${priceKey(row.product)}MoqTotal`] = `$${(Number(row.fobMoq) * terms.moq).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function fill(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
    const value = tokens[key];
    if (value === undefined) throw new Error(`Unknown fact token ${match}. Add it to tokens in src/data/company.ts.`);
    return value;
  });
}
