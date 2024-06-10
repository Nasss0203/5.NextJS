import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['var(--font-manrope)'],
			},
			colors: {
				primary: '#615efc',
			},
		},
	},
	plugins: [],
};
export default config;
