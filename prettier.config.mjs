/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.cjs',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
