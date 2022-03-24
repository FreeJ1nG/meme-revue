// tailwind.config.js
module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'first': '#323347',
        'second': '#5561FF',
        'third': '#3643FC',
        'fourth': '#FFFFFF',
        'desc-box': '#3E405B',
        'searchbar-outline': '#6E7198',
      },
      fontFamily: {
        inter: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
