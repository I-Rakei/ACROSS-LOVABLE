// Across Tour DMC — Service Worker for Fast Asset & Image Caching
const CACHE_NAME = "across-tour-v1";
const STATIC_ASSETS_CACHE = "across-tour-assets-v1";

// Install Event: Skip waiting to activate instantly
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Activate Event: Clean up old caches and claim clients immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name !== STATIC_ASSETS_CACHE) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First for static assets (images, fonts, scripts, css)
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Ignore chrome-extension and dev server HMR requests
  if (url.protocol !== "http:" && url.protocol !== "https:") return;
  if (url.pathname.includes("@vite") || url.pathname.includes("@react-refresh")) return;

  // 1. Static Assets & Images (Cache-First)
  const isImage = /\.(jpg|jpeg|png|webp|avif|gif|svg|ico)$/i.test(url.pathname);
  const isFont = /\.(woff|woff2|ttf|eot)$/i.test(url.pathname);
  const isStaticAsset = url.pathname.startsWith("/assets/") || url.pathname.startsWith("/logos/");

  if (isImage || isFont || isStaticAsset) {
    event.respondWith(
      caches.open(STATIC_ASSETS_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            // Return cached asset immediately
            return cachedResponse;
          }
          // Fetch from network, store in cache for next time
          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Silently fall back if network is offline
            return cachedResponse;
          });
        });
      })
    );
    return;
  }

  // 2. Navigation / HTML pages (Stale-While-Revalidate)
  if (request.mode === "navigate") {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          return cache.match(request);
        });
      })
    );
    return;
  }
});
