const STATIC_CACHE = 'vita-static-v1.2.0';
const DYNAMIC_CACHE = 'vita-dynamic-v1.2.0';

const STATIC_ASSETS = [
  '/Vita/',
  '/Vita/index.html',
  '/Vita/manifest.json',
  '/Vita/icon-192.svg',
  '/Vita/icon-512.svg',
  '/Vita/sw.js',
  'https://cdn.tailwindcss.com/3.4.1',
  'https://unpkg.com/react@17/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.26.10/babel.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
          return caches.delete(cacheName);
        }
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== location.origin) {
    return;
  }

  if (request.method !== 'GET') {
    return;
  }

  if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request)
        .then((response) => response || fetch(request).then((response) => {
          if (!response.ok) return response;
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone));
          return response;
        }))
        .catch(() => caches.match('/Vita/index.html'))
    );
  } else {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});
