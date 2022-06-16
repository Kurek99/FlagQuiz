// const staticDevCoffee = "dev-coffee-site-v1"
// const assets = [
//   "/",
//   "/index.html",
//   "/css/style.css",
//   "/js/app.js",
//   "/images/coffee1.jpg",
//   "/images/coffee2.jpg",
//   "/images/coffee3.jpg",
//   "/images/coffee4.jpg",
//   "/images/coffee5.jpg",
//   "/images/coffee6.jpg",
//   "/images/coffee7.jpg",
//   "/images/coffee8.jpg",
//   "/images/coffee9.jpg",
// ]

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}
self.importScripts('node_modules/sw-toolbox/sw-toolbox.js');
self.toolbox.router.get('/*', toolbox.networkFirst);