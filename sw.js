const CACHE_NAME = 'pokemon-quiz-pwa-v6';
const CORE = ['./', './index.html', './manifest.webmanifest', './versus-config.js', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const API_ORIGINS = [
  'https://pokeapi.co/',
  'https://raw.githubusercontent.com/',
  'https://cdn.jsdelivr.net/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

function isExternalCacheable(url) {
  return API_ORIGINS.some(origin => url.href.startsWith(origin));
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const external = isExternalCacheable(url);
  if (!sameOrigin && !external) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const response = await fetch(req);

      // PokeAPI y los sprites se guardan en caché para evitar repetir
      // descargas entre partidas y visitas.
      if (response.ok || response.type === 'opaque') {
        cache.put(req, response.clone()).catch(() => {});
      }
      return response;
    } catch (err) {
      if (req.mode === 'navigate') {
        const fallback = await cache.match('./index.html');
        if (fallback) return fallback;
      }
      throw err;
    }
  })());
});
