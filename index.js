module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:md/recommended'],
      rules: {
        'md/remark': [
          'error',
          {
            plugins: [
              'preset-lint-markdown-style-guide',
              ['lint-emphasis-marker', '_'],
            ],
          },
        ],
        'prettier/prettier': ['error', { parser: 'markdown' }],
      },
    },
    {
      files: ['*.md.json'],
      rules: {
        'prettier/prettier': ['error', { parser: 'json' }],
      },
    },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/indent': 'off',
        '@html-eslint/no-extra-spacing-attrs': 'off',
        '@html-eslint/require-closing-tags': 'off',
        'disable-autofix/@html-eslint/require-closing-tags': [
          'error',
          { selfClosing: 'always' },
        ],
        'prettier/prettier': ['error', { parser: 'html' }],
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'prettier/prettier': ['error'],
  },
  plugins: [
    'import',
    'prettier',
    'json-format',
    'css-modules',
    '@html-eslint',
    'disable-autofix',
    '@babel',
  ],
  ignorePatterns: [
    '!.*',
    'node_modules',
    'vendor',
    'dist',
    'package-lock.json',
  ],
  settings: {
    'json/sort-package-json': 'pro',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    }
  }
};
