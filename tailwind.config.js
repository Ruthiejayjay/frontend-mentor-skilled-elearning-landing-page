/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'dim-grey': '#666CA3',
      'deep-blue': '#13183F',
      'grey': '#83869A',
      'violet-red': '#F74780',
      'purple-red-gradient': '#4851FF - F02AA6',
      'red-pink-gradient': '#F02AA6 - #FF6F48',
      'white': '#FFFFFF',
      'light-pink': '#FFA7C3',
      'red': '#FF0000',
      'green': '#008000',
      'black': '#000000'
    },
    fontFamily: {
      PlusJakartaSans: ['Plus Jakarta Sans', 'cursive']
    },
  },
  plugins: [],
}

