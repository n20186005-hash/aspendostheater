import type { Locale } from '../i18n';

// ——— Tekil doğruluk kaynağı / single source of truth / einzige Quelle ———
// Adres, koordinat, fiyat, saat, puan ve resmî bağlantılar yalnızca burada tutulur.
// Değişiklik gerektiğinde üç dil de otomatik olarak güncellenir.

export const DOMAIN = 'https://aspendostheater.com';

/** SEO site adı biçimi: «gezilecek yer + şehir + gezi rehberi». */
export const SITE_NAME = 'Aspendos Antik Tiyatrosu Serik — Gezi Rehberi';
export const SITE_NAME_EN = 'Aspendos Theatre Antalya — Travel Guide';
export const SITE_NAME_DE = 'Aspendos Theater Antalya — Reiseführer';

export const SITE_NAMES: Record<Locale, string> = {
  tr: SITE_NAME,
  en: SITE_NAME_EN,
  de: SITE_NAME_DE,
};

export const ATTRACTION = {
  name: {
    tr: 'Aspendos Antik Tiyatrosu',
    en: 'Aspendos Theatre',
    de: 'Aspendos-Theater',
  } as Record<Locale, string>,
  alternateNames: [
    'Aspendos Theatre',
    'Aspendos Tiyatrosu',
    'Aspendos Antik Tiyatrosu',
    'Aspendos Roman Theatre',
    'Theatre of Aspendos',
    'Aspendos Antik Kenti Tiyatrosu',
  ],
  city: 'Serik',
  province: 'Antalya',
  country: 'Türkiye',
  countryCode: 'TR',
  streetAddress: 'Belkıs, Aspendos Yolu',
  postalCode: '07500',
  addressLine: 'Belkıs, Aspendos Yolu, 07500 Serik/Antalya, Türkiye',
  plusCode: 'W5QC+HV Serik, Antalya',
  latitude: 36.93773,
  longitude: 31.1674266,
  /** Google Maps paylaşım bağlantısı (kısa) */
  mapsUrl: 'https://maps.app.goo.gl/DSrGmEky8GKnY3pK8',
  /** Google Maps gömülü (embed) bağlantısı */
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.81068477483!2d31.16742658763456!3d36.93773012331794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c49e7638f76edd%3A0x82aaad9ddfd636b6!2sAspendos%20Theatre!5e1!3m2!1sen!2s!4v1788741225599!5m2!1sen!2s',
  /** Google Haritalar puan anlık görüntüsü (Eylül 2026) */
  ratingValue: 4.8,
  reviewCount: 22886,
  bestRating: 5,
  /** Resmî yabancı ziyaretçi tarifesi */
  priceRange: '15 €',
  opens: '08:00',
  closes: '18:45',
  /** Resmî ve güvenilir kaynaklar */
  official: [
    {
      href: 'https://muze.gov.tr/muze-detay?SectionId=ASP01&DistId=ASP',
      authority: 'T.C. Kültür ve Turizm Bakanlığı',
    },
    {
      href: 'https://whc.unesco.org/en/tentativelists/6036/',
      authority: 'UNESCO World Heritage Centre',
    },
    {
      href: 'https://www.goturkiye.com/',
      authority: 'Go Türkiye',
    },
  ],
} as const;

export const PHOTOS = {
  hero: '/images/Aspendos_Amphitheatre.jpg',
  interior: '/images/Roman_theater_in_Aspendos.jpg',
  stage: '/images/Aspendos_Theatre_Scaenae_frons_whole_breadth_4777.jpg',
  detail: '/images/Aspendos_Theatre_Exterior_detail_of_front_side_4602.jpg',
  aqueduct: '/images/Aspendos_Aqueduct_3313.jpg',
} as const;

export const PHOTO_LIST: string[] = [
  PHOTOS.hero,
  PHOTOS.interior,
  PHOTOS.stage,
  PHOTOS.detail,
  PHOTOS.aqueduct,
];

/** Fotoğraf telif notu (tüm dillerde aynı isim listesi kullanılır). */
export const PHOTO_CREDIT =
  'Saffron Blaze (CC BY-SA 3.0), Adrian Schneider (CC BY-SA 3.0), Dick Osseman / Dosseman (CC BY-SA 4.0), Wikimedia Commons';
