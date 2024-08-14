export default {
  'src/**/*.{ts,tsx}': () => 'pnpm run type-check',
  '**/*.{ts,tsx,js,jsx,cjs,mjs}': 'eslint --fix --max-warnings 0',
  '**/*.{ts,tsx,js,jsx,cjs,mjs}': 'vitest related --run',
}
