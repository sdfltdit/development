import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const ponte: ProductContent = {
  slug: 'ponte-clothing-manufacturer',
  garment: 'ponte',
  quoteCta: 'Get a ponte clothing quote',
  audience: 'Womenswear, workwear and travel brands that want stretch with structure',
  glanceHeading: 'Ponte clothing manufacturing at a glance',
  glanceLead: 'Ponte sits between jersey and woven fabric. Its blend, weight and pilling grade decide how it wears, so we confirm them first.',
  stylesHeading: 'What we make as a ponte clothing manufacturer',
  stylesLead: 'Ponte suits clean, structured shapes that still stretch. These are the pieces brands order most.',
  styles: [
    { title: 'Ponte trousers', text: 'Pull-on slim, straight and wide-leg fits with faced waists.', href: '/pants-trousers-manufacturer/', cta: 'Pants manufacturer details' },
    { title: 'Sheath and shift dresses', text: 'Clean shapes for work and travel.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Pencil and A-line skirts', text: 'Lined or unlined, with invisible zips.', href: '/skirts-manufacturer/', cta: 'Skirt manufacturer details' },
    { title: 'Soft blazers', text: 'Unstructured blazers that pack well.', href: '/blazer-manufacturer/', cta: 'Blazer manufacturer details' },
    { title: 'Leggings', text: 'Thick, opaque leggings for everyday wear.' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'ponte clothing', 'Ponte is a knit. At the minimum we cut from ready ponte. Ponte knitted to your own blend and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('ponte clothing', [['Light ponte', '250–290 GSM', 'Tops, dresses'], ['Mid ponte', '290–330 GSM', 'Trousers, skirts, dresses'], ['Heavy ponte', '330–380 GSM', 'Blazers, structured trousers']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Double knit',
      heading: 'How we sew ponte roma for a clean finish',
      lead: 'Ponte is stable but still stretches. These are the details we set for a neat, tailored look.',
      items: [
        { label: 'Patterns', text: 'ease set for a knit, so trousers skim rather than cling' },
        { label: 'Seams', text: 'overlock with a straight stitch on visible seams' },
        { label: 'Hems', text: 'coverstitch or blind hems that lie flat' },
        { label: 'Zips', text: 'invisible zips with stay tape so seams do not ripple' },
        { label: 'Waistbands', text: 'faced or elastic waists that keep their shape' },
        { label: 'Pressing', text: 'low heat with a cloth, so the face does not shine' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Ponte clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about ponte clothing.',
      items: [
        { label: 'Knees bag out', text: 'blend and recovery chosen for trousers' },
        { label: 'Surface pills', text: 'tight knit and pilling grade from the mill report' },
        { label: 'Zips ripple', text: 'stay tape and stitch tension set on the sample' },
        { label: 'Shiny pressing marks', text: 'low heat and a press cloth' },
        { label: 'Shrinks after washing', text: 'wash test on every lot' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How ponte clothing is priced',
    paragraphs: [
      'Blend and weight move the fabric price, while zips, linings and facings move the sewing cost. A lined skirt costs more than pull-on leggings.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a ponte order runs',
  processLead: 'Six steps from your brief to shipped ponte clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, ponte type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send ponte swatches by blend and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check fit and drape, and we correct the pattern.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Ponte clothing quality checks',
    lead: 'As a ponte clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and face checked on arrival' },
      { label: 'Recovery', text: 'stretch and recovery checked on the sample' },
      { label: 'Seams', text: 'flat and straight on visible lines' },
      { label: 'Zips', text: 'smooth with no ripple' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a ponte clothing quote',
    lead: 'This is enough for a ponte clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Ponte blend and weight, or the feel you want',
      'Colours and any linings',
      'Size range and quantity per style',
      'Zips, waistbands and other trims',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Ponte and related fabrics',
    paragraphs: [
      'For a thicker, smoother knit with more body, see our <a href="/scuba-fabric-clothing-manufacturer/">scuba fabric clothing manufacturer</a> page. For fluid woven dresses, see our <a href="/viscose-clothing-manufacturer/">viscose clothing manufacturer</a> page.',
      'Our <a href="/pants-trousers-manufacturer/">pants manufacturer</a> page covers trouser fits and prices.',
    ],
  },
  faqHeading: 'Ponte clothing questions',
};
