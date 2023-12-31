/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif']
      }
    },
  },
  plugins: [],
}

