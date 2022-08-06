/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        paleWhite: 'hsl(0, 0%, 98%)',
        lightGreenish: 'hsla(159, 62%, 89%)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
