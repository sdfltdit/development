import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const jerseyKnit: ProductContent = {
  slug: 'jersey-knit-clothing-manufacturer',
  garment: 'jerseyknit',
  quoteCta: 'Get a jersey knit clothing quote',
  audience: 'Basics, streetwear, womenswear and kidswear brands that build ranges on jersey',
  glanceHeading: 'Jersey knit clothing manufacturing at a glance',
  glanceLead: 'Jersey is the most common knit in clothing, but weight, yarn and spirality vary a lot. These are the points to confirm first.',
  stylesHeading: 'What we make as a jersey knit clothing manufacturer',
  stylesLead: 'Custom jersey clothing covers everyday tops and soft dresses. These are the pieces brands order most.',
  styles: [
    { title: 'T-shirts and tank tops', text: 'Regular, slim, boxy and oversized fits.', href: '/t-shirt-manufacturer/', cta: 'T-shirt manufacturer details' },
    { title: 'Jersey dresses', text: 'T-shirt, wrap and midi dresses with soft drape.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Lounge sets', text: 'Tops, shorts and pants cut from one fabric lot.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Long sleeves and tops', text: 'Crew, scoop and wrap tops in cotton or stretch jersey.' },
    { title: 'Kidswear', text: 'Soft tees, rompers and sleepwear.', href: '/kids-baby-clothing-manufacturer/', cta: 'Kids clothing manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'jersey knit clothing', 'Jersey is a knit. At the minimum we cut from ready jersey fabric. Jersey knitted to your own yarn and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('jersey knit clothing', [['Light single jersey', '120–160 GSM', 'Fashion tees, layering tops'], ['Mid single jersey', '160–200 GSM', 'Everyday T-shirts'], ['Heavy single jersey', '200–260 GSM', 'Oversized and premium tees'], ['Slub jersey', '130–180 GSM', 'Casual tees and tops'], ['Stretch jersey', '180–240 GSM', 'Fitted tops, dresses']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Single jersey',
      heading: 'How we handle single jersey in production',
      lead: 'Single jersey curls, spirals and stretches. These are the details we set before cutting.',
      items: [
        { label: 'Relaxing', text: 'rolls rest open before cutting so the fabric does not shrink back' },
        { label: 'Spirality', text: 'measured on the wash test, with limits agreed on the swatch' },
        { label: 'Cutting', text: 'cut on grain in low plies to keep side seams straight' },
        { label: 'Necklines', text: 'rib or binding set so the neck does not stretch out' },
        { label: 'Seams', text: 'overlock and cover stitch with stretch thread' },
        { label: 'Shrinkage', text: 'wash-tested on every lot, with allowance in the pattern' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Jersey knit clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about jersey knit clothing.',
      items: [
        { label: 'Twisted side seams', text: 'fabric relaxed and spirality tested before cutting' },
        { label: 'Necklines that sag', text: 'rib tension and binding checked on the sample' },
        { label: 'Shrinks after washing', text: 'wash test on every lot' },
        { label: 'See-through light colours', text: 'weight agreed for opacity on the swatch' },
        { label: 'Prints crack', text: 'ink and cure tested on the strike-off' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How jersey knit clothing is priced',
    paragraphs: [
      'Fabric weight, yarn and decoration move the price most. Our T-shirt prices are listed on the T-shirt page, and a jersey dress costs more than a basic tee.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a jersey order runs',
  processLead: 'Six steps from your brief to shipped jersey knit clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, jersey type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send jersey swatches by yarn and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You wash and wear the sample, then we correct fit and neckline.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Jersey knit clothing quality checks',
    lead: 'As a jersey knit clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and faults checked on arrival' },
      { label: 'Spirality', text: 'measured after washing' },
      { label: 'Necklines', text: 'stretch and recovery checked' },
      { label: 'Seams', text: 'stretch tested without cracking' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a jersey knit clothing quote',
    lead: 'This is enough for a jersey knit clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Yarn and weight, or the feel you want',
      'Colours and print or embroidery artwork',
      'Size range and quantity per style',
      'Neck label and packing needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Jersey and related knits',
    paragraphs: [
      'For tees with prices, see our <a href="/t-shirt-manufacturer/">T-shirt manufacturer</a> page. For stretchy fitted pieces, see our <a href="/rib-knit-clothing-manufacturer/">rib knit clothing manufacturer</a> page.',
      'For loungewear, see our <a href="/loungewear-manufacturer/">loungewear manufacturer</a> page.',
    ],
  },
  faqHeading: 'Jersey knit clothing questions',
};
