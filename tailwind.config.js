/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	/** DARK MODE **/
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				13: '3.25rem',
			},
			fontFamily: {
				inter: ['Inter'],
			},
			colors: {
				rizal: '#BADA55',
				kopi: 'C0FFEE',
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite'
			},
			keyframes: {
				wiggle: {
					'0%, 100%' : { transform: 'rotate(-3deg)' },
					'50%' : { transform: 'rotate(3deg)' },
				}
			},
		},
	},
	plugins: [],
}
