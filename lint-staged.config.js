export default {
  'src/**/*.{ts,tsx}': ['pnpm run type-check'],
  '**/*.{ts,tsx,js,jsx,cjs,mjs,json}': [
    (files) => 'eslint --fix ' + files.join(' '),
  ],
}
