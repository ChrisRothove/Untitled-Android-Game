/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '1080px'
    },
    colors: {
      'baby-blue': '#c0dcec',
      'teal': '#48bcd1',
      'spearmint': '#45b08c',
      'teal-green': '#15998e'
    },
    extend: {},
  },
  plugins: [],
}
