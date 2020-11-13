const urlParams = new URLSearchParams(location.search);
const version = urlParams.has('_v') ? urlParams.get('_v') : '0.1.8';
let apiHost = '';
let siteId = '';
importScripts('https://devscript.omnikick.com/sw/serviceWorker.js?v=' + version);
