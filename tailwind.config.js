module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      fontFamily: {
        serif: 'Pacifico',
      },
    },
  },
  variants: {
    extend: {
      textOverflow: ['responsive', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      cursor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
