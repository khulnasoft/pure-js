'use strict';
var classofRaw = require('../internals/classof-raw');
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/khulnasoft/pure-javascript/issues/1128
  //   https://github.com/khulnasoft/pure-javascript/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};
