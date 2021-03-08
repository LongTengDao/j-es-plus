'use strict';

var version = '2.0.0';

var freeze = Object.freeze;

var Stage4Parser = require('acorn').Parser;

var Stage3Parser =
	require('acorn-private-methods')(
	require('acorn-static-class-features')(
	require('acorn-class-fields')(
	Stage4Parser)));

var parse = function parse (input        , options                                ) {
	return new ( options && options.ecmaVersion===2014 ? Stage3Parser : Stage4Parser )(options, input).parse();
};

var Parser = freeze({
	parse: parse,
});

var AcornStage3 = function AcornStage3 () {
	return Parser;
};

var _default = freeze({
	version: version,
	parse: parse,
	acornInjectPlugins: freeze([ AcornStage3 ]),
	rollup: require('rollup').rollup,
	minify: require('terser').minify,
	get default () { return this; },
});

module.exports = _default;

//# sourceMappingURL=index.js.map