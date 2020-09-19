module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx'],
  theme: {},
  variants: {
    backgroundColor: [
      'responsive',
      'default',
      'hover',
      'focus',
      'active',
      'disabled',
    ],
    textColor: [
      'responsive',
      'default',
      'hover',
      'focus',
      'active',
      'disabled',
    ],
    cursor: ['responsive', 'default', 'hover', 'focus', 'active', 'disabled'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
