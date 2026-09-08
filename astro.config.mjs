import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Alan adı belli olduğunda yalnızca bu satırı doldurun, örn. 'https://alanadiniz.com'.
// Boş bırakıldığında site yine derlenir; canonical/OG mutlak URL etiketleri atlanır
// ve sitemap entegrasyonu devre dışı kalır.
const site = '';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
