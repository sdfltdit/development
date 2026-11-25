export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  links: NavLink[];
}

export const primaryNav: NavGroup[] = [
  {
    label: 'Products',
    href: '/products/',
    links: [
      { label: 'All products', href: '/products/' },
      { label: 'T-shirts', href: '/t-shirt-manufacturer/' },
      { label: 'Hoodies and sweatshirts', href: '/hoodie-manufacturer/' },
      { label: 'Private label manufacturing', href: '/private-label-clothing-manufacturer/' },
      { label: 'Low MOQ manufacturing', href: '/low-moq-clothing-manufacturers/' },
      { label: 'For startup brands', href: '/clothing-manufacturers-for-startups/' },
    ],
  },
  {
    label: 'Services',
    href: '/all-services/',
    links: [
      { label: 'All services', href: '/all-services/' },
      { label: 'Cut-and-sew production', href: '/cut-and-sew-service/' },
      { label: 'Sampling', href: '/sample-service/' },
    ],
  },
  {
    label: 'How we work',
    href: '/work-process/',
    links: [
      { label: 'Production process', href: '/work-process/' },
      { label: 'Prices', href: '/pricing/' },
      { label: 'Compliance and audits', href: '/certifications/' },
      { label: 'Verify us', href: '/verify-us/' },
    ],
  },
  {
    label: 'About',
    href: '/about/',
    links: [
      { label: 'About SDF Clothing', href: '/about/' },
      { label: 'Manufacturing in Bangladesh', href: '/clothing-manufacturer-bangladesh/' },
      { label: 'How to find a manufacturer', href: '/how-to-find-clothing-manufacturer/' },
      { label: 'Book a factory visit', href: '/booking/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
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
