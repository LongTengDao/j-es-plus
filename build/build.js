'use strict';
require('j-dev')(__dirname+'/..')(async function build ({ build, 龙腾道, get }) {
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
				'acorn': '8.6.0',
				'rollup': '2.60.0',
				'terser': '5.10.0',
			},
		},
		LICENSE_: true,
	});
});
