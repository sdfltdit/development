import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const flannel: ProductContent = {
  slug: 'flannel-clothing-manufacturer',
  garment: 'flannel',
  quoteCta: 'Get a flannel clothing quote',
  audience: 'Menswear, workwear, sleepwear and kidswear brands making warm cotton pieces',
  glanceHeading: 'Flannel clothing manufacturing at a glance',
  glanceLead: 'Flannel weight, brushing and check matching decide how a flannel shirt looks and wears. These are the points to confirm first.',
  stylesHeading: 'What we make as a flannel clothing manufacturer',
  stylesLead: 'Custom flannel clothing covers shirts, layers and sleepwear. These are the pieces brands order most.',
  styles: [
    { title: 'Flannel shirts', text: 'Classic check shirts with matched pockets.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Overshirts and shackets', text: 'Heavy flannel, lined or unlined.' },
    { title: 'Flannel pyjamas', text: 'Pyjama sets and lounge pants.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Kidswear', text: 'Shirts and sleepwear for children.', href: '/kids-baby-clothing-manufacturer/', cta: 'Kids clothing manufacturer details' },
    { title: 'Menswear layers', text: 'Workwear-style shirts and vests.', href: '/menswear-manufacturer/', cta: 'Menswear manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'flannel clothing', 'Flannel is a woven fabric. At the minimum we cut from ready flannel in stock checks and colours. Flannel woven to your own check starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('flannel clothing', [['Light flannel', '130–160 GSM', 'Pyjamas, kidswear'], ['Shirt flannel', '150–200 GSM', 'Flannel shirts'], ['Heavy flannel', '200–280 GSM', 'Overshirts, shackets']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Brushed flannel',
      heading: 'How we cut brushed flannel and match checks',
      lead: 'Check flannel takes care at the cutting table. These are the details we set.',
      items: [
        { label: 'Check matching', text: 'fronts, pockets and yokes matched by eye and marker' },
        { label: 'Cutting', text: 'single-ply cutting on checks that must line up' },
        { label: 'Brushing', text: 'pile direction kept the same on every panel' },
        { label: 'Shrinkage', text: 'wash test on every lot' },
        { label: 'Seams', text: 'flat-felled side seams on shirts' },
        { label: 'Pilling', text: 'grade taken from the mill report' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Flannel clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about flannel clothing.',
      items: [
        { label: 'Checks do not line up', text: 'matching at the marker and on the sample' },
        { label: 'Shrinks after washing', text: 'wash test and pattern allowance' },
        { label: 'Surface pills', text: 'brushing and yarn quality checked' },
        { label: 'Panels look different shades', text: 'pile direction kept the same' },
        { label: 'Lining twists', text: 'lining cut and attached on grain' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How flannel clothing is priced',
    paragraphs: [
      'Fabric weight, check matching and linings move the price most. A lined, check-matched shacket costs more than a plain pyjama pant.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a flannel order runs',
  processLead: 'Six steps from your brief to shipped flannel clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, flannel type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send flannel swatches by check, weight and brushing.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check the fit and check matching, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Flannel clothing quality checks',
    lead: 'As a flannel clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and brushing checked on arrival' },
      { label: 'Check matching', text: 'checked at every key seam' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Seams', text: 'flat and secure' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a flannel clothing quote',
    lead: 'This is enough for a flannel clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Flannel weight and check',
      'Colours and any lining',
      'Size range and quantity per style',
      'Check matching needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Flannel and related fabrics',
    paragraphs: [
      'For a lighter denim-look shirting, see our <a href="/chambray-clothing-manufacturer/">chambray clothing manufacturer</a> page. For wool flannel, see our <a href="/wool-clothing-manufacturer/">wool clothing manufacturer</a> page.',
      'Our <a href="/shirt-manufacturer/">shirt manufacturer</a> page covers shirt prices and fits.',
    ],
  },
  faqHeading: 'Flannel clothing questions',
};
