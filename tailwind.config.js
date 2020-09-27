module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    fontFamily: {
      serif: 'Pacifico',
    },
  },
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
