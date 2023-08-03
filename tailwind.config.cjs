import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				hydragreen: {
					50: '#EAFBEF',
					100: '#D5F6DF',
					200: '#A2ECB9',
					300: '#5FDE87',
					400: '#29C65B',
					500: '#22A34A',
					600: '#1F9444',
					700: '#1A7F3A',
					800: '#166A30',
					900: '#0F4821',
					950: '#0B3719'
				}
			},
			fontFamily: {
				inter: ['Inter Tight', ...defaultTheme.fontFamily.sans],
				opensans: ['Open Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;
