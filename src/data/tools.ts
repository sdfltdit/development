/**
 * Free tools listed on /tools/ and in each tool's related links.
 * Each tool page registers its SEO meta in src/data/pages.ts under the same path.
 */

export interface ToolEntry {
  path: string;
  name: string;
  summary: string;
}

export const tools: ToolEntry[] = [
  {
    path: '/tools/gsm-converter/',
    name: 'GSM converter',
    summary: 'Convert fabric weight between GSM, ounces per square yard and ounces per linear yard.',
  },
  {
    path: '/tools/aql-calculator/',
    name: 'AQL calculator',
    summary: 'Find the sample size and accept and reject numbers for a garment inspection.',
  },
  {
    path: '/tools/lead-time-calculator/',
    name: 'Lead time calculator',
    summary: 'Plan when your clothing order arrives, from quote to sample, bulk and shipping.',
  },
  {
    path: '/tools/garment-cost-calculator/',
    name: 'Garment cost calculator',
    summary: 'Work out the landed cost per piece and your margin at a chosen retail price.',
  },
  {
    path: '/tools/shrinkage-calculator/',
    name: 'Fabric shrinkage calculator',
    summary: 'Measure shrinkage after washing and find the size to cut so garments finish on spec.',
  },
  {
    path: '/tools/moq-calculator/',
    name: 'MOQ calculator',
    summary: 'Split an order across colours and sizes with your own size ratio.',
  },
  {
    path: '/tools/color-converter/',
    name: 'Colour converter',
    summary: 'Turn a hex code or RGB value into CMYK, HSL and CIELAB.',
  },
  {
    path: '/tools/delta-e-calculator/',
    name: 'Delta E calculator',
    summary: 'Measure the colour difference between a standard and a sample with CMC 2:1 and CIEDE2000.',
  },
  {
    path: '/tools/wash-care-label-generator/',
    name: 'Care label generator',
    summary: 'Write fibre content, origin and washing instructions for a garment label.',
  },
  {
    path: '/tools/manufacturer-email-generator/',
    name: 'Manufacturer email generator',
    summary: 'Write a clear first email to a clothing factory, ready to copy and send.',
  },
];
