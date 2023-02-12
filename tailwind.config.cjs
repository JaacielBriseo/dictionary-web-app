/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				VeryDark: '#050505',
				Dark: '#1F1F1F',
				LightDark: '#2D2D2D',
				VeryLightDark: '#3A3A3A',
				VeryGray: '#838383',
				Gray: 'rgb(233,233,233)',
				Purplish: 'rgb(164,69,237)',
				SoftRed: 'rgb(255,82,82)',
			},
		},
	},
	plugins: [],
};
