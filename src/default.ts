import version from './version?text';

import freeze from '.Object.freeze';

export default freeze({
	version: version,
	parse: require('acorn').parse,
	acornInjectPlugins: freeze([]),
	rollup: require('rollup').rollup,
	minify: require('terser').minify,
	get default () { return this; },
});
