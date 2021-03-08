'use strict';
require('@ltd/j-dev')(__dirname+'/..')(async function build ({ build, 龙腾道, get }) {
	await build({
		name: 'j-es-plus',
		user: 'LongTengDao@ltd',
		Auth: 龙腾道,
		Copy: 'LGPL-3.0',
		semver: await get('src/version'),
		ES: 5,
		NPM: {
			description: 'parse (acorn) bundle (rollup) minify (terser) three-in-one',
			dependencies: {
				'acorn': '8.0.5',
				'acorn-class-fields': '1.0.0',
				'acorn-private-class-elements': '1.0.0',
				'acorn-private-methods': '1.0.0',
				'acorn-static-class-features': '1.0.0',
				'rollup': '2.40.0',
				'terser': '5.6.0',
			},
		},
	});
});
