'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "31c8f5eab983a017086507cdc4265041",
"assets/AssetManifest.bin.json": "0f4b7af13e84d9145a4c279ad2491ab5",
"assets/AssetManifest.json": "b2ba62defcc3d0ce74e6b498858ce870",
"assets/assets/images/ic_account.svg": "0a2de5fe2252469ff58b45770750db75",
"assets/assets/images/ic_back_to_top.svg": "51ff2107c40d3e7cdcb8021e6c57053d",
"assets/assets/images/ic_chevron_right.svg": "f6c3e997b0dbe4691d715531b1a0572b",
"assets/assets/images/ic_close.svg": "c5e68f72a9481f15abd0527b78e4e5d6",
"assets/assets/images/ic_docs.svg": "075501a42dab11534840e59828c5dfcc",
"assets/assets/images/ic_download.svg": "c20793396627403b5a5bd6a975a041a1",
"assets/assets/images/ic_gate.svg": "16dc1bbe2f72efc2fb9131aa2b7d9aa9",
"assets/assets/images/ic_graph_down.svg": "f9fd7a7eb7488ee10fa435e3a0ca228d",
"assets/assets/images/ic_graph_up.svg": "25a22b4405e5d497323e01f238d192af",
"assets/assets/images/ic_home.svg": "8b0087f0eb7e07d019ba1baea7c0291b",
"assets/assets/images/ic_image.svg": "cfc836aa11a20f36c8122c96c70742c2",
"assets/assets/images/ic_info_circle.svg": "d5b1e95fae159d2fe6ac12cd44f9aca0",
"assets/assets/images/ic_key.svg": "c8dc906d81b7f9da085fed9d1098f3ef",
"assets/assets/images/ic_location.svg": "303a73cc80d348d560c2697d03f1184e",
"assets/assets/images/ic_logout.svg": "a6f6a7dc09097da1b373c70d3b59d584",
"assets/assets/images/ic_mail.svg": "ece64e5efcab44001c79f9329b7ce519",
"assets/assets/images/ic_open.svg": "a7f4278716d27e28a15d7ccc08f48615",
"assets/assets/images/ic_profile.svg": "310a2945527dba6ba6487162360c3644",
"assets/assets/images/ic_profile_notified.svg": "708f280ce3b2179ab3f04ef7844ee8d9",
"assets/assets/images/ic_qr.svg": "1c3d5a1d3b6d0584e69d1798d593485d",
"assets/assets/images/ic_report.svg": "e1771ab1190bf7c9d5c8c1b97f821b9f",
"assets/assets/images/ic_scan.svg": "92e06b0d8d8a6bbec269fd4e78f7974a",
"assets/assets/images/ic_search.svg": "6d2e0f44ac4beeb4aceabf378ef27f03",
"assets/assets/images/ic_settings.svg": "93a16605d232deff0f31a6bdf7a94c5e",
"assets/assets/images/ic_ticket_history.svg": "80b81c40e90d15c9cb09504c6e64919f",
"assets/assets/images/ic_ticket_summary.svg": "dd58d51b8ae0579e03cb64056fbafb5d",
"assets/assets/images/ic_torch.svg": "4174b6dbbf05607663b3cb06f7ce7310",
"assets/assets/images/ic_user_config.svg": "49c71a2411432fa9c2c9a3bf567ba221",
"assets/assets/images/ic_warning.svg": "bdee41e2cef442994342d2170d63ccd2",
"assets/assets/images/ic_warning_circle.svg": "1e585f951b842d322208af40e517ed3f",
"assets/assets/images/il_avatar_female.svg": "4636c79fd82a655825f6f45f7c39c337",
"assets/assets/images/il_avatar_female_dark.svg": "e966a13449059970212c47999cb5cf9c",
"assets/assets/images/il_avatar_male.svg": "1c1796648bb5213c54c951588843a084",
"assets/assets/images/il_avatar_male_dark.svg": "1a157ec4cf0057d3773286b9d11b62ad",
"assets/assets/images/il_date_invalid_circle.svg": "1aace590a1929b62fad3a86be2536382",
"assets/assets/images/il_date_invalid_circle_dark.svg": "61bad6abe23bf237daf64e783370b044",
"assets/assets/images/il_date_report_circle.svg": "f67d024759295ee9fd7856aad271d883",
"assets/assets/images/il_date_report_circle_dark.svg": "8223305647d2a6b5837194121605b6e8",
"assets/assets/images/il_date_ticket_circle.svg": "1888bf96ccd82165a9c06808a8383896",
"assets/assets/images/il_date_ticket_circle_dark.svg": "5144bbb1203b73faccdbd414886c42cb",
"assets/assets/images/il_download_circle.svg": "ff9e9ee9111ebf536c259d8aa32bcd0b",
"assets/assets/images/il_download_circle_dark.svg": "5d73bf6e849718615c9fdabbdc17fc7e",
"assets/assets/images/il_gate.svg": "697079aae1d3898f7630b94be86185d4",
"assets/assets/images/il_gate_dark.svg": "d2406f6e7a957866d7501ae24e238dae",
"assets/assets/images/il_inbox_circle.svg": "0d6534feba5037a56af1a446929e93eb",
"assets/assets/images/il_info_circle.svg": "ac488b5600a83f480f4f9c114787d3eb",
"assets/assets/images/il_info_circle_dark.svg": "f61d4ea5e45e3985b81366728e314ecd",
"assets/assets/images/il_lock_account.svg": "5b80ca349c425b7e85b18390dd90ba5e",
"assets/assets/images/il_lock_account_dark.svg": "4419fab485f3e126ac895b3a1f071757",
"assets/assets/images/il_log_circle.svg": "c27924172e9534d3ff1bd6e7281be258",
"assets/assets/images/il_log_circle_dark.svg": "7391a1a2bacb6de08d8297db946a5f57",
"assets/assets/images/il_ripple.svg": "2dfabedda6e7d88aaa7c5d536dec2cd8",
"assets/assets/images/il_success_circle.svg": "f04a730119b0f568be59de292f2e4568",
"assets/assets/images/il_success_circle_dark.svg": "2851d5679506c768586f3d7d62dee7ba",
"assets/assets/images/il_theme_circle.svg": "9eacfc5533c8cb9e62f99fd5687d94fb",
"assets/assets/images/il_theme_circle_dark.svg": "dd41df4d98518cb847294cccd41484cf",
"assets/assets/images/il_ticket_circle.svg": "229d0438f1d41b028ce81dfb84beb668",
"assets/assets/images/il_version_circle.svg": "759c6a45545f83853691b4d748adbcac",
"assets/assets/images/il_version_circle_dark.svg": "62f429a40f36351cc00a84fcc060d1cc",
"assets/assets/images/il_warning_circle.svg": "c1905e1c7cd92640ed9e390e9a81c8a6",
"assets/assets/images/il_warning_circle_dark.svg": "74f428d52fe3fff479158618c68a1098",
"assets/assets/images/logo.png": "52c9b93e666fbdd4e6db88d891e41eba",
"assets/assets/images/logo.svg": "d140a55841d13ab70075579c798c7de2",
"assets/assets/images/logo_dark.svg": "32b6cdbc6c96415fe391b1ea5a2c709d",
"assets/assets/images/logo_dev.png": "5cd1bbd1407f881534a24e39710f2890",
"assets/assets/images/logo_type.svg": "da726ce3d2556e5039a699744da7b107",
"assets/FontManifest.json": "35db081915d3cac948c73a251d5329ee",
"assets/fonts/MaterialIcons-Regular.otf": "d4e55ed895140900abc9e50a8af87f17",
"assets/NOTICES": "719280c55fcc43c9806c44285942803e",
"assets/packages/golog/fonts/FiraCode.ttf": "ca3ebb34ddd32492162f9ff9b0ab1345",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "99d8581300825e8f19438de760146bdf",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9c4b18d1dfb83017d0b8f29a2cf5ca79",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a91a0d91d24d31adff914de6326fd86b",
"/": "a91a0d91d24d31adff914de6326fd86b",
"main.dart.js": "d67a6aaeb96616c35979b723f632b549",
"manifest.json": "a1d09f8c1fa5239e3251b3fc5fc7962a",
"version.json": "c5fab7149d0a35b9f032ea318cbcceea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
