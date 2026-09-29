import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Resmî alan adı. Buradan site dâhilindeki canonical, Open Graph, hreflang,
// JSON-LD ve sitemap gibi mutlak URL'ler türetilir.
// Tek ve kesin sürüm: https://aspendostheater.com (www ve http sürümleri
// Cloudflare tarafından buraya 301 ile yönlendirilir).
const site = 'https://aspendostheater.com';

export default defineConfig({
  site,
  output: 'static',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'de'],
    prefixDefaultLocale: false,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en',
          de: 'de',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
