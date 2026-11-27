import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const taffeta: ProductContent = {
  slug: 'taffeta-clothing-manufacturer',
  garment: 'taffeta',
  quoteCta: 'Get a taffeta clothing quote',
  audience: 'Occasion, bridal, prom and party brands that want crisp volume',
  glanceHeading: 'Taffeta clothing manufacturing at a glance',
  glanceLead: 'Taffeta and organza hold volume, but they fray, crease and show every seam. These are the points to confirm first.',
  stylesHeading: 'What we make as a taffeta clothing manufacturer',
  stylesLead: 'Taffeta suits volume and statement shapes. These are the pieces brands order most.',
  styles: [
    { title: 'Taffeta dresses', text: 'Ball, prom and cocktail dresses.', href: '/evening-dress-manufacturer/', cta: 'Evening dress manufacturer details' },
    { title: 'Full skirts', text: 'Midi and ball skirts with petticoats.', href: '/skirts-manufacturer/', cta: 'Skirt manufacturer details' },
    { title: 'Puff-sleeve blouses', text: 'Statement tops with volume.' },
    { title: 'Organza overlays', text: 'Sleeves, capes and layers over satin.' },
    { title: 'Bridal layers', text: 'Overskirts and bridal pieces.', href: '/wedding-dress-manufacturer/', cta: 'Wedding dress manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'taffeta clothing', 'Taffeta and organza are woven fabrics. At the minimum we cut from ready taffeta or organza. Fabric woven to your own colour and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('taffeta clothing', [['Organza', '30–80 GSM', 'Overlays, sleeves, bridal layers'], ['Polyester taffeta', '70–130 GSM', 'Dresses, skirts, blouses'], ['Silk taffeta', '60–110 GSM', 'Premium occasion wear'], ['Heavy taffeta', '130–180 GSM', 'Structured skirts, bows']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Polyester taffeta',
      heading: 'How we sew polyester taffeta and organza',
      lead: 'Crisp fabrics fray and show needle holes. These are the details we set.',
      items: [
        { label: 'Seams', text: 'bound or French seams so edges do not fray' },
        { label: 'Needles', text: 'fine sharp needles so holes do not show' },
        { label: 'Hems', text: 'horsehair braid for volume or narrow rolled hems' },
        { label: 'Structure', text: 'boning and petticoats where shapes need support' },
        { label: 'Pressing', text: 'low heat with a cloth so the sheen stays even' },
        { label: 'Packing', text: 'hangers or tissue so pieces arrive smooth' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Taffeta clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about taffeta clothing.',
      items: [
        { label: 'Seams fray', text: 'bound or French seams' },
        { label: 'Needle holes show', text: 'fine needles and stitches right first time' },
        { label: 'Creases on arrival', text: 'packing on hangers or with tissue' },
        { label: 'Volume collapses', text: 'petticoats, boning and braid set on the sample' },
        { label: 'Shiny press marks', text: 'press cloth and low heat' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How taffeta clothing is priced',
    paragraphs: [
      'Fibre, structure and embellishment move the price most. A boned, beaded silk taffeta gown costs far more than a polyester skirt.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a taffeta order runs',
  processLead: 'Six steps from your brief to shipped taffeta clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, taffeta type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send taffeta and organza swatches by fibre and colour.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check volume and fit, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Taffeta clothing quality checks',
    lead: 'As a taffeta clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'shade, sheen and faults checked on arrival' },
      { label: 'Seams', text: 'enclosed with no fraying' },
      { label: 'Structure', text: 'boning and petticoats as approved' },
      { label: 'Surface', text: 'no press marks or needle holes' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a taffeta clothing quote',
    lead: 'This is enough for a taffeta clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Taffeta or organza, and fibre',
      'Colours and any embellishment',
      'Size range and quantity per style',
      'Structure such as boning or petticoats',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Taffeta and related fabrics',
    paragraphs: [
      'Still deciding on taffeta vs organza for a layer? For soft sheer layers, see our <a href="/chiffon-clothing-manufacturer/">chiffon clothing manufacturer</a> page. For rich pile, see our <a href="/velvet-clothing-manufacturer/">velvet clothing manufacturer</a> page.',
      'Our <a href="/wedding-dress-manufacturer/">wedding dress manufacturer</a> page covers bridal construction.',
    ],
  },
  faqHeading: 'Taffeta clothing questions',
};
