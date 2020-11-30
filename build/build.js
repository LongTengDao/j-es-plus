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
				'acorn': '8.0.4',
				'acorn-class-fields': '0.3.7',
				'acorn-private-class-elements': '0.2.7',
				'acorn-private-methods': '0.3.3',
				'acorn-static-class-features': '0.2.4',
				'rollup': '2.33.3',
				'terser': '4.8.0',
			},
		},
	});
});
