/** @type {import('stylelint').Config} */

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
  },
};
