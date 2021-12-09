module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest-formatting'],
  parserOptions: { sourceType: 'module' },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': ['error', { multiline: true }],
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: { jest: true },
    },
  ],
};
