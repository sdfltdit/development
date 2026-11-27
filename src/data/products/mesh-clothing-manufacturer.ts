import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const mesh: ProductContent = {
  slug: 'mesh-clothing-manufacturer',
  garment: 'meshfabric',
  quoteCta: 'Get a mesh clothing quote',
  audience: 'Teamwear, activewear and fashion brands that need breathable or sheer knits',
  glanceHeading: 'Mesh clothing manufacturing at a glance',
  glanceLead: 'Mesh ranges from open sports mesh to fine sheer layers. Hole size, fibre and stretch decide the result, so we confirm them first.',
  stylesHeading: 'What we make as a mesh clothing manufacturer',
  stylesLead: 'Custom mesh clothing covers sport, training and fashion. These are the pieces brands order most.',
  styles: [
    { title: 'Team jerseys', text: 'Basketball, football and esports tops.', href: '/basketball-uniform-manufacturer/', cta: 'Basketball uniform manufacturer details' },
    { title: 'Mesh shorts', text: 'Training and basketball shorts, single or double layer.', href: '/shorts-manufacturer/', cta: 'Shorts manufacturer details' },
    { title: 'Power mesh panels', text: 'Panels and linings in activewear and shapewear.' },
    { title: 'Training tops', text: 'Light vests and tees for hot sessions.', href: '/activewear-manufacturer/', cta: 'Activewear manufacturer details' },
    { title: 'Fashion mesh tops', text: 'Sheer layering tops and sleeves.' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'mesh clothing', 'Mesh is a knit. At the minimum we cut from ready mesh. Mesh knitted to your own hole size and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('mesh clothing', [['Fine fashion mesh', '60–100 GSM', 'Sheer tops, overlays'], ['Athletic mesh', '100–160 GSM', 'Jerseys, shorts, vents'], ['Power mesh', '150–220 GSM', 'Panels, linings, shapewear'], ['Heavy sports mesh', '160–220 GSM', 'Double-layer shorts, pinnies']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Athletic and power mesh',
      heading: 'How we sew athletic mesh and power mesh',
      lead: 'Mesh can ladder, stretch and show every seam. These are the details we set.',
      items: [
        { label: 'Needles', text: 'ballpoint needles so the knit does not ladder' },
        { label: 'Seams', text: 'flatlock or cover stitch for comfort against the skin' },
        { label: 'Edges', text: 'bound or turned edges so holes do not fray' },
        { label: 'Layers', text: 'double layers or linings where coverage matters' },
        { label: 'Printing', text: 'sublimation profile tested on polyester mesh' },
        { label: 'Panels', text: 'power mesh set with matching stretch to the main fabric' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Mesh clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about mesh clothing.',
      items: [
        { label: 'Seams ladder or split', text: 'ballpoint needles and stretch thread' },
        { label: 'Too see-through', text: 'layering agreed on the sample' },
        { label: 'Prints look patchy', text: 'print method matched to the fibre' },
        { label: 'Edges fray', text: 'bound or turned edges' },
        { label: 'Shorts sag', text: 'waistband elastic and drawcord tested' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How mesh clothing is priced',
    paragraphs: [
      'Mesh type, layers and decoration move the price most. Double-layer reversible shorts cost more than single-layer pinnies.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a mesh order runs',
  processLead: 'Six steps from your brief to shipped mesh clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, mesh type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send mesh swatches by hole size, fibre and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You wear-test the sample, then we correct fit and finish.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Mesh clothing quality checks',
    lead: 'As a mesh clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and holes checked on arrival' },
      { label: 'Seams', text: 'stretch tested without laddering' },
      { label: 'Edges', text: 'even and secure' },
      { label: 'Prints', text: 'colour and placement checked' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a mesh clothing quote',
    lead: 'This is enough for a mesh clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Mesh type and weight',
      'Team colours, names and numbers',
      'Size range and quantity per style',
      'Single or double layer',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Mesh and related fabrics',
    paragraphs: [
      'For stretch fabric with more coverage, see our <a href="/spandex-clothing-manufacturer/">spandex clothing manufacturer</a> page. For printed kits, see our <a href="/sublimated-clothing-manufacturer/">sublimated clothing manufacturer</a> page.',
      'Our <a href="/basketball-uniform-manufacturer/">basketball uniform manufacturer</a> page covers mesh jerseys and shorts in detail.',
    ],
  },
  faqHeading: 'Mesh clothing questions',
};
