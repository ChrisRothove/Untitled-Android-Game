/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'title': ['"Ubuntu"', 'system-ui']
    },
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '1080px'
    },
    colors: {
      ...colors,
      "bright": "#E4d002",
      "pale": "#936A31",
      "darkest": "#140201",
      "dark": "#4A0604",
      "half": "#705614",
      "offset-dark": "#49334D",
      "offset-mid": "#485F95"
    },
    extend: {},
  },
  plugins: [],
}
