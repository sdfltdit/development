import type { ProductContent } from './types';
import { fabricMoqBlock } from './fabric-moq';

export const fleece: ProductContent = {
  slug: 'fleece-clothing-manufacturer',
  garment: 'fleecefabric',
  quoteCta: 'Get a fleece clothing quote',
  audience: 'Streetwear, sportswear, outdoor and kidswear brands making warm knit garments',
  glanceHeading: 'Fleece clothing manufacturing at a glance',
  glanceLead: 'Fleece weight, fibre and finish decide warmth, print quality and pilling. These are the points to confirm first.',
  stylesHeading: 'What we make as a fleece clothing manufacturer',
  stylesLead: 'Fleece covers everyday sweats and warm outer layers. These are the pieces brands order most.',
  styles: [
    { title: 'Hoodies and sweatshirts', text: 'Pullover, zip-through and crewneck styles in cotton fleece.', href: '/hoodie-manufacturer/', cta: 'Hoodie manufacturer details' },
    { title: 'Joggers and shorts', text: 'Cuffed joggers, open-hem sweatpants and sweat shorts.', href: '/joggers-manufacturer/', cta: 'Joggers manufacturer details' },
    { title: 'Fleece jackets and vests', text: 'Polar fleece, microfleece and sherpa layers.', href: '/fleece-jacket-manufacturer/', cta: 'Fleece jacket manufacturer details' },
    { title: 'Tracksuits', text: 'Matching tops and bottoms cut from one fabric lot.', href: '/tracksuit-manufacturer/', cta: 'Tracksuit manufacturer details' },
    { title: 'Kidswear', text: 'Soft sweats and zip tops for children.', href: '/kids-baby-clothing-manufacturer/', cta: 'Kids clothing manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(
      ['knit'],
      'fleece clothing',
      'Fleece is a knit, so the knit colour minimum applies. At the minimum we cut from ready fleece. Fleece knitted to your own weight and yarn starts at {{customFabricFrom}} pieces per style.',
    ),
    {
      kind: 'table',
      id: 'fabrics',
      eyebrow: 'Fleece types',
      heading: 'Cotton fleece, polar fleece fabric and more',
      lead: 'Fleece is made from different fibres and finished in different ways. This is how the main types compare.',
      caption: 'Fleece fabrics compared',
      columns: ['Fabric', 'How it feels', 'Good for'],
      rows: [
        ['Cotton fleece', 'Soft brushed back, breathable', 'Hoodies, sweatshirts, joggers'],
        ['Cotton-polyester fleece', 'Holds shape, shrinks less', 'Teamwear, merch, kidswear'],
        ['Polar fleece fabric', 'Brushed both sides, light and warm', 'Jackets, vests, blankets'],
        ['Microfleece', 'Thin, very soft, packs small', 'Mid-layers, linings'],
        ['Sherpa', 'Deep pile like wool', 'Jacket linings and collars'],
      ],
    },
    {
      kind: 'checklist',
      id: 'weight',
      eyebrow: 'Brushed fleece',
      heading: 'Brushed fleece and anti-pill fleece: what decides quality',
      lead: 'Two fleeces at the same weight can feel and wear very differently. These are the points we check.',
      items: [
        { label: 'Weight', text: 'GSM checked on every roll against the approved swatch' },
        { label: 'Yarn', text: 'combed or ring-spun cotton gives a smoother face for print' },
        { label: 'Brushing', text: 'an even pile with no bare patches' },
        { label: 'Pilling', text: 'anti-pill finish on polyester fleece, graded in the mill report' },
        { label: 'Shrinkage', text: 'wash-tested before cutting, with allowance in the pattern' },
        { label: 'Ribs', text: 'cuffs and waistbands matched in colour and stretch' },
      ],
    },
  ],
  noPrice: {
    heading: 'How fleece clothing is priced',
    paragraphs: [
      'Fabric weight and fibre move the price most, followed by zips, prints and embroidery. Our hoodie, sweatshirt and joggers prices are listed on the product pages.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a fleece order runs',
  processLead: 'Six steps from your brief to shipped fleece clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, weight, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send fleece swatches by weight and finish.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Wash test', text: 'The bulk fleece is wash-tested and the pattern adjusted.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Fleece quality checks',
    lead: 'As a fleece clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and pile on arrival' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Prints', text: 'stretch and wash checked on the strike-off' },
      { label: 'Seams', text: 'overlock and cover stitch checked' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a fleece clothing quote',
    lead: 'This is enough for a fleece clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Fleece type and weight',
      'Colours and print or embroidery artwork',
      'Size range and quantity per style',
      'Any anti-pill or fibre claims you plan to make',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Fleece or French terry',
    paragraphs: [
      'For a lighter sweat with an unbrushed loop back, see our <a href="/french-terry-clothing-manufacturer/">French terry clothing manufacturer</a> page. Our <a href="/insights/fabric-gsm-explained/">fabric GSM guide</a> explains how weight changes the feel.',
      'For outdoor layers, see our <a href="/fleece-jacket-manufacturer/">fleece jacket manufacturer</a> page.',
    ],
  },
  faqHeading: 'Fleece clothing questions',
};
