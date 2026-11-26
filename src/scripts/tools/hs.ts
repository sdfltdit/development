/**
 * Four-digit HS headings for clothing, HS 2022 chapters 61 (knitted or crocheted) and 62 (not knitted).
 * Checked against the heading texts and chapter notes in the US Census Bureau Schedule B, chapters 61 and 62.
 * Six-digit subheadings depend on fibre and are not given here.
 */

export type Construction = 'knit' | 'woven';
export type Wearer = 'men' | 'women' | 'unisex' | 'baby';

export interface Garment {
  id: string;
  label: string;
  knit?: { men?: string; women?: string; any?: string };
  woven?: { men?: string; women?: string; any?: string };
  babyHeading?: boolean;
  note?: Partial<Record<Construction, string>>;
}

export const headings: Record<string, string> = {
  '6101': "Men's or boys' overcoats, anoraks, ski jackets, windbreakers and similar, knitted",
  '6102': "Women's or girls' overcoats, anoraks, ski jackets, windbreakers and similar, knitted",
  '6103': "Men's or boys' suits, ensembles, suit-type jackets, blazers, trousers, bib and brace overalls and shorts, knitted",
  '6104': "Women's or girls' suits, ensembles, suit-type jackets, blazers, dresses, skirts, trousers, bib and brace overalls and shorts, knitted",
  '6105': "Men's or boys' shirts, knitted",
  '6106': "Women's or girls' blouses and shirts, knitted",
  '6107': "Men's or boys' underpants, briefs, nightshirts, pyjamas, bathrobes, dressing gowns and similar, knitted",
  '6108': "Women's or girls' slips, briefs, panties, nightdresses, pyjamas, bathrobes, dressing gowns and similar, knitted",
  '6109': 'T-shirts, singlets, tank tops and similar garments, knitted',
  '6110': 'Jerseys, pullovers, sweatshirts, cardigans, waistcoats and similar, knitted',
  '6111': "Babies' garments and clothing accessories, knitted",
  '6112': 'Tracksuits, ski suits and swimwear, knitted',
  '6113': 'Garments made of coated, covered or laminated knitted fabric (headings 5903, 5906 or 5907)',
  '6114': 'Other garments, knitted',
  '6115': 'Tights, stockings, socks and other hosiery, knitted',
  '6116': 'Gloves, mittens and mitts, knitted',
  '6117': 'Other made-up clothing accessories, knitted, such as scarves and ties',
  '6201': "Men's or boys' overcoats, anoraks, ski jackets, windbreakers and similar, including padded sleeveless jackets",
  '6202': "Women's or girls' overcoats, anoraks, ski jackets, windbreakers and similar, including padded sleeveless jackets",
  '6203': "Men's or boys' suits, ensembles, suit-type jackets, blazers, trousers, bib and brace overalls and shorts",
  '6204': "Women's or girls' suits, ensembles, suit-type jackets, blazers, dresses, skirts, trousers, bib and brace overalls and shorts",
  '6205': "Men's or boys' shirts",
  '6206': "Women's or girls' blouses, shirts and shirt-blouses",
  '6207': "Men's or boys' undershirts, underpants, briefs, nightshirts, pyjamas, bathrobes, dressing gowns and similar",
  '6208': "Women's or girls' undershirts, slips, briefs, panties, nightdresses, pyjamas, bathrobes, dressing gowns and similar",
  '6209': "Babies' garments and clothing accessories",
  '6210': 'Garments made of felt, nonwovens or coated, covered or laminated fabric (headings 5602, 5603, 5903, 5906 or 5907)',
  '6211': 'Tracksuits, ski suits and swimwear, and other garments',
  '6212': 'Bras, girdles, corsets, braces and similar, knitted or not',
  '6214': 'Shawls, scarves, mufflers, veils and the like',
  '6215': 'Ties, bow ties and cravats',
  '6216': 'Gloves, mittens and mitts',
};

