
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  },
  {
    files: ['tests/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      '.github/'
    ]
  }
];
