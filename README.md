# Aspendos Antik Tiyatrosu

Tek sayfalık, Türkçe Aspendos ziyaret rehberi. Tasarım tiyatronun yarım daire caveası, kemer ritmi ve Pamphylia taş tonlarından türetilmiştir.

## Teknoloji

- Astro 7
- Tailwind CSS 4 (Vite eklentisi)
- TypeScript 6
- pnpm
- Cloudflare Workers Static Assets / Wrangler
- GA4: `G-HXM22WWPKP`

## Alan adı

Alan adı yalnızca `astro.config.mjs` içindeki `site` sabitinde tanımlanır. Başlangıçta boştur.

```js
const site = '';
```

Alan adı belirlenince yalnızca bu değeri örneğin `https://alanadiniz.com` biçiminde doldurun. `site` boşken canonical ve mutlak Open Graph URL etiketleri üretilmez; `@astrojs/sitemap` da yüklenmez. Böylece hiçbir sahte alan adı çıktıya girmez.

## Kurulum ve kontrol

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers

`wrangler.jsonc`, statik `dist/` klasörünü Worker Assets olarak yayınlayacak şekilde hazırlanmıştır.

```bash
pnpm deploy
```

## Fotoğraflar

Gerçek Aspendos fotoğraflarının kaynak ve lisansları `PHOTO-CREDITS.md` içindedir. Bu çalışma oturumunda dış binary indirme kapalı olduğundan fotoğraf dosyaları yerelleştirilememiş, Wikimedia Commons CDN kullanılmıştır. Kodda stok ya da yapay görsel bulunmaz.
