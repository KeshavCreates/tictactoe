const CACHE_NAME = "tic-tac-toe-cache-v1";
const urlsToCache = [
  "/",
  "/index.html", // Update with your game entry point
  "/icon.png"    // Update with your game icon
];

// Install the service worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
