// Service worker for offline capability
const CACHE_NAME = 'msfc-tour-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './css/variables.css',
  './css/base.css',
  './css/components.css',
  './css/brief.css',
  './css/tabs.css',
  './css/search.css',
  './css/lab-cards.css',
  './js/app.js',
  './js/render.js',
  './js/render-tabs.js',
  './js/search.js',
  './js/beats.js',
  './js/audio.js',
  './data/stops.js',
  './data/tours.js',
  './media/shared/img/NASA-Logo-Large.png'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        // Cache new requests for future offline use
        if (event.request.url.indexOf('http') === 0 && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });
    })
  );
});
