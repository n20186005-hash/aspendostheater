import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Resmî alan adı. Buradan site dâhilindeki canonical, Open Graph,
// JSON-LD ve sitemap gibi mutlak URL'ler türetilir.
const site = 'https://aspendostheater.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
