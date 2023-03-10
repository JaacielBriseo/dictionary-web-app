/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			mono: ['Inconsolata', 'monospace'],
			serif: ['Lora', 'serif'],
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				VeryDark: '#050505',
				Dark: '#1F1F1F',
				LightDark: '#2D2D2D',
				VeryLightDark: '#3A3A3A',
				VeryGray: '#838383',
				Gray: 'rgb(233,233,233,1)',
				Purplish: 'rgb(164,69,237)',
				SoftRed: 'rgb(255,82,82)',
			},
		},
	},
	plugins: [],
};
