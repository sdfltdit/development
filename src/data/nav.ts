export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  links?: NavLink[];
}

export const primaryNav: NavItem[] = [
  {
    label: 'Products',
    href: '/products/',
    links: [
      { label: 'Knit garments', href: '/products/#knit' },
      { label: 'Woven garments', href: '/products/#woven' },
      { label: 'Accessories and home textiles', href: '/products/#accessories' },
      { label: 'All products', href: '/products/' },
    ],
  },
  {
    label: 'Services',
    href: '/all-services/',
    links: [
      { label: 'Product development', href: '/all-services/#development' },
      { label: 'Material sourcing', href: '/all-services/#sourcing' },
      { label: 'Garment manufacturing', href: '/all-services/#manufacturing' },
      { label: 'Printing and embroidery', href: '/all-services/#decoration' },
      { label: 'Quality and compliance', href: '/all-services/#quality' },
      { label: 'Global supply chain', href: '/all-services/#supply-chain' },
      { label: 'All services', href: '/all-services/' },
    ],
  },
  { label: 'How it works', href: '/work-process/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: NavGroup[] = [
  {
    label: 'Products',
    href: '/products/',
    links: [
      { label: 'Knit garments', href: '/products/#knit' },
      { label: 'Woven garments', href: '/products/#woven' },
      { label: 'Accessories', href: '/products/#accessories' },
      { label: 'Private label', href: '/private-label-clothing-manufacturer/' },
      { label: 'Low MOQ', href: '/low-moq-clothing-manufacturers/' },
      { label: 'All products', href: '/products/' },
    ],
  },
  {
    label: 'Services',
    href: '/all-services/',
    links: [
      { label: 'Product development', href: '/garment-development-service/' },
      { label: 'Material sourcing', href: '/all-services/#sourcing' },
      { label: 'Garment manufacturing', href: '/cut-and-sew-service/' },
      { label: 'Printing and embroidery', href: '/all-services/#decoration' },
      { label: 'Quality and compliance', href: '/all-services/#quality' },
      { label: 'Global supply chain', href: '/garment-packing-and-export/' },
    ],
  },
  {
    label: 'Company',
    href: '/about/',
    links: [
      { label: 'About SDF Clothing', href: '/about/' },
      { label: 'How it works', href: '/work-process/' },
      { label: 'Factory visit', href: '/booking/' },
      { label: 'Compliance and audits', href: '/certifications/' },
      { label: 'Verify us', href: '/verify-us/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    label: 'Resources',
    href: '/insights/',
    links: [
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Clothing guides', href: '/insights/' },
      { label: 'Free tools', href: '/tools/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Bangladesh guide', href: '/clothing-manufacturer-bangladesh/' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms of use', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
  { label: 'Accessibility', href: '/accessibility/' },
  { label: 'Editorial policy', href: '/editorial-policy/' },
];

export const featuredProducts = [
  't-shirt-manufacturer',
  'hoodie-manufacturer',
  'joggers-manufacturer',
  'pants-trousers-manufacturer',
  'shorts-manufacturer',
  'shirt-manufacturer',
  'jacket-manufacturer',
  'activewear-manufacturer',
  'dress-manufacturer',
  'denim-manufacturer',
  'kids-baby-clothing-manufacturer',
  'uniform-manufacturer',
];
