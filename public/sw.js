const CACHE = 'yoga-safety-v1';
const ASSETS = ['./','./index.html','./src/app.js','./src/asanas.json','./src/safety.js','./src/style.css','./manifest.webmanifest','./brand/giv-yog-logo.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
