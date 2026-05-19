import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: ['coverage', '**/dist', '**/.eslintrc.cjs', 'eslint.config.mjs', 'public/mockServiceWorker.js'],
  },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  reactHooks.configs.flat.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.base.json'],
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  eslintConfigPrettier,
]
