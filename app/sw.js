importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/404.html",
    "revision": "dcad15231e992c01092e4ca40aaa547e"
  },
  {
    "url": "/countdown.js",
    "revision": "a9db805e2b890b1b06fe6a6320572b13"
  },
  {
    "url": "/index.html",
    "revision": "e1071392dcfc76ce99bba4bc6da9b710"
  },
  {
    "url": "/useless.css",
    "revision": "b48d668400da5230e3714ae6ef87b461"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("404.html");
