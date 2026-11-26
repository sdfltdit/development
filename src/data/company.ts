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

/** Owner, 27 November 2026: our sister company makes knit and woven fabric for large orders, plus trims and garment accessories. Never name it. */
export const sisterCompany = {
  fabricAbove: 5000, // pieces per style
} as const;

export const sisterCompanyPolicy = `For orders above ${sisterCompany.fabricAbove.toLocaleString('en-GB')} pieces per style, our sister company can make the knit or woven fabric for you. It also makes trims and garment accessories for the clothing we produce`;

export const sampleFeePolicy = `There is no separate sample fee. Your ${terms.payment[0].share}% deposit covers the sample, up to ${terms.sampleCorrections} free rounds of corrections and express courier to your door anywhere in the world`;

export const capabilities = {
  inHouse: ['Pattern making and grading', 'Cutting', 'Sewing', 'Screen printing', 'DTF printing', 'Sublimation printing', 'Embroidery', 'Finishing and packing', 'Quality inspection'],
  fabrics: 'All fabric types, knit and woven, from cotton jersey, fleece and French terry to polyester, blends and recycled fabrics',
  tshirtGsm: '140–260',
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
