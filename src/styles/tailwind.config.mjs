/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,astro,md,mdx,js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			typography: () => ({
				light: {
					css: [
						{
							color: 'var(--color-gray-300)',
							'[class~="lead"]': {
								color: 'var(--color-gray.300)',
							},
							a: {
								color: 'var(--color-white)',
							},
							strong: {
								color: 'var(--color-white)',
							},
							'ol > li::before': {
								color: 'var(--color-gray-400)',
							},
							'ul > li::before': {
								backgroundColor: 'var(--color-gray-600)',
							},
							hr: {
								borderColor: 'var(--color-gray-200)',
							},
							blockquote: {
								color: 'var(--color-gray-200)',
								borderLeftColor: 'var(--color-gray-600)',
							},
							h1: {
								color: 'var(--color-white)',
							},
							h2: {
								color: 'var(--color-white)',
							},
							h3: {
								color: 'var(--color-white)',
							},
							h4: {
								color: 'var(--color-white)',
							},
							'figure figcaption': {
								color: 'var(--color-gray-400)',
							},
							code: {
								color: 'var(--color-white)',
							},
							'a code': {
								color: 'var(--color-white)',
							},
							pre: {
								color: 'var(--color-gray-200)',
								backgroundColor: 'var(--color-gray-800)',
							},
							thead: {
								color: 'var(--color-white)',
								borderBottomColor: 'var(--color-gray-400)',
							},
							'tbody tr': {
								borderBottomColor: 'var(--color-gray-600)',
							},
						},
					],
				},
				// Make <code> style consistent with <pre>
				DEFAULT: {
					css: {
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
						'* code': {
							fontWeight: 'inherit',
							backgroundColor: 'var(--color-gray-800)',
							color: 'var(--color-gray-200)',
							'box-decoration-break': 'clone',
						},
					},
				},
			}),
		},
	},
};
