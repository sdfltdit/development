import type { TableBlock } from './types';

type Construction = 'knit' | 'woven';

const column: Record<Construction, string> = { knit: 'Knit fabric', woven: 'Woven fabric' };
const perColour: Record<Construction, string> = { knit: '{{knitPerColour}} pieces', woven: '{{wovenPerColour}} pieces' };
const colours: Record<Construction, string> = { knit: 'Up to {{knitColours}}', woven: 'Up to {{wovenColours}}' };

/**
 * Minimum order table for fabric pages. Every figure comes from tokens in company.ts,
 * so knit and woven minimums stay identical across the site.
 */
export function fabricMoqBlock(types: Construction[], noun: string, lead: string): TableBlock {
  const both = types.length > 1;
  return {
    kind: 'table',
    id: 'minimums',
    eyebrow: 'Minimum order',
    heading: both ? `Minimum order for ${noun}: knit and woven` : `Minimum order for ${noun}`,
    lead,
    caption: both ? `Knit and woven minimums for ${noun}` : `Minimums for ${noun}`,
    columns: ['Point', ...types.map((t) => column[t])],
    rows: [
      ['Minimum per style', ...types.map(() => '{{moq}} {{moqUnit}}')],
      ['Minimum per colour', ...types.map((t) => perColour[t])],
      ['Colours at the minimum', ...types.map((t) => colours[t])],
      ['Ready fabric', ...types.map(() => 'Local mills and stock, or imported from {{fabricImports}}')],
      ['Fabric made to your spec', ...types.map(() => 'From {{customFabricFrom}} pieces per style')],
    ],
    more: 'We do not sell fabric on its own. Every metre is bought or made for clothing we produce for you, as our <a href="/fabric-sourcing/">fabric sourcing service</a> explains.',
  };
}
