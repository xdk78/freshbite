const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      serif: 'Pacifico',
    },
  },
  variants: {
    textOverflow: ['responsive', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
