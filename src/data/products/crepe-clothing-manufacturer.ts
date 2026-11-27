import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const crepe: ProductContent = {
  slug: 'crepe-clothing-manufacturer',
  garment: 'crepe',
  quoteCta: 'Get a crepe clothing quote',
  audience: 'Womenswear, workwear, occasion and modest brands that want drape with body',
  glanceHeading: 'Crepe clothing manufacturing at a glance',
  glanceLead: 'Crepe comes in many weights and fibres, and some shrink. These are the points a crepe clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a crepe clothing manufacturer',
  stylesLead: 'Crepe suits clean, draping shapes for work and occasion. These are the pieces brands order most.',
  styles: [
    { title: 'Crepe dresses', text: 'Shift, wrap and midi dresses.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Blouses', text: 'Shell tops and soft blouses in crepe de chine.' },
    { title: 'Wide-leg trousers', text: 'Pleated and pull-on trousers.', href: '/pants-trousers-manufacturer/', cta: 'Pants manufacturer details' },
    { title: 'Jumpsuits', text: 'Belted and wide-leg jumpsuits.', href: '/jumpsuit-romper-manufacturer/', cta: 'Jumpsuit manufacturer details' },
    { title: 'Soft suits', text: 'Unlined blazers with matching trousers.', href: '/suit-manufacturer/', cta: 'Suit manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'crepe clothing', 'Crepe is a woven fabric. At the minimum we cut from ready crepe. Crepe woven to your own weight and blend starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('crepe clothing', [['Crepe de chine', '70–110 GSM', 'Blouses, slip dresses'], ['Viscose crepe', '130–180 GSM', 'Dresses, trousers'], ['Polyester crepe', '150–220 GSM', 'Dresses, workwear'], ['Moss or stretch crepe', '180–260 GSM', 'Suits, abayas, jumpsuits']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Crepe fabric',
      heading: 'Crepe de chine to moss crepe: how we sew them',
      lead: 'Crepe frays, shrinks and can grow on the bias. These are the details we set.',
      items: [
        { label: 'Wash test', text: 'viscose crepe tested and the pattern adjusted' },
        { label: 'Cutting', text: 'cut on paper so the weave does not shift' },
        { label: 'Seams', text: 'overlocked or bound so edges do not fray' },
        { label: 'Zips', text: 'invisible zips with stay tape' },
        { label: 'Hanging', text: 'bias-cut pieces hung before hemming' },
        { label: 'Pressing', text: 'low heat so the texture does not flatten' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Crepe clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about crepe clothing.',
      items: [
        { label: 'Shrinks after washing', text: 'wash test on every lot' },
        { label: 'Hems drop on bias cuts', text: 'pieces hung before hemming' },
        { label: 'Edges fray', text: 'seams finished on every edge' },
        { label: 'Zips ripple', text: 'stay tape and stitch tension set on the sample' },
        { label: 'Texture flattens', text: 'low-heat pressing' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How crepe clothing is priced',
    paragraphs: [
      'Fibre and weight move the fabric price, and linings and zips add sewing time. A lined crepe suit costs far more than a simple blouse.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a crepe order runs',
  processLead: 'Six steps from your brief to shipped crepe clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, crepe type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send crepe swatches by fibre and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check drape and fit, and we correct the pattern.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Crepe clothing quality checks',
    lead: 'As a crepe clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and texture checked on arrival' },
      { label: 'Shrinkage', text: 'wash test on viscose lots' },
      { label: 'Seams', text: 'finished and flat' },
      { label: 'Zips', text: 'smooth with no ripple' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a crepe clothing quote',
    lead: 'This is enough for a crepe clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Crepe type and weight',
      'Colours and any lining',
      'Size range and quantity per style',
      'Zips and closures',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Crepe and related fabrics',
    paragraphs: [
      'For a lighter, sheerer drape, see our <a href="/georgette-clothing-manufacturer/">georgette clothing manufacturer</a> page. For viscose crepe in detail, see our <a href="/viscose-clothing-manufacturer/">viscose clothing manufacturer</a> page.',
      'Our <a href="/suit-manufacturer/">suit manufacturer</a> page covers tailored crepe suits.',
    ],
  },
  faqHeading: 'Crepe clothing questions',
};
