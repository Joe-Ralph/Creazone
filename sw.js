const cachename = 'creaz';
const staticAssets = [
    './',
    './index.js',
    './manifest.json',
    './css/main.css',
    './css/uikit-rtl.css',
    './css/uikit-rtl.min.css',
    './uikit.css',
    './uikit.min.css',
    './js/uikit-icons.js',
    './js/uikit.js',
    './js/uikit.min.js',
    './uikit-icons.min.js'
];
self.addEventListener('install',async e=>{
    const cache = await caches.open(cachename);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});