import type { ProductContent } from './types';
import { fabricMoqBlock } from './fabric-moq';

export const viscose: ProductContent = {
  slug: 'viscose-clothing-manufacturer',
  garment: 'viscose',
  quoteCta: 'Get a viscose clothing quote',
  audience: 'Womenswear, resort, modest and loungewear brands working in soft, draping fabric',
  glanceHeading: 'Viscose clothing manufacturing at a glance',
  glanceLead: 'Viscose drapes beautifully but shrinks and weakens when wet. These are the points a viscose clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a viscose clothing manufacturer',
  stylesLead: 'Viscose suits loose, flowing shapes and printed ranges. These are the pieces brands order most.',
  styles: [
    { title: 'Printed dresses', text: 'Maxi, midi and wrap dresses in viscose challis or crepe.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Blouses and shirts', text: 'Camp-collar shirts, tie-neck blouses and relaxed tops.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Kurtas and kaftans', text: 'Long tunics and kaftans in printed or plain viscose.', href: '/kurta-manufacturer/', cta: 'Kurta manufacturer details' },
    { title: 'Wide-leg trousers', text: 'Pull-on and pleated trousers in viscose twill or crepe.' },
    { title: 'Pyjamas and lounge sets', text: 'Soft sets in viscose satin or viscose jersey.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(
      ['woven', 'knit'],
      'viscose clothing',
      'Viscose comes woven or knitted, and the two have different colour minimums. At the minimum we cut from ready viscose. Viscose woven or knitted to your own construction and weight starts at {{customFabricFrom}} pieces per style.',
    ),
    {
      kind: 'table',
      id: 'fabrics',
      eyebrow: 'Viscose fabric',
      heading: 'Which viscose fabric suits which garment',
      lead: 'Viscose fabric is made in several weaves and knits. This is how the main ones compare.',
      caption: 'Viscose fabrics compared',
      columns: ['Fabric', 'Feel and drape', 'Good for'],
      rows: [
        ['Viscose challis', 'Light, soft, very fluid', 'Printed dresses, blouses, kurtas'],
        ['Viscose crepe', 'Grainy, matte, heavier drape', 'Dresses, trousers, modest wear'],
        ['Viscose twill', 'Smooth with a slight diagonal', 'Wide-leg trousers, shirts'],
        ['Viscose satin', 'Glossy face, cool feel', 'Pyjamas, slip dresses'],
        ['Viscose jersey', 'Stretchy, soft and cool', 'T-shirts, lounge sets, wrap tops'],
      ],
    },
    {
      kind: 'checklist',
      id: 'care',
      eyebrow: 'Shrinkage and strength',
      heading: 'How we handle custom viscose clothing in production',
      lead: 'Viscose shrinks more than cotton and loses strength when wet. This is how we plan for both.',
      items: [
        { label: 'Wash test', text: 'a swatch from every fabric lot is washed and measured before cutting' },
        { label: 'Pattern allowance', text: 'shrinkage added to the pattern so finished sizes stay true' },
        { label: 'Relaxing', text: 'fabric rests off the roll before cutting, so it does not spring back' },
        { label: 'Seams', text: 'stitch length and seam allowance set so seams do not pull apart' },
        { label: 'Pressing', text: 'low-heat pressing so the surface does not shine' },
        { label: 'Care label', text: 'wash instructions written to match the test result' },
      ],
    },
  ],
  noPrice: {
    heading: 'How viscose clothing is priced',
    paragraphs: [
      'The fabric type, print and garment style move the price most. Challis costs less than crepe or satin, and a printed fabric costs more than a plain one.',
      'You get a written quote within {{quoteHours}} hours. Our <a href="/pricing/">clothing manufacturing prices</a> page shows how core products are priced at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a viscose order runs',
  processLead: 'Six steps from your brief to shipped viscose clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, fabric feel, print and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send swatches of ready viscose, or plan your own print or colour.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Wash test', text: 'The bulk fabric is wash-tested and the pattern adjusted.' },
    { title: 'Bulk', text: '{{bulkDays}} days of cutting, sewing and pressing after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Viscose quality checks',
    lead: 'Every viscose clothing order passes these checks before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, print and shade checked on arrival' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Measurements', text: 'checked after washing on the sample' },
      { label: 'Seams', text: 'checked for slipping and puckering' },
      { label: 'Surface', text: 'no shine or press marks' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a viscose clothing quote',
    lead: 'This is enough to quote and plan a first sample.',
    items: [
      'A photo, sketch or tech pack',
      'The viscose fabric you want, or the feel you are after',
      'Print artwork or colour references',
      'Size range and quantity per style',
      'Target price and delivery date',
      'Care instructions you want on the label',
    ],
  },
  first: {
    heading: 'Viscose and its relatives',
    paragraphs: [
      'Viscose, modal and lyocell all come from wood pulp but behave differently. See our <a href="/modal-clothing-manufacturer/">modal clothing manufacturer</a> and <a href="/lyocell-clothing-manufacturer/">lyocell clothing manufacturer</a> pages, or our <a href="/bamboo-clothing-manufacturer/">bamboo clothing manufacturer</a> page for viscose made from bamboo.',
      'Our <a href="/insights/fabric-types-glossary/">fabric types glossary</a> explains each fabric family in plain words.',
    ],
  },
  faqHeading: 'Viscose clothing questions',
};
