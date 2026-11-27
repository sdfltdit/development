import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const scuba: ProductContent = {
  slug: 'scuba-fabric-clothing-manufacturer',
  garment: 'scuba',
  quoteCta: 'Get a scuba fabric clothing quote',
  audience: 'Womenswear, occasion and fashion brands that want sculpted, structured knits',
  glanceHeading: 'Scuba fabric clothing manufacturing at a glance',
  glanceLead: 'Scuba holds shapes no other knit can, but it traps heat and shows every seam. These are the points to confirm first.',
  stylesHeading: 'What we make as a scuba fabric clothing manufacturer',
  stylesLead: 'Custom scuba clothing suits sculpted shapes and bold prints. These are the pieces brands order most.',
  styles: [
    { title: 'Scuba dresses', text: 'Bodycon and skater shapes that hold their line.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Midi skirts', text: 'Flared, pencil and scuba crepe skirts.', href: '/skirts-manufacturer/', cta: 'Skirt manufacturer details' },
    { title: 'Fitted tops', text: 'Crop and square-neck tops with clean edges.' },
    { title: 'Sweatshirts', text: 'Structured sweatshirts with a smooth face.' },
    { title: 'Printed pieces', text: 'All-over sublimated prints.', href: '/sublimated-clothing-manufacturer/', cta: 'Sublimated clothing manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'scuba fabric clothing', 'Scuba is a knit. At the minimum we cut from ready scuba. Scuba knitted to your own weight and stretch starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('scuba fabric clothing', [['Light scuba', '220–280 GSM', 'Tops, light dresses'], ['Mid scuba', '280–340 GSM', 'Dresses, skirts'], ['Heavy scuba', '340–400 GSM', 'Structured dresses, sweatshirts'], ['Scuba crepe', '250–320 GSM', 'Dresses, tops with softer drape']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Scuba crepe and smooth scuba',
      heading: 'How we sew scuba for clean lines',
      lead: 'Scuba is thick and springy, so seams and edges show. These are the details we set.',
      items: [
        { label: 'Seams', text: 'overlock with a straight stitch, pressed open where possible' },
        { label: 'Edges', text: 'clean raw edges, bound edges or coverstitch hems' },
        { label: 'Needles', text: 'ballpoint needles so the knit does not ladder' },
        { label: 'Zips', text: 'invisible zips with stay tape' },
        { label: 'Darts', text: 'shaped seams and darts for sculpted fits' },
        { label: 'Pressing', text: 'low heat, as polyester scuba can glaze' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Scuba fabric clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about scuba fabric clothing.',
      items: [
        { label: 'Seams show ridges', text: 'seam allowance trimmed and pressed open' },
        { label: 'Garment feels hot', text: 'weight chosen for the season and use' },
        { label: 'Prints look washed out', text: 'sublimation profile tested on the strike-off' },
        { label: 'Edges roll', text: 'edge finish agreed on the sample' },
        { label: 'Shiny pressing marks', text: 'low heat and a press cloth' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How scuba fabric clothing is priced',
    paragraphs: [
      'Weight and print move the price most. A printed, lined occasion dress costs more than a raw-edge top.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a scuba order runs',
  processLead: 'Six steps from your brief to shipped scuba fabric clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, scuba type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send scuba swatches by weight and texture.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check shape and edges, and we correct the pattern.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Scuba fabric clothing quality checks',
    lead: 'As a scuba fabric clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and face checked on arrival' },
      { label: 'Seams', text: 'flat with no ridges' },
      { label: 'Edges', text: 'clean and even' },
      { label: 'Prints', text: 'colour and placement checked' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a scuba fabric clothing quote',
    lead: 'This is enough for a scuba fabric clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Scuba or scuba crepe, and weight',
      'Colours or print artwork',
      'Size range and quantity per style',
      'Edge finish you want',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Scuba and related fabrics',
    paragraphs: [
      'For a softer double knit, see our <a href="/ponte-clothing-manufacturer/">ponte clothing manufacturer</a> page. For all-over prints, see our <a href="/sublimated-clothing-manufacturer/">sublimated clothing manufacturer</a> page.',
      'Our <a href="/polyester-clothing-manufacturer/">polyester clothing manufacturer</a> page explains the fibre behind most scuba.',
    ],
  },
  faqHeading: 'Scuba fabric clothing questions',
};
