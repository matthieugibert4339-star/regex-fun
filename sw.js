const CACHE='regex-fun-v2.2';
const ASSETS=['./','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
// Installation : on force le téléchargement depuis le réseau (pas depuis le cache HTTP du navigateur)
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(u=>new Request(u,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
  const req=event.request;if(req.method!=='GET')return;
  const isPage=req.mode==='navigate'||req.url.endsWith('.html');
  if(isPage){
    // Page : réseau d'abord (toujours la dernière version), copie locale si hors ligne
    event.respondWith(fetch(req,{cache:'no-cache'}).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return resp}).catch(()=>caches.match(req).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  // Autres fichiers (icônes, manifeste) : cache d'abord
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return resp})));
});
