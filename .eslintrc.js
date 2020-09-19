module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/named': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/anchor-is-valid': [
      'off',
      {
        components: ['a'],
        specialLink: ['href'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
