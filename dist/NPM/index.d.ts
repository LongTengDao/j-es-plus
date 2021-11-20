export = exports;
declare namespace exports {
	
	export const version :'2.2.0';
	
	export function parse (input :string, options? :Readonly<Options>) :Node;
	export type Options = {
		[Key in keyof import('acorn').Options]
		:Key extends 'ecmaVersion'
			? import('acorn').Options[Key] | 2014
			: import('acorn').Options[Key]
	};
	export type Node = import('acorn').Node;
	
	export const acornInjectPlugins :readonly [ () => { readonly parse :typeof parse } ];
	
	export function rollup (options :Readonly<RollupOptions>) :Promise<RollupBuild>;
	export type RollupOptions = import('rollup').RollupOptions;
	export type RollupBuild = { generate (outputOptions :Readonly<OutputOptions>) :Promise<RollupOutput> };
	export type OutputOptions = import('rollup').OutputOptions;
	export type RollupOutput = import('rollup').RollupOutput;
	
	export function minify (files :string | readonly string[] | { readonly [file :string] :string }, options? :Readonly<MinifyOptions>) :MinifyOutput;
	export type MinifyOptions = {
		[Key in keyof import('terser').MinifyOptions]
		:Key extends 'ecma'
			? import('terser').MinifyOptions[Key] | 2014
			: import('terser').MinifyOptions[Key]
	};
	export type MinifyOutput = import('terser').MinifyOutput;
	
	export { exports as default };
	
}