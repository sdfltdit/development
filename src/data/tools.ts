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
];
