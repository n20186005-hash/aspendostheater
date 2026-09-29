import { ATTRACTION, DOMAIN, PHOTO_LIST, SITE_NAMES } from '../data/site';
import type { Locale } from '../i18n';
import type { FaqItem } from '../content/types';

/** Göreli yolu site köküyle mutlak URL'ye çevirir. */
export function absoluteUrl(path: string, site: string | undefined): string {
  if (!site) return path;
  return new URL(path, site.replace(/\/$/, '') + '/').toString();
}

export function buildAttractionSchema(
  locale: Locale,
  path: string,
  site: string | undefined,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings', 'Place'],
    '@id': `${DOMAIN}/#attraction`,
    name: ATTRACTION.name[locale],
    alternateName: ATTRACTION.alternateNames,
    url: absoluteUrl(path, site),
    image: PHOTO_LIST.map((p) => absoluteUrl(p, site)),
    description,
    isAccessibleForFree: false,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION.streetAddress,
      postalCode: ATTRACTION.postalCode,
      addressLocality: ATTRACTION.city,
      addressRegion: ATTRACTION.province,
      addressCountry: ATTRACTION.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    hasMap: ATTRACTION.mapsUrl,
    sameAs: [ATTRACTION.mapsUrl, ...ATTRACTION.official.map((o) => o.href)],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: ATTRACTION.opens,
        closes: ATTRACTION.closes,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ATTRACTION.ratingValue,
      reviewCount: ATTRACTION.reviewCount,
      bestRating: ATTRACTION.bestRating,
    },
    priceRange: ATTRACTION.priceRange,
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function buildBreadcrumbSchema(
  crumbs: string[],
  currentUrl: string,
  site: string | undefined
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      ...(index === crumbs.length - 1 && site ? { item: currentUrl } : {}),
    })),
  };
}

export function buildWebsiteSchema(locale: Locale, path: string, site: string | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DOMAIN}/#website`,
    url: absoluteUrl(path, site),
    name: SITE_NAMES[locale],
    inLanguage: locale,
    publisher: { '@id': `${DOMAIN}/#organization` },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${DOMAIN}/#organization`,
    name: 'Aspendos Antik Tiyatrosu — bağımsız ziyaret rehberi',
    url: DOMAIN,
  };
}
