// https://docs.expo.dev/guides/using-eslint/
// eslint.config.js
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')

module.exports = defineConfig([
  expoConfig,
  {
    rules: {
      'prettier/prettier': 'error'
    },
    plugins: ['prettier'],
    ignores: ['dist', 'build'],
  }
])
