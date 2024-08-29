import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // sort imports
      'import/order': 'error',

      'import/no-cycle': 'error',
      'import/no-default-export': 'error',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false
        }
      ],

      'import/no-duplicates': ['error', { 'prefer-inline': true }],

      // false negatives
      'import/namespace': ['off'],

      // we allow empty interfaces
      'no-empty-pattern': 'off',
      '@typescript-eslint/no-empty-interface': 'off',

      // we allow empty functions
      '@typescript-eslint/no-empty-function': 'off',

      // we sometimes use async functions that don't await anything
      '@typescript-eslint/require-await': 'off',

      // allow unused vars prefixed with `_`
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  }
);
