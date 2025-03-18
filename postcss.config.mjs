/** @type {import('postcss-load-config').Config} */
export default {
	plugins: {
		'postcss-preset-env': {
			stage: 1,
			features: {
				'focus-within-pseudo-class': false,
			},
		},
		cssnano: {
			preset: 'advanced',
		},
	},
};
