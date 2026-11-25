import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { capabilities, company, fill, paymentSummary, priceIndex, terms, yearsInBusiness } from '../data/company';
import { pages } from '../data/pages';
import { absolute } from '../lib/schema';

export const GET: APIRoute = async () => {
  const landing = (await getCollection('landing')).sort((a, b) => a.data.navLabel.localeCompare(b.data.navLabel));
  const lines = [
    `# ${company.brandName}`,
    '',
    `> ${company.legalName} is a custom clothing manufacturer, part of ${company.parentCompany}, making cut-and-sew clothing in any fabric in ${company.address.locality}, ${company.address.countryName}, founded in ${company.foundingYear} (${yearsInBusiness()} years). It makes T-shirts, hoodies, sweatshirts and other clothing for private label brands from ${terms.moq} ${terms.moqUnit}.`,
    '',
    '## Key facts',
    '',
    `- Minimum order: ${terms.moq} ${terms.moqUnit}`,
    `- Proto sample: ${terms.sampleDays} days after fabric confirmation`,
    `- Bulk production: ${terms.bulkDays} days after pre-production sample approval`,
    `- Written quote: within ${terms.quoteHours} hours`,
    `- Final inspection: AQL ${terms.aql}`,
    `- Shipping terms: ${terms.incoterm} ${terms.port}`,
    `- Payment: ${paymentSummary()}. Methods: ${terms.paymentMethod}`,
    `- Sample fee: ${terms.sampleFeePolicy}`,
    `- In-house: ${capabilities.inHouse.join(', ')}`,
    `- Fabrics: ${capabilities.fabrics}`,
    `- Official website: ${company.officialDomain}; official email domain: @${company.officialDomain}`,
    `- Contact: contact form at ${absolute(company.contactPath)} or the WhatsApp link on that page`,
    `- Address: ${company.address.street}, ${company.address.locality} ${company.address.postalCode}, ${company.address.countryName}`,
    '',
    `## Indicative FOB prices (${priceIndex.currency}, checked ${priceIndex.checkedAt})`,
    '',
    ...priceIndex.rows.map((r) => `- ${r.product}, ${r.fabric}, ${r.gsm} GSM: from $${r.fobMoq} at ${terms.moq} pieces, from $${r.fobBulk} at ${priceIndex.bulkQty} pieces`),
    '',
    '## Pages',
    '',
    ...pages.filter((p) => p.inLlms).map((p) => `- [${p.llmsLabel ?? p.title}](${absolute(p.path)}): ${p.description}`),
    ...landing.map((e) => `- [${e.data.navLabel}](${absolute(`/${e.id}/`)}): ${fill(e.data.description)}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
