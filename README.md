# Aspendos Antik Tiyatrosu

Aspendos Antik Tiyatrosu (Serik, Antalya) için çok dilli, bağımsız ziyaret rehberi. Tasarım tiyatronun yarım daire caveası, kemer ritmi ve Pamphylia taş tonlarından türetilmiştir.

## Teknoloji

- Astro 7 (statik, `dist/`)
- Tailwind CSS 4 (Vite eklentisi)
- TypeScript 6
- pnpm
- Cloudflare Workers Static Assets / Wrangler
- GA4: `G-HXM22WWPKP`
- PWA (manifest + service worker + ikonlar)

## Diller (i18n)

| Dil | Kod | Yol |
| --- | --- | --- |
| Türkçe (varsayılan) | `tr` | `/` |
| İngilizce | `en` | `/en/` |
| Almanca | `de` | `/de/` |

- Dil yönlendirmesi, `hreflang`, navigasyon ve dil değiştirici `src/i18n.ts` içinde merkezîdir.
- Tüm sayfa metinleri `src/content/{tr,en,de}.ts` dosyalarındadır ve `src/content/types.ts` ile tip güvenlidir.
- Adres, koordinat, Plus Code, saat, fiyat, puan ve resmî bağlantılar yalnızca `src/data/site.ts` içinde tutulur; üç dil buradan beslenir.
- `x-default`, trafiğin çoğunluğunun geldiği Türkçe kök sürümü gösterir.

## Alan adı ve yönlendirme

`https://aspendostheater.com` — `astro.config.mjs` içindeki `site` sabitinde tanımlanır; canonical, Open Graph, hreflang, JSON-LD ve sitemap mutlak URL'leri buradan türetilir.

GSC verisinde trafik dört URL sürümüne bölünmüştü (`www`/`apex` × `http`/`https`). Tek yetkili sürüm `https://aspendostheater.com` olarak sabitlendi:

1. Cloudflare konsolunda **Always Use HTTPS** açık olmalıdır (http → https 301).
2. Cloudflare **Redirect Rules** ile `www.aspendostheater.com/*` → `https://aspendostheater.com/$1` (301) kuralı tanımlanmalıdır.
   Cloudflare Workers Static Assets alan adı düzeyinde `_redirects` desteklemediği için bu kural kod deposunda değil, Cloudflare tarafında yaşar.
3. HSTS ve güvenlik başlıkları `public/_headers` ile gönderilir.

## Tekil-URL varlık bağlama (SEO)

- **TDK:** Başlık biçimi «gezilecek yer + şehir + gezi rehberi» + niyet sözcükleri (saatler, bilet ücreti, ulaşım).
  Site adı `src/data/site.ts` içindeki `SITE_NAME` / `SITE_NAME_EN` / `SITE_NAME_DE` sabitlerinden gelir.
- **JSON-LD:** `TouristAttraction` + `LandmarksOrHistoricalBuildings` (`@id` `#attraction`, `image`, `geo`, NAP, `hasMap`, `sameAs`, `aggregateRating` 4,8 / 22.886, `openingHoursSpecification`) + `FAQPage` (15 soru) + `BreadcrumbList` + `WebSite` + `Organization`.
- **hreflang:** `tr-TR`, `en`, `de`, `x-default`.
- **H1:** Aspendos Antik Tiyatrosu + Serik · Antalya · Türkiye.
- **Konum:** Google Maps paylaşım bağlantısı `https://maps.app.goo.gl/DSrGmEky8GKnY3pK8` sayfa içinde (Hero, harita bloğu, footer) ve JSON-LD `hasMap`/`sameAs` olarak kullanılır; harita iframe'i resmî embed src ile gömülür. Plus Code `W5QC+HV Serik, Antalya`.
- **Kaynaklar:** `muze.gov.tr`, UNESCO Geçici Liste (6036), GoTürkiye.
- **Fotoğraflar:** Gerçek Aspendos fotoğrafları yerel `public/images/` içinde optimize edilmiş (Wikimedia Commons, CC BY-SA; lisanslar `PHOTO-CREDITS.md`).

## Mobil (Core Web Vitals)

Trafik neredeyse tamamen mobil/tablet kaynaklıdır:

- Hero görseli `<link rel="preload" as="image">` ile önceliklendirilir (LCP).
- Tüm içerik görselleri `loading="lazy"`; harita iframe'i `loading="lazy"`.
- Sayfanın ilk ekranında «saatler / ücret / puan / süre» hızlı bilgi şeridi yer alır.

## Kurulum ve kontrol

```bash
CI=1 pnpm install --frozen-lockfile
pnpm build
```

Windows'ta bağımlılıkları sembolik bağ olmadan kurmak için:

```bash
pnpm install --config.node-linker=hoisted --config.engine-strict=false
```

## Cloudflare Workers

`wrangler.jsonc`, statik `dist/` klasörünü Worker Assets olarak yayınlayacak şekilde hazırlanmıştır.

```bash
pnpm deploy
```
