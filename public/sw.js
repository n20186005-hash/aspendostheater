/* Aspendos Antik Tiyatrosu – Service Worker (v1) */
const CACHE = 'aspendos-theatre-2026-10-26';
const PRECACHE = [
  '/',
  '/en/', '/de/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/logo.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Sayfa gezinmeleri: ağ öncelikli, çevrimdışıyken aynı sayfanın önbelleği.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          if (response.ok) caches
            .open(CACHE)
            .then((cache) => cache.put(request, copy))
            .catch(() => {});
          return response;
        })
        .catch(() =>
          caches.match(request).then((hit) => {
            if (hit) return hit;
            return new Response('Offline: this page is not cached. / Çevrimdışı: bu sayfa kayıtlı değil. / Offline: diese Seite ist nicht gespeichert.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
          })
        )
    );
    return;
  }

  // Statik varlıklar: önbellek öncelikli, arka planda tazeleme (stale-while-revalidate).
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request)
        .then((response) => {
          if (response && (response.ok || response.type === 'opaque')) {
            const copy = response.clone();
            caches
              .open(CACHE)
              .then((cache) => cache.put(request, copy))
              .catch(() => {});
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});
