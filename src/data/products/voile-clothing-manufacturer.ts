import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const voile: ProductContent = {
  slug: 'voile-clothing-manufacturer',
  garment: 'voile',
  quoteCta: 'Get a voile clothing quote',
  audience: 'Summer, resort, modest and kidswear brands working in light cotton',
  glanceHeading: 'Voile clothing manufacturing at a glance',
  glanceLead: 'Voile and lawn are light and breathable, but sheer and quick to crease. These are the points to confirm first.',
  stylesHeading: 'What we make as a voile clothing manufacturer',
  stylesLead: 'Custom voile clothing suits hot weather and printed ranges. These are the pieces brands order most.',
  styles: [
    { title: 'Voile tops and blouses', text: 'Relaxed tops, peasant blouses and tunics.' },
    { title: 'Kurtas and lawn suits', text: 'Printed and embroidered kurtas and suits.', href: '/kurta-manufacturer/', cta: 'Kurta manufacturer details' },
    { title: 'Summer dresses', text: 'Tiered, smocked and shirt dresses.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Shirts', text: 'Light shirts for resort and menswear.' },
    { title: 'Kidswear', text: 'Soft dresses and tops for children.', href: '/kids-baby-clothing-manufacturer/', cta: 'Kids clothing manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'voile clothing', 'Voile and lawn are woven fabrics. At the minimum we cut from ready voile or lawn. Fabric woven to your own count and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('voile clothing', [['Cotton voile', '60–100 GSM', 'Tops, blouses, scarves'], ['Cotton lawn', '80–120 GSM', 'Kurtas, shirts, dresses'], ['Swiss dot voile', '70–110 GSM', 'Blouses, kidswear']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Cotton voile and lawn',
      heading: 'How we sew cotton voile and cotton lawn',
      lead: 'Light cotton shows every seam and frays easily. These are the details we set.',
      items: [
        { label: 'Seams', text: 'French seams so raw edges never show' },
        { label: 'Hems', text: 'narrow double-turned hems' },
        { label: 'Needles', text: 'fine needles and a short stitch to avoid puckering' },
        { label: 'Shrinkage', text: 'wash test on every lot' },
        { label: 'Linings', text: 'cotton lining or slip agreed for coverage' },
        { label: 'Embroidery', text: 'light backing behind dense work' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Voile clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about voile clothing.',
      items: [
        { label: 'Too see-through', text: 'lining or heavier lawn agreed on the sample' },
        { label: 'Seams pucker', text: 'fine needles and light tension' },
        { label: 'Shrinks after washing', text: 'wash test and pattern allowance' },
        { label: 'Creases badly', text: 'finish and care label agreed up front' },
        { label: 'Embroidery pulls', text: 'backing behind dense work' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How voile clothing is priced',
    paragraphs: [
      'Fabric count, print and embroidery move the price most. An embroidered three-piece lawn suit costs far more than a plain top.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a voile order runs',
  processLead: 'Six steps from your brief to shipped voile clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, voile type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send voile and lawn swatches by count and print.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check coverage and drape, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Voile clothing quality checks',
    lead: 'As a voile clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'count, shade and faults checked on arrival' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Seams', text: 'flat with no puckers' },
      { label: 'Embroidery', text: 'secure with no pulls' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a voile clothing quote',
    lead: 'This is enough for a voile clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Voile or lawn, and print',
      'Colours and embroidery artwork',
      'Size range and quantity per style',
      'Lining needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Voile and related fabrics',
    paragraphs: [
      'For soft gauze, see our <a href="/muslin-clothing-manufacturer/">muslin clothing manufacturer</a> page. For textured summer cotton, see our <a href="/seersucker-clothing-manufacturer/">seersucker clothing manufacturer</a> page.',
      'Our <a href="/salwar-kameez-manufacturer/">salwar kameez manufacturer</a> page covers lawn suits in detail.',
    ],
  },
  faqHeading: 'Voile clothing questions',
};
