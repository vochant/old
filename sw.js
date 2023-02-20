//version-code
/*

version 1: classic [this service-worker is not added]
version 2: PWA update [added this file]
version 3: SP update
version 4: Active update I
version 5[a-e]: Active update II
version 6.0.[%d]: Active update III & Plugin API update I & Repair 1
version 6.1.[%d]: Plugin API update II [in progress]
version 6.2.[%d]: Plugin GUI update I [waiting] & Plugin marketplace update I [waiting]
version 7.0.[%d]: Plugin update I [waiting] & Homepage update II [waiting]

*/
var cacheName = 'version-6-0-4_0a'

var cacheList=[
    "/",
    "index.html",
    "web/js/index.js",
    "web/js/mdui.min.js",
    "web/css/mdui.min.css",
    "helper.html",
    "helper",
    "web/fonts/roboto/Roboto-Regular.woff2",
    "web/fonts/roboto/Roboto-Bold.woff2",
    "web/fonts/roboto/Roboto-Medium.woff2",
    "web/icons/material-icons/MaterialIcons-Regular.woff2",
    "web/img/old_website.jpeg"
]

// Service Worker 注册完成事件，写入缓存
self.addEventListener('install', e => {
  e.waitUntil(
  caches.open(cacheName)
 .then(cache => cache.addAll(cacheList))
 .then(() => self.skipWaiting())
 )
})

// Service Worker 启动事件，处理更新缓存
self.addEventListener('activate', e => {
  e.waitUntil(
 Promise.all(
    caches.keys().then(keys => keys.map(key => {
 if(key !== cacheName) {
 return caches.delete(key)
 }
 }))
 ).then(() => {
 self.clients.claim()
 })
 )
})

// 请求接口事件，处理相关逻辑
self.addEventListener('fetch', e => {
  e.respondWith(
  caches.match(e.request)
 .then(res => res || fetch(e.request.url))
 )
})
