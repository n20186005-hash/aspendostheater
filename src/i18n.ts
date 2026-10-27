// ——— Dil yönlendirmesi / language routing / Sprachsteuerung ———
// Site üç dildedir: tr (kök /), en (/en/), de (/de/).
// Tüm canonical, hreflang, navigasyon ve dil değiştirici buradan türetilir.

export const locales = ['tr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

/** Kök göreli yol: tr = '/', en = '/en/', de = '/de/' */
export const routes: Record<Locale, string> = {
  tr: '/',
  en: '/en/',
  de: '/de/',
};

export const htmlLang: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en',
  de: 'de',
};

export const ogLocale: Record<Locale, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  de: 'de_DE',
};

export const localeLabels: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
};

export const localeShort: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
};

/** Bölüm (section) id'leri üç dilde aynıdır; yalnızca metinler çevrilir. */
export const sectionIds = {
  history: 'hikaye',
  visit: 'ziyaret',
  route: 'rota',
  transport: 'ulasim',
  sources: 'kaynaklar',
  faq: 'sss',
} as const;

export function pick<T>(locale: Locale, values: Record<Locale, T>): T {
  return values[locale];
}

/** Verilen yolu (ör. '/', '/en/') dile göre yerelleştirilmiş yola çevirir. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = stripLocale(path);
  if (locale === defaultLocale) return clean === '' ? '/' : clean;
  const suffix = clean === '/' ? '' : clean;
  return `/${locale}${suffix}`;
}

/** '/en/' veya '/de/' önekini yoldan kaldırır. */
export function stripLocale(path: string): string {
  const match = /^\/(en|de)(\/|$)/.exec(path);
  if (!match?.[1]) return path;
  const rest = path.slice(match[1].length + 1);
  return rest === '' ? '/' : rest;
}

/** Href biçiminde yerelleştirilmiş bağlantı (sonunda '/' garanti). */
export function localeHref(locale: Locale, path: string): string {
  const target = localizedPath(locale, path);
  return target.endsWith('/') ? target : `${target}/`;
}

/**
 * Sayfa için hreflang eşdeğerleri.
 * x-default, varsayılan Türkçe kök sürümü gösterir.
 */
export function hreflangAlternates(
  path: string,
  site: string | undefined
): { lang: string; href: string }[] {
  if (!site) return [];
  const base = stripLocale(path);
  const origin = site.replace(/\/$/, '');
  const list = locales.map((locale) => ({
    lang: htmlLang[locale],
    href: `${origin}${localeHref(locale, base)}`,
  }));
  return [...list, { lang: 'x-default', href: `${origin}${localeHref(defaultLocale, base)}` }];
}
