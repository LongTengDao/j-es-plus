'use strict';

var version = '2.2.0';

var freeze = Object.freeze;

var _default = freeze({
	version: version,
	parse: require('acorn').parse,
	acornInjectPlugins: freeze([]),
	rollup: require('rollup').rollup,
	minify: require('terser').minify,
	get default () { return this; },
});

module.exports = _default;

//# sourceMappingURL=index.js.map