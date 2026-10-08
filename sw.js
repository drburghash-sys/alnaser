const CACHE="alnaser-hub-v11";
const ASSETS=[
  "./","./index.html","./style.css","./app.js","./manifest.webmanifest",
  "./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png",
  "./data/current-players.json","./data/legends.json","./data/historical-foreigners.json",
  "./data/trophies.json","./data/source-policy.json","./data/fixtures.json",
  "./data/history.json","./data/seasons.json"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin!==location.origin){e.respondWith(fetch(e.request).catch(()=>new Response("",{status:504})));return;}
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r}).catch(()=>caches.match(e.request)));
});