export default {
  'src/**/*.{ts,tsx}': () => 'pnpm run type-check',
  '**/*.{ts,tsx,js,jsx,cjs,mjs,__parallel1__}': 'eslint --fix --max-warnings 0',
  '**/*.{ts,tsx,js,jsx,cjs,mjs,__parallel2__}': 'vitest related --run',
}
