/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./*.html"],
  theme: {
    extend: {
      screens:
      {
        "sm":"480px"
      },
      spacing:{
        "big":"40rem"
      }
    },
    fontFamily:{
      nunito: ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [],
}
