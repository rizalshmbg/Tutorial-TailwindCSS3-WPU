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
        inter: ['Inter']
      },
      colors: {
        rizal: '#BADA55',
        kopi: 'C0FFEE'
      }
		},
	},
	plugins: [],
}
