// sw.js — unregistering shim (2026-09-23 SEO fix)
//
// This file used to cache every GET request, including HTML documents
// (/, /contact, /about, ...). That meant Googlebot and returning visitors
// could see a stale cached page after a title/H1/content change shipped,
// which made every SEO fix impossible to verify and looked like the site
// was randomly reverting itself.
//
// The registration script that installed this worker has been removed from
// BaseHead.astro, so no NEW visitor will install this file at all. This
// shim exists only to clean up browsers that already have the old caching
// worker installed from a previous visit: it takes over, deletes every
// cache this origin owns, and unregisters itself so the browser stops
// running a service worker here entirely.
//
// Safe to delete this file completely one release after this ships, once
// returning visitors have had a chance to pick it up once.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});
