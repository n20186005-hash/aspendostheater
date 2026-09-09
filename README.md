# Aspendos Antik Tiyatrosu

Tek sayfalık, Türkçe Aspendos ziyaret rehberi. Tasarım tiyatronun yarım daire caveası, kemer ritmi ve Pamphylia taş tonlarından türetilmiştir.

## Teknoloji

- Astro 7 (statik, `dist/`)
- Tailwind CSS 4 (Vite eklentisi)
- TypeScript 6
- pnpm
- Cloudflare Workers Static Assets / Wrangler
- GA4: `G-HXM22WWPKP`
- PWA (manifest + service worker + ikonlar)

## Alan adı

`https://aspendostheater.com` — `astro.config.mjs` içindeki `site` sabitinde tanımlanır; canonical, Open Graph, JSON-LD ve sitemap mutlak URL'leri buradan türetilir.

## Tekil-URL varlık bağlama (SEO)

- **TDK:** Başlık ve açıklama resmî tam adı + şehri (Serik, Antalya) içerir.
- **JSON-LD:** `TouristAttraction` (`@id`, `image`, `geo`, NAP, `hasMap`, `sameAs`, `aggregateRating` 4,8 / 22.619, `openingHoursSpecification`) + `FAQPage` (8 soru).
- **H1:** Aspendos Antik Tiyatrosu + Serik · Antalya · Türkiye.
- **Konum:** Google Maps paylaşım bağlantısı `https://maps.app.goo.gl/DSrGmEky8GKnY3pK8` sayfa içinde (Hero, harita bloğu, footer) ve JSON-LD `hasMap`/`sameAs` olarak kullanılır; harita iframe'i resmî embed src ile gömülür.
- **Kaynaklar:** `muze.gov.tr`, UNESCO Geçici Liste (6036), GoTürkiye.
- **Fotoğraflar:** Gerçek Aspendos fotoğrafları yerel `public/images/` içinde optimize edilmiş (Wikimedia Commons, CC BY-SA; lisanslar `PHOTO-CREDITS.md`).

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
