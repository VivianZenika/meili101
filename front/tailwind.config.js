/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  safelist: [
    'bg-lightBlue',
    'bg-deepBlue',
    'bg-red',
    'text-lightYellow',
    'text-deepYellow',
    'text-6xl',
    'text-4xl',
    'px-4',
    'py-2',
    'rounded-full',
  ],
  theme: {
    colors: {
      lightYellow: '#FFCC00',
      deepYellow: '#D5A100',
      lightBlue: '#0075BE',
      deepBlue: '#0A285F',
      red: '#FB1B1B',
      white: '#FFFFFF',
    },
    extend: {
      fontSize: {
        '6xl': '6rem',
      },
    },
  },
}
