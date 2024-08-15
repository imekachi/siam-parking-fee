import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx,js,cjs,mjs}'],
  ignores: ['dist', 'cypress/**/*'],
  languageOptions: {
    ecmaVersion: 2023,
    globals: {
      ...globals.browser,
      React: true,
      JSX: true,
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: importPlugin,
    prettier,
    'unused-imports': unusedImports,
    '@stylistic': stylistic,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-param-reassign': 'warn',
    'prettier/prettier': 'warn',
    'no-console': 'off',
    // no duplicate variable naming with outer scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // Import sorting
    'import/order': [
      'warn',
      {
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Remove unused imports
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-implicit-coercion': 'warn',
    'no-unneeded-ternary': 'warn',
    'object-shorthand': 'warn',
    curly: ['warn', 'multi-line', 'consistent'],
    '@stylistic/spaced-comment': 'warn',
  },
})
