import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type { import("eslint").Linter.Config[] } */
export default [
	...eslintPluginAstro.configs.recommended,
	eslintPluginPrettierRecommended,
];
