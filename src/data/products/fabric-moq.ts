import type { TableBlock } from './types';

type Construction = 'knit' | 'woven';

const construction = (types: Construction[]): string =>
  types.length > 1 ? 'Knit and woven, with the same minimums for both' : types[0] === 'knit' ? 'Knit' : 'Woven';

/**
 * Minimum order table for fabric pages. Every figure comes from tokens in company.ts,
 * so the knit and woven minimums stay identical across the site. The table also carries
 * the fabric supply infographic.
 */
export function fabricMoqBlock(types: Construction[], noun: string, lead: string): TableBlock {
  return {
    kind: 'table',
    id: 'minimums',
    eyebrow: 'Minimum order',
    heading: `Minimum order for ${noun}`,
    lead,
    caption: `Minimums for ${noun}, knit or woven`,
    columns: ['Point', 'Detail'],
    rows: [
      ['Fabric construction', construction(types)],
      ['Minimum per style', '{{moq}} {{moqUnit}}'],
      ['Minimum per colour', '{{perColour}} pieces, knit or woven'],
      ['Colours at the minimum', 'Up to {{coloursAtMoq}}'],
      ['Ready fabric', 'Local mills and stock, or imported from {{fabricImports}}'],
      ['Fabric made to your spec', 'From {{customFabricFrom}} pieces per style'],
    ],
    image: 'fabric',
    more: 'We do not sell fabric on its own. Every metre is bought or made for clothing we produce for you, as our <a href="/fabric-sourcing/">fabric sourcing service</a> explains.',
  };
}

/** Typical fabric weights for a fabric page. Ranges are guidance, and the exact weight is confirmed on the swatch. */
export function weightBlock(noun: string, rows: [string, string, string][]): TableBlock {
  return {
    kind: 'table',
    id: 'weights',
    eyebrow: 'Fabric weight',
    heading: `Typical weights for ${noun}`,
    lead: 'We work to GSM, grams per square metre. These are the usual ranges for each fabric. Your exact weight is confirmed on the swatch and the mill report.',
    caption: `Typical fabric weights for ${noun}`,
    columns: ['Fabric', 'Typical weight', 'Good for'],
    rows,
    more: 'Our free <a href="/tools/gsm-converter/">GSM converter</a> turns ounces per square yard into GSM, and our <a href="/insights/fabric-gsm-explained/">fabric GSM guide</a> explains how weight changes feel and price.',
  };
}
