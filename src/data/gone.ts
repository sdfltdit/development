/**
 * Old URLs that are permanently removed and answer 410 Gone, with the 404 page as the body.
 * Use this instead of a 301 when no page on the new site answers the same need, so search engines
 * drop the URL cleanly rather than treating a loose redirect as a soft 404.
 * Every path here must also match an entry in run_worker_first in wrangler.jsonc.
 */
export const gonePaths = [
  '/journal/',
  '/journal/annual-growth-2025/',
  '/journal/european-mill-partnership-2025/',
  '/journal/gots-7-recertification-2026/',
  '/journal/sourcing-summit-2025/',
  '/gots-vs-oeko-tex-vs-bsci-certification-comparison/',
  '/insights/gots-certification-explained/',
  '/insights/gots-label-guide/',
  '/oeko-tex-certification-guide/',
  '/clothing-manufacturer-cambodia/',
  '/clothing-manufacturer-egypt/',
  '/clothing-manufacturer-europe/',
  '/clothing-manufacturer-france/',
  '/clothing-manufacturer-germany/',
  '/clothing-manufacturer-greece/',
  '/clothing-manufacturer-hong-kong/',
  '/clothing-manufacturer-ireland/',
  '/clothing-manufacturer-israel/',
  '/clothing-manufacturer-italy/',
  '/clothing-manufacturer-malaysia/',
  '/clothing-manufacturer-mexico/',
  '/clothing-manufacturer-morocco/',
  '/clothing-manufacturer-netherlands/',
  '/clothing-manufacturer-new-zealand/',
  '/clothing-manufacturer-portugal/',
  '/clothing-manufacturer-russia/',
  '/clothing-manufacturer-saudi-arabia/',
  '/clothing-manufacturer-singapore/',
  '/clothing-manufacturer-south-africa/',
  '/clothing-manufacturer-sri-lanka/',
  '/clothing-manufacturer-switzerland/',
  '/clothing-manufacturer-taiwan/',
  '/clothing-manufacturer-turkey/',
  '/clothing-manufacturer-uae/',
] as const;
