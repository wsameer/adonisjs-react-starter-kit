import { configApp } from '@adonisjs/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default configApp({
  // Configure for both backend and frontend
  overrides: [
    {
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

        // Import organization
        'import/order': [
          'error',
          {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': {
              order: 'asc',
              caseInsensitive: true,
            },
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
      rules: {
        // Stricter rules for backend code
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
      },
    },
  ],
})
