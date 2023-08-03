/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				hydragreen: {
					50: '#F1F9F1',
					100: '#E6F4E7',
					200: '#C9E8CC',
					300: '#A5D9AB',
					400: '#7EC885',
					500: '#4EB459',
					600: '#44A14E',
					700: '#3D8F45',
					800: '#327639',
					900: '#245629',
					950: '#17361A'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
