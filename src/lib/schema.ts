import { company, site } from '../data/company';

type Json = Record<string, unknown>;

export const ids = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  founder: `${site.url}/#founder`,
  logo: `${site.url}/#logo`,
};

export const entities = {
  clothingIndustry: 'https://en.wikipedia.org/wiki/Clothing_industry',
  privateLabel: 'https://en.wikipedia.org/wiki/Private_label',
  knitting: 'https://en.wikipedia.org/wiki/Knitting',
  bangladeshTextiles: 'https://en.wikipedia.org/wiki/Textile_industry_in_Bangladesh',
  bangladesh: 'https://en.wikipedia.org/wiki/Bangladesh',
  dhaka: 'https://en.wikipedia.org/wiki/Dhaka',
  chittagongPort: 'https://en.wikipedia.org/wiki/Port_of_Chittagong',
  incoterms: 'https://en.wikipedia.org/wiki/Incoterms',
};

export interface Crumb {
  name: string;
  path: string;
}

export function absolute(path: string): string {
  return new URL(path, site.url).toString();
}

export function organization(full = false): Json {
  if (!full) {
    return {
      '@type': 'Organization',
      '@id': ids.organization,
      name: company.brandName,
      url: site.url,
      logo: { '@id': ids.logo, '@type': 'ImageObject', url: absolute('/logo.png') },
    };
  }
  const identifiers = company.showRegistration
    ? [
        { '@type': 'PropertyValue', name: 'RJSC company registration', value: company.registration.rjsc },
      ]
    : undefined;
  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: company.brandName,
    legalName: company.legalName,
    description: company.description,
    alternateName: company.alternateNames,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      '@id': ids.logo,
      url: absolute('/logo.png'),
      width: 600,
      height: 526,
    },
    foundingDate: company.foundingDate,
    parentOrganization: { '@type': 'Organization', name: company.parentCompany },
    founder: { '@id': ids.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    location: {
      '@type': 'Place',
      geo: { '@type': 'GeoCoordinates', latitude: company.geo.latitude, longitude: company.geo.longitude },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: absolute(company.contactPath),
        availableLanguage: ['English', 'Bengali'],
        areaServed: 'Worldwide',
      },
    ],
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: [
      { '@type': 'Thing', name: 'Clothing industry', sameAs: entities.clothingIndustry },
      { '@type': 'Thing', name: 'Private label', sameAs: entities.privateLabel },
      { '@type': 'Thing', name: 'Knitting', sameAs: entities.knitting },
      { '@type': 'Thing', name: 'Textile industry in Bangladesh', sameAs: entities.bangladeshTextiles },
      'Custom clothing manufacturing',
      'Low MOQ clothing manufacturing',
      'Cut-and-sew knitwear',
      'Screen printing',
      'Embroidery',
    ],
    isicV4: '1410',
    naics: '315250',
    sameAs: company.sameAs,
    ...(identifiers ? { identifier: identifiers, taxID: company.registration.tin } : {}),
  };
}

export function founder(): Json {
  return {
    '@type': 'Person',
    '@id': ids.founder,
    name: company.founder.name,
    jobTitle: company.founder.jobTitle,
    url: absolute('/about/'),
    worksFor: { '@id': ids.organization },
    knowsAbout: ['Knitwear manufacturing', 'Garment production in Bangladesh', 'Private label clothing'],
  };
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: site.url,
    name: company.brandName,
    inLanguage: site.language,
    publisher: { '@id': ids.organization },
  };
}

export function breadcrumbList(crumbs: Crumb[]): Json {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absolute(crumbs[crumbs.length - 1]?.path ?? '/')}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}

export interface WebPageInput {
  path: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage';
  datePublished?: string;
  dateModified: string;
  hasBreadcrumb: boolean;
  mentions?: { name: string; sameAs: string }[];
  reviewed?: boolean;
}

export function webPage(input: WebPageInput): Json {
  const url = absolute(input.path);
  return {
    '@type': input.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    inLanguage: site.language,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.organization },
    publisher: { '@id': ids.organization },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    dateModified: input.dateModified,
    ...(input.hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(input.reviewed ? { reviewedBy: { '@id': ids.founder }, lastReviewed: input.dateModified } : {}),
    ...(input.mentions ? { mentions: input.mentions.map((m) => ({ '@type': 'Thing', name: m.name, sameAs: m.sameAs })) } : {}),
  };
}

export function service(input: { path: string; name: string; description: string; serviceType: string; audience?: string }): Json {
  const url = absolute(input.path);
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url,
    provider: { '@id': ids.organization },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    ...(input.audience ? { audience: { '@type': 'BusinessAudience', audienceType: input.audience } } : {}),
  };
}

export function faqPage(path: string, items: { q: string; a: string }[]): Json {
  const url = absolute(path);
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function itemList(path: string, items: { name: string; path: string }[]): Json {
  return {
    '@type': 'ItemList',
    '@id': `${absolute(path)}#itemlist`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absolute(item.path),
    })),
  };
}

export function graph(nodes: Json[]): string {
  const payload = { '@context': 'https://schema.org', '@graph': nodes };
  return JSON.stringify(payload).replace(/</g, '\\u003c');
}

export function standardPage(input: {
  path: string;
  title: string;
  description: string;
  dateModified: string;
  crumbs: Crumb[];
  type?: WebPageInput['type'];
  extra?: Json[];
  fullOrganization?: boolean;
}): string {
  const hasBreadcrumb = input.crumbs.length > 1;
  return graph([
    organization(input.fullOrganization ?? false),
    founder(),
    website(),
    webPage({
      path: input.path,
      title: input.title,
      description: input.description,
      type: input.type,
      dateModified: input.dateModified,
      hasBreadcrumb,
    }),
    ...(hasBreadcrumb ? [breadcrumbList(input.crumbs)] : []),
    ...(input.extra ?? []),
  ]);
}

export function offerCatalog(name: string, services: { name: string; path: string }[]): Json {
  return {
    '@type': 'OfferCatalog',
    '@id': `${site.url}/#offers`,
    name,
    itemListElement: services.map((svc) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${absolute(svc.path)}#service`, name: svc.name, url: absolute(svc.path) },
    })),
  };
}

export function article(input: { path: string; headline: string; description: string; datePublished: string; dateModified: string; citations?: string[] }): Json {
  const url = absolute(input.path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: input.headline,
    description: input.description,
    url,
    inLanguage: site.language,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { '@id': ids.organization },
    publisher: { '@id': ids.organization },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    image: absolute(site.defaultOgImage),
    ...(input.citations && input.citations.length > 0 ? { citation: input.citations } : {}),
  };
}
