var cacheName = 'version-5e' // 决定是否更新本地资源，每次要更新记得替换

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
