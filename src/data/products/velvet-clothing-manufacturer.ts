import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const velvet: ProductContent = {
  slug: 'velvet-clothing-manufacturer',
  garment: 'velvet',
  quoteCta: 'Get a velvet clothing quote',
  audience: 'Occasion, party, womenswear and menswear brands that want rich pile fabric',
  glanceHeading: 'Velvet clothing manufacturing at a glance',
  glanceLead: 'Velvet shows every press mark and shade change. These are the points a velvet clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a velvet clothing manufacturer',
  stylesLead: 'Velvet suits party, holiday and statement pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Velvet dresses', text: 'Slip, wrap and fitted dresses.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Velvet blazers', text: 'Tailored and cropped blazers.', href: '/blazer-manufacturer/', cta: 'Blazer manufacturer details' },
    { title: 'Stretch velvet tops', text: 'Bodysuits, crop tops and long sleeves.' },
    { title: 'Trousers and skirts', text: 'Wide-leg trousers and slip skirts.' },
    { title: 'Crushed velvet accessories', text: 'Scrunchies, headbands and bags.', href: '/hair-accessories-manufacturer/', cta: 'Hair accessories manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['knit', 'woven'], 'velvet clothing', 'Velvet comes knitted or woven, with the same minimums for both. At the minimum we cut from ready velvet. Velvet made to your own pile and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('velvet clothing', [['Stretch velvet', '200–300 GSM', 'Dresses, tops, bodysuits'], ['Crushed velvet', '200–280 GSM', 'Dresses, accessories'], ['Woven velvet', '250–400 GSM', 'Blazers, trousers']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Stretch and crushed velvet',
      heading: 'How we handle stretch velvet and crushed velvet',
      lead: 'Velvet pile marks easily and creeps under the needle. These are the details we set.',
      items: [
        { label: 'Pile direction', text: 'every panel cut the same way' },
        { label: 'Cutting', text: 'single-ply on woven velvet so the pile does not shift' },
        { label: 'Sewing', text: 'walking foot so layers do not creep' },
        { label: 'Pressing', text: 'steam from the back on a needle board, never flat' },
        { label: 'Seams', text: 'pressed open with care so no ridges show' },
        { label: 'Packing', text: 'folded with tissue so the pile does not crush' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Velvet clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about velvet clothing.',
      items: [
        { label: 'Panels look different shades', text: 'one pile direction for every panel' },
        { label: 'Press marks and shine', text: 'needle board and back steaming' },
        { label: 'Seams creep and pucker', text: 'walking foot and light tension' },
        { label: 'Pile crushed in transit', text: 'tissue and careful folding' },
        { label: 'Stretch velvet bags out', text: 'recovery checked on the sample' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How velvet clothing is priced',
    paragraphs: [
      'Fibre, weight and tailoring move the price most. A lined woven velvet blazer costs far more than a stretch velvet top.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a velvet order runs',
  processLead: 'Six steps from your brief to shipped velvet clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, velvet type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send velvet swatches by type and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check shade, drape and fit, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Velvet clothing quality checks',
    lead: 'As a velvet clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'pile, shade and faults checked on arrival' },
      { label: 'Pile direction', text: 'checked on every panel' },
      { label: 'Seams', text: 'flat with no creep' },
      { label: 'Surface', text: 'no press marks or shine' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a velvet clothing quote',
    lead: 'This is enough for a velvet clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Stretch, crushed or woven velvet',
      'Colours and any lining',
      'Size range and quantity per style',
      'Packing needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Velvet and related fabrics',
    paragraphs: [
      'For a softer knitted pile for tracksuits, see our <a href="/velour-clothing-manufacturer/">velour clothing manufacturer</a> page. For crisp occasion fabric, see our <a href="/taffeta-clothing-manufacturer/">taffeta clothing manufacturer</a> page.',
      'Our <a href="/evening-dress-manufacturer/">evening dress manufacturer</a> page covers occasion wear in detail.',
    ],
  },
  faqHeading: 'Velvet clothing questions',
};
