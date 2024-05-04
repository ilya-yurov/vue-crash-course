module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    'vue'
  ],
  parserOptions: {
    parser: 'vue-eslint-parser'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'vue/require-prop-types': 'error'
  }
}
