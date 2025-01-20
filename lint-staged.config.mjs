import path from 'path';

const buildPrietterCommand = (filenames) =>
  `npm run check-prettier --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildESLintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

export default {
  '*.{js,jsx,ts,tsx}': [buildPrietterCommand, buildESLintCommand],
  '*.{json,yaml}': ['npm run check-prettier'],
  'src/**/*.{css,scss}': ['npm run check-prettier', 'npm run stylelint'],
};
