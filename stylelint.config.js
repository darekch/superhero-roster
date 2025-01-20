/** @type {import('stylelint').Config} */

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'selector-class-pattern': null,
    'comment-empty-line-before': null,
    'media-feature-range-notation': null,
    'declaration-empty-line-before': null,
  },
};
