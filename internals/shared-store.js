'use strict';
var IS_PURE = require('../internals/is-pure');
var globalThis = require('../internals/global-this');
var defineGlobalProperty = require('../internals/define-global-property');

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.41.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Md Sulaiman (khulnasoft.com)',
  license: 'https://github.com/khulnasoft/pure-javascript/blob/v3.41.0/LICENSE',
  source: 'https://github.com/khulnasoft/pure-javascript'
});