export const garments: Garment[] = [
  { id: 'tshirt', label: 'T-shirt, tank top or singlet', knit: { any: '6109' }, babyHeading: true, note: { knit: 'A top with a drawstring, ribbed waistband or other tightening at the hem is not a T-shirt for this heading. It usually goes to 6110 or 6114.' } },
  { id: 'sweatshirt', label: 'Hoodie, sweatshirt, jumper or cardigan', knit: { any: '6110' }, babyHeading: true },
  { id: 'shirt', label: 'Shirt or blouse with a collar or buttons', knit: { men: '6105', women: '6106' }, woven: { men: '6205', women: '6206' }, babyHeading: true, note: { knit: 'Knitted shirts with pockets below the waist, a ribbed waistband or tightening at the hem, or fewer than 10 stitches per centimetre, fall outside 6105 and 6106. Heading 6105 also excludes sleeveless garments.' } },
  { id: 'outerwear', label: 'Coat, jacket, anorak, windbreaker or puffer', knit: { men: '6101', women: '6102' }, woven: { men: '6201', women: '6202' }, babyHeading: true, note: { knit: 'Suit-type jackets and blazers are not in this heading. Choose "Blazer or suit" instead.', woven: 'Suit-type jackets and blazers are not in this heading. Choose "Blazer or suit" instead.' } },
  { id: 'suit', label: 'Blazer, suit or matching set', knit: { men: '6103', women: '6104' }, woven: { men: '6203', women: '6204' }, babyHeading: true },
  { id: 'trousers', label: 'Trousers, joggers, shorts or bib and brace overalls', knit: { men: '6103', women: '6104' }, woven: { men: '6203', women: '6204' }, babyHeading: true },
  { id: 'dress', label: 'Dress or skirt', knit: { women: '6104' }, woven: { women: '6204' }, babyHeading: true },
  { id: 'jumpsuit', label: 'Jumpsuit, playsuit or coverall', knit: { any: '6114' }, woven: { any: '6211' }, babyHeading: true, note: { knit: 'Bib and brace overalls are in 6103 or 6104, so choose "Trousers" for those.', woven: 'Bib and brace overalls are in 6203 or 6204, so choose "Trousers" for those.' } },
  { id: 'sleep', label: 'Underwear, pyjamas, nightwear or bathrobe', knit: { men: '6107', women: '6108' }, woven: { men: '6207', women: '6208' }, babyHeading: true },
  { id: 'sport', label: 'Tracksuit, ski suit or swimwear', knit: { any: '6112' }, woven: { any: '6211' }, babyHeading: true },
  { id: 'coated', label: 'Garment in coated, laminated or rubberised fabric', knit: { any: '6113' }, woven: { any: '6210' }, babyHeading: true },
  { id: 'bra', label: 'Bra, sports bra or shapewear', knit: { any: '6212' }, woven: { any: '6212' } },
  { id: 'socks', label: 'Socks, tights or hosiery', knit: { any: '6115' } },
  { id: 'gloves', label: 'Gloves or mittens', knit: { any: '6116' }, woven: { any: '6216' }, babyHeading: true },
  { id: 'scarf', label: 'Scarf or shawl', knit: { any: '6117' }, woven: { any: '6214' } },
  { id: 'tie', label: 'Tie or bow tie', knit: { any: '6117' }, woven: { any: '6215' } },
];

export interface Result {
  heading: string;
  description: string;
  notes: string[];
}

export function findHeading(construction: Construction, garmentId: string, wearer: Wearer): Result | { error: string } {
  const g = garments.find((x) => x.id === garmentId);
  if (!g) return { error: 'Choose a garment type.' };
  const rule = g[construction];
  if (!rule) {
    return { error: construction === 'woven' ? 'This garment is normally knitted. Check the construction, or choose a woven garment type.' : 'This garment is not normally knitted. Check the construction.' };
  }
  const notes: string[] = [];
  let heading: string | undefined;
  if (wearer === 'baby' && g.babyHeading) {
    heading = construction === 'knit' ? '6111' : '6209';
    notes.push("Babies' garments are for young children up to 86 cm tall. They take this heading before any other.");
  } else {
    const who = wearer === 'baby' ? 'women' : wearer;
    heading = rule.any ?? (who === 'men' ? rule.men : rule.women) ?? rule.women ?? rule.men;
    if (wearer === 'unisex' && !rule.any) notes.push("Garments that cannot be identified as men's or women's are classified under the women's or girls' heading.");
    if (wearer === 'men' && !rule.any && !rule.men) return { error: 'This heading covers women\'s and girls\' garments only. Check the wearer.' };
  }
  if (!heading) return { error: 'No heading found for this combination.' };
  if (wearer === 'baby' && !g.babyHeading && g.id !== 'bra') notes.push("Babies' clothing accessories can fall under 6111 or 6209 instead. Confirm with your customs broker.");
  const extra = g.note?.[construction];
  if (extra && !(wearer === 'baby' && g.babyHeading)) notes.push(extra);
  return { heading, description: headings[heading], notes };
}
