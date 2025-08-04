import { configApp } from '@adonisjs/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default configApp(
  {
    // Configure for both backend and frontend
    // Frontend-specific configuration
    files: ['resources/js/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rules for better HMR
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Modern React practices
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform

      // TypeScript-specific React rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Prefer const assertions over type assertions
      '@typescript-eslint/prefer-as-const': 'error',

      // Enforce consistent type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  },
  {
    // Backend-specific configuration
    files: ['app/**/*.ts', 'config/**/*.ts', 'start/**/*.ts', 'database/**/*.ts'],
  },
  // shadcn files
  {
    files: ['resources/**/ui/**/*.ts', 'resources/**/ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  }
)
