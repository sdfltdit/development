import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const ribKnit: ProductContent = {
  slug: 'rib-knit-clothing-manufacturer',
  garment: 'ribknit',
  quoteCta: 'Get a rib knit clothing quote',
  audience: 'Womenswear, loungewear and basics brands making fitted knit pieces',
  glanceHeading: 'Rib knit clothing manufacturing at a glance',
  glanceLead: 'Rib fits close and stretches a lot, so weight, recovery and grading decide the result. These are the points to confirm first.',
  stylesHeading: 'What we make as a rib knit clothing manufacturer',
  stylesLead: 'Rib suits fitted shapes and matching sets. These are the pieces brands order most.',
  styles: [
    { title: 'Fitted tops and tanks', text: 'Crew, scoop and square-neck tops in fine rib.' },
    { title: 'Bodysuits', text: 'Snap-crotch bodysuits in stretch rib.', href: '/bodysuit-manufacturer/', cta: 'Bodysuit manufacturer details' },
    { title: 'Ribbed dresses', text: 'Midi and maxi dresses that follow the body.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Ribbed co-ord sets', text: 'Tops with shorts or pants from one lot.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Cardigans and layers', text: 'Light cardigans and wrap tops in wide rib.' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'rib knit clothing', 'Rib is a knit. At the minimum we cut from ready rib fabric. Rib knitted to your own yarn and gauge starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('rib knit clothing', [['1x1 rib', '180–240 GSM', 'Fitted tops, tanks, trims'], ['2x2 rib', '200–280 GSM', 'Dresses, lounge sets'], ['Stretch rib', '200–260 GSM', 'Bodysuits, fitted sets'], ['Wide or waffle rib', '220–300 GSM', 'Cardigans, lounge pants']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Rib',
      heading: '1x1 rib, 2x2 rib and how we sew them',
      lead: 'Rib stretches far more across the width than along it. These are the details we set.',
      items: [
        { label: 'Grading', text: 'sizes graded for stretch so fitted styles stay true' },
        { label: 'Cutting', text: 'cut on grain so the ribs run straight' },
        { label: 'Seams', text: 'overlock and cover stitch with stretch thread' },
        { label: 'Necklines', text: 'binding tension set so edges lie flat' },
        { label: 'Recovery', text: 'checked on the sample against the mill data' },
        { label: 'Matching', text: 'rib lines matched at side seams on fitted styles' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Rib knit clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about rib knit clothing.',
      items: [
        { label: 'Ribs run crooked', text: 'cutting on grain and checking the marker' },
        { label: 'Garment grows when worn', text: 'elastane blend and recovery checked' },
        { label: 'See-through light colours', text: 'opacity tested on the sample' },
        { label: 'Set pieces do not match', text: 'top and bottom cut from one fabric lot' },
        { label: 'Wavy hems', text: 'hem tension set on the sample' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How rib knit clothing is priced',
    paragraphs: [
      'Fibre, weight and elastane move the fabric price. Sets cost more than single pieces because two garments share one lot.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a rib order runs',
  processLead: 'Six steps from your brief to shipped rib knit clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, rib type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send rib swatches by gauge, fibre and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check fit and stretch, and we correct the grading.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Rib knit clothing quality checks',
    lead: 'As a rib knit clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and rib lines checked on arrival' },
      { label: 'Stretch', text: 'recovery checked on the sample' },
      { label: 'Seams', text: 'stretch tested without cracking' },
      { label: 'Matching', text: 'rib lines matched on fitted styles' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a rib knit clothing quote',
    lead: 'This is enough for a rib knit clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Rib type and weight, or the feel you want',
      'Colours and any trims to match',
      'Size range and quantity per style',
      'Whether pieces sell as a set',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Rib and related knits',
    paragraphs: [
      'For textured lounge pieces, see our <a href="/waffle-knit-clothing-manufacturer/">waffle knit clothing manufacturer</a> page. For flat everyday tops, see our <a href="/jersey-knit-clothing-manufacturer/">jersey knit clothing manufacturer</a> page.',
      'Our <a href="/bodysuit-manufacturer/">bodysuit manufacturer</a> page covers fitted rib bodysuits in detail.',
    ],
  },
  faqHeading: 'Rib knit clothing questions',
};
