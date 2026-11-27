import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const chambray: ProductContent = {
  slug: 'chambray-clothing-manufacturer',
  garment: 'chambray',
  quoteCta: 'Get a chambray clothing quote',
  audience: 'Menswear, womenswear, workwear and kidswear brands that want a light denim look',
  glanceHeading: 'Chambray clothing manufacturing at a glance',
  glanceLead: 'Chambray looks like denim but sews like a shirting. These are the points a chambray clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a chambray clothing manufacturer',
  stylesLead: 'Custom chambray clothing covers shirts, dresses and work pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Chambray shirts', text: 'Button-down, work and western shirts.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Chambray dresses', text: 'Shirt dresses, tiered dresses and pinafores.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Overshirts', text: 'Heavier chambray worn as a light jacket.' },
    { title: 'Aprons and workwear', text: 'Hard-wearing pieces for cafes and studios.', href: '/apron-manufacturer/', cta: 'Apron manufacturer details' },
    { title: 'Kidswear', text: 'Shirts, dresses and dungarees.' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'chambray clothing', 'Chambray is a woven fabric. At the minimum we cut from ready chambray. Chambray woven to your own colour and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('chambray clothing', [['Light chambray', '110–140 GSM', 'Shirts, dresses'], ['Mid chambray', '140–170 GSM', 'Work shirts, kidswear'], ['Heavy chambray', '170–220 GSM', 'Overshirts, aprons']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Chambray vs denim',
      heading: 'How we wash and sew chambray',
      lead: 'Chambray changes colour when washed, so washing and sewing are planned together.',
      items: [
        { label: 'Wash standard', text: 'colour and wash agreed on the sample' },
        { label: 'Shrinkage', text: 'garments washed, so the pattern allows for shrinkage' },
        { label: 'Seams', text: 'flat-felled seams on shirts so edges do not fray' },
        { label: 'Shading', text: 'panels cut from one roll to avoid colour differences' },
        { label: 'Trims', text: 'buttons and snaps chosen to survive washing' },
        { label: 'Pressing', text: 'collars and plackets pressed after the wash' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Chambray clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about chambray clothing.',
      items: [
        { label: 'Colour differs between panels', text: 'panels cut from one roll' },
        { label: 'Shrinks after washing', text: 'garment wash with pattern allowance' },
        { label: 'Colour runs', text: 'colour fastness on the mill report' },
        { label: 'Buttons crack in the wash', text: 'trims chosen for washing' },
        { label: 'Fades unevenly', text: 'wash standard set on the sample' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How chambray clothing is priced',
    paragraphs: [
      'Fabric weight and wash move the price most. A washed western shirt with snaps costs more than a plain rinse shirt.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a chambray order runs',
  processLead: 'Six steps from your brief to shipped chambray clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, chambray type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send chambray swatches by colour and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check the wash and fit, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Chambray clothing quality checks',
    lead: 'As a chambray clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'shade, weight and faults checked on arrival' },
      { label: 'Wash', text: 'matched to the approved standard' },
      { label: 'Seams', text: 'flat and secure' },
      { label: 'Trims', text: 'buttons and snaps checked after washing' },
      { label: 'Measurements', text: 'every point of measure after washing' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a chambray clothing quote',
    lead: 'This is enough for a chambray clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Chambray colour and weight',
      'Wash and finish',
      'Size range and quantity per style',
      'Buttons and labels',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Chambray and related fabrics',
    paragraphs: [
      'For a heavier twill, see our <a href="/denim-manufacturer/">denim manufacturer</a> page. For a warm brushed shirting, see our <a href="/flannel-clothing-manufacturer/">flannel clothing manufacturer</a> page.',
      'Our <a href="/washing-service/">garment washing service</a> page explains each wash.',
    ],
  },
  faqHeading: 'Chambray clothing questions',
};
