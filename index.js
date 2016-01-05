'use strict';

var hljs = require('highlight.js');
var mustache = require('mustache');

var exports = module.exports = {};

exports.name = 'example';
exports.inputFormats = ['html'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var body;
  var lang = options.lang || 'html';
  var code = hljs.highlight(lang, str).value;
  if (lang === 'html') {
    body = mustache.render('<div>{{{html}}}</div>\n<pre><code class=\'hljs\'>{{{code}}}</code></pre>', { html: str, code: code });
  } else {
    body = mustache.render('<pre class=\'hljs\'><code>{{{code}}}</code></pre>', { code: code });
  }

  return {
    body: body,
    dependencies: []
  };
};

function noop () { throw new Error('Not implemented.'); }
exports.renderAsync     = noop;
exports.renderFile      = noop;
exports.renderFileAsync = noop;
