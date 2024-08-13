export default {
  'src/**/*.{ts,tsx}': ['pnpm run type-check'],
  '**/*.{ts,tsx,js,jsx,cjs,mjs,json}': [
    (files) => 'eslint --fix --max-warnings 0 ' + files.join(' '),
  ],
}
