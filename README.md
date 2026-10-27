# Aspendos ziyaret rehberi

Belkıs, Serik, Antalya’daki Roma tiyatrosu için bağımsız, resmî olmayan ve kâr amacı gütmeyen turizm/eğitim rehberi. Türkçe `/`, İngilizce `/en/` ve Almanca `/de/` korunur. Tarihî yapı ile güncel etkinlik, antik kent ve su kemerleri ayrı kapsamda açıklanır.

Astro 7.3.1 statik çıktı, Tailwind 4.3.3, TypeScript 6.0.3; Node 24.20.0, pnpm 12.3.4, Wrangler 4.129.0. Orijinal kesin bağımlılıklar, kilit dosyası ve script politikası korunur. `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`; ardından varsayılan `wrangler deploy --dry-run`.

Worker girişi yalnız bu sitenin HTTP/www adreslerini HTTPS ana domaine yönlendirir; yol ve sorguyu korur. Dil yolları, gerçek404/noindex/boşHEAD ve aynı sayfaya ait çevrimdışı önbellek ayrıca test edilir. Yerel derleme, yayına alındığı veya mevcut alan bağlarının doğrulandığı anlamına gelmez.

Google Analytics doğrudan yüklenir; yeni bir onay arayüzü eklenmemiştir. Harita, barındırma performans kaynağı ve tarayıcı önbelleği sayfada açıklanır. Hava durumu servisi yoktur.

26 Ekim 2026 kontrolünde Bakanlık08.00–19.00/gişe18.30, Maps08.00–22.00 gösterir. Bunlar ayrı atfedilir, güncel ücret veya geç giriş garanti edilmez. UNESCO2015 Geçici Liste kaydı kesin Dünya Mirası kaydı değildir. Kapasite tahminleri birleştirilmez. Beş tarihî fotoğrafın bireysel kaynak ve lisansları görünürdür.
