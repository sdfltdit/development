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
      { label: 'T-shirts', href: '/t-shirt-manufacturer/' },
      { label: 'Hoodies', href: '/hoodie-manufacturer/' },
      { label: 'Private label', href: '/private-label-clothing-manufacturer/' },
      { label: 'Low MOQ', href: '/low-moq-clothing-manufacturers/' },
      { label: 'Startup brands', href: '/clothing-manufacturers-for-startups/' },
    ],
  },
  {
    label: 'Services',
    href: '/all-services/',
    links: [
      { label: 'Cut and sew', href: '/cut-and-sew-service/' },
      { label: 'Sampling', href: '/sample-service/' },
      { label: 'Production process', href: '/work-process/' },
      { label: 'Prices', href: '/pricing/' },
      { label: 'Free tools', href: '/tools/' },
    ],
  },
  {
    label: 'Company',
    href: '/about/',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Bangladesh manufacturing', href: '/clothing-manufacturer-bangladesh/' },
      { label: 'Finding a manufacturer', href: '/how-to-find-clothing-manufacturer/' },
      { label: 'Compliance and audits', href: '/certifications/' },
      { label: 'Verify us', href: '/verify-us/' },
      { label: 'Factory visits', href: '/booking/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    label: 'Legal',
    href: '/privacy/',
    links: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms of use', href: '/terms/' },
      { label: 'Cookies', href: '/cookies/' },
      { label: 'Accessibility', href: '/accessibility/' },
      { label: 'Editorial policy', href: '/editorial-policy/' },
    ],
  },
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
