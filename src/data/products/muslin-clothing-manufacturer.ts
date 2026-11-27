import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const muslin: ProductContent = {
  slug: 'muslin-clothing-manufacturer',
  garment: 'muslin',
  quoteCta: 'Get a muslin clothing quote',
  audience: 'Babywear, sleepwear, resort and slow-fashion brands working in soft gauze',
  glanceHeading: 'Muslin clothing manufacturing at a glance',
  glanceLead: 'Muslin is soft and airy, but it frays and shrinks. These are the points a muslin clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a muslin clothing manufacturer',
  stylesLead: 'Custom muslin clothing suits babies, sleep and summer. These are the pieces brands order most.',
  styles: [
    { title: 'Muslin shirts', text: 'Relaxed shirts with a washed, crinkled finish.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Muslin baby clothes', text: 'Rompers, sleepsuits and swaddles.', href: '/kids-baby-clothing-manufacturer/', cta: 'Kids clothing manufacturer details' },
    { title: 'Pyjamas and lounge sets', text: 'Breathable sets for warm nights.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Dresses and cover-ups', text: 'Beach cover-ups and loose dresses.' },
    { title: 'Bibs and swaddles', text: 'Soft accessories for babies.', href: '/baby-bib-manufacturer/', cta: 'Baby bib manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'muslin clothing', 'Muslin is a woven fabric. At the minimum we cut from ready muslin or gauze. Gauze woven to your own count and layers starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('muslin clothing', [['Single muslin', '60–100 GSM', 'Swaddles, scarves'], ['Double gauze', '100–150 GSM', 'Shirts, babywear, sleepwear'], ['Triple gauze', '150–200 GSM', 'Blankets, heavier shirts']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Double gauze',
      heading: 'How we sew double gauze and single muslin',
      lead: 'Gauze is loosely woven, so it frays and shifts. These are the details we set.',
      items: [
        { label: 'Seams', text: 'French seams so raw edges are enclosed' },
        { label: 'Edges', text: 'bound edges on swaddles and bibs' },
        { label: 'Cutting', text: 'cut on paper so layers do not shift' },
        { label: 'Shrinkage', text: 'wash test and garment wash after sewing' },
        { label: 'Stitch', text: 'medium stitch so layers stay together' },
        { label: 'Finishing', text: 'tumble softened, not pressed flat' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Muslin clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about muslin clothing.',
      items: [
        { label: 'Seams fray open', text: 'French seams and bound edges' },
        { label: 'Shrinks at home', text: 'garment washed before packing' },
        { label: 'Layers separate', text: 'stitch length and tacking checked' },
        { label: 'Too sheer', text: 'double or triple gauze chosen for coverage' },
        { label: 'Snags and pulls', text: 'careful handling at every station' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How muslin clothing is priced',
    paragraphs: [
      'Gauze layers, washing and dyeing move the price most. Garment-dyed double gauze costs more than a plain single muslin swaddle.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a muslin order runs',
  processLead: 'Six steps from your brief to shipped muslin clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, muslin type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send muslin swatches by layers and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You wash and wear the sample, then we correct fit and finish.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Muslin clothing quality checks',
    lead: 'As a muslin clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'count, layers and faults checked on arrival' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Seams', text: 'enclosed and secure' },
      { label: 'Edges', text: 'even binding with no fraying' },
      { label: 'Measurements', text: 'every point of measure after washing' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a muslin clothing quote',
    lead: 'This is enough for a muslin clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Single muslin or double gauze',
      'Colours or garment dye',
      'Size range and quantity per style',
      'Any babywear testing your market needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Muslin and related fabrics',
    paragraphs: [
      'For light, smooth summer cotton, see our <a href="/voile-clothing-manufacturer/">voile clothing manufacturer</a> page. For organic gauze, see our <a href="/organic-cotton-clothing-manufacturer/">organic cotton clothing manufacturer</a> page.',
      'Our <a href="/dyeing-service/">garment dyeing service</a> page explains washed and dyed finishes.',
    ],
  },
  faqHeading: 'Muslin clothing questions',
};
