'use strict';
// https://github.com/khulnasoft/pure-javascript/issues/280
var userAgent = require('../internals/environment-user-agent');

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);
