import type { ProductContent } from './types';
import { fabricMoqBlock } from './fabric-moq';

export const chiffon: ProductContent = {
  slug: 'chiffon-clothing-manufacturer',
  garment: 'chiffon',
  quoteCta: 'Get a chiffon clothing quote',
  audience: 'Womenswear, occasion, modest and resort brands working in sheer, floating fabric',
  glanceHeading: 'Chiffon clothing manufacturing at a glance',
  glanceLead: 'Chiffon is sheer, slippery and frays easily. These are the points a chiffon clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a chiffon clothing manufacturer',
  stylesLead: 'Chiffon is used on its own or as a floating layer. These are the pieces brands order most.',
  styles: [
    { title: 'Chiffon blouses', text: 'Tie-neck, pussy-bow and relaxed blouses, lined or sheer.' },
    { title: 'Chiffon dresses', text: 'Maxi, midi and tiered dresses with a slip or full lining.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Evening layers', text: 'Overlays, capes and sleeves over satin or crepe.', href: '/evening-dress-manufacturer/', cta: 'Evening dress manufacturer details' },
    { title: 'Kaftans and cover-ups', text: 'Loose kaftans and beach cover-ups, often printed.' },
    { title: 'Scarves and hijabs', text: 'Rolled-hem scarves and chiffon hijabs.', href: '/hijab-manufacturer/', cta: 'Hijab manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(
      ['woven'],
      'chiffon clothing',
      'Chiffon is a woven fabric, so the woven colour minimum applies. At the minimum we cut from ready chiffon, and we can sublimation print your artwork on polyester chiffon. Chiffon woven to your own construction starts at {{customFabricFrom}} pieces per style.',
    ),
    {
      kind: 'table',
      id: 'compare',
      eyebrow: 'Sheer fabrics',
      heading: 'Chiffon vs georgette and other sheer fabrics',
      lead: 'Brands often choose between these sheer fabrics. This is how they differ.',
      caption: 'Sheer fabrics compared',
      columns: ['Fabric', 'Look and feel', 'Good for'],
      rows: [
        ['Polyester chiffon', 'Very light, smooth, see-through', 'Blouses, overlays, printed dresses'],
        ['Silk chiffon', 'Softest, gentle sheen', 'Occasion and bridal layers'],
        ['Crinkle chiffon', 'Pressed crinkle, needs no ironing', 'Scarves, kaftans, travel pieces'],
        ['Georgette', 'Heavier, grainy, less sheer', 'Dresses, hijabs, modest wear'],
        ['Organza', 'Crisp and stiff, holds shape', 'Sleeves, structured overlays'],
      ],
    },
    {
      kind: 'checklist',
      id: 'sewing',
      eyebrow: 'Sewing',
      heading: 'How we sew chiffon blouses and dresses',
      lead: 'Chiffon shows every uneven seam and slips while it is cut. These are the methods we use.',
      items: [
        { label: 'Cutting', text: 'fabric laid on paper and cut in low plies so it does not shift' },
        { label: 'Seams', text: 'French seams that hide raw edges inside the garment' },
        { label: 'Hems', text: 'narrow rolled hems or baby hems on fine needles' },
        { label: 'Needles', text: 'fine needles and a short stitch to stop pulls and puckers' },
        { label: 'Seam slippage', text: 'checked on the sample, with extra allowance where needed' },
        { label: 'Linings', text: 'slips or linings agreed at sample stage for coverage' },
      ],
    },
  ],
  noPrice: {
    heading: 'How chiffon clothing is priced',
    paragraphs: [
      'Silk chiffon costs far more than polyester. Linings, rolled hems and tiers add sewing time, so a lined tiered dress costs more than a simple blouse.',
      'You get a written quote within {{quoteHours}} hours. Our <a href="/pricing/">clothing manufacturing prices</a> page shows how core products are priced at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a chiffon order runs',
  processLead: 'Six steps from your brief to shipped chiffon clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, fabric, print and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send chiffon swatches, with lining options to match.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check drape, coverage and hems, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then folding with tissue and packing.' },
  ],
  quality: {
    heading: 'Chiffon quality checks',
    lead: 'Every chiffon clothing order passes these checks before it ships.',
    items: [
      { label: 'Fabric', text: 'shade, print and snags checked on arrival' },
      { label: 'Seams', text: 'checked for slippage and puckering' },
      { label: 'Hems', text: 'even width with no waves' },
      { label: 'Coverage', text: 'lining length and opacity as approved' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a chiffon clothing quote',
    lead: 'This is enough to quote and plan a first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Polyester or silk chiffon, and any lining',
      'Print artwork or colour references',
      'Size range and quantity per style',
      'How sheer the finished piece should be',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Related fabrics and products',
    paragraphs: [
      'For a heavier fluid drape, see our <a href="/viscose-clothing-manufacturer/">viscose clothing manufacturer</a> page. For real silk, see our <a href="/silk-clothing-manufacturer/">silk clothing manufacturer</a> page.',
      'Modest brands often pair chiffon with jersey, as our <a href="/modest-fashion-manufacturer/">modest fashion manufacturer</a> page explains.',
    ],
  },
  faqHeading: 'Chiffon clothing questions',
};
