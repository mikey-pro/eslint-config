module.exports = {
  extends: [
    'airbnb',
    'standard',
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
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
        'spaced-comment': 'off',
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
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['plugin:vue/vue3-recommended', '@vue/airbnb'],
      rules: {
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'always',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
        'prettier/prettier': 'off',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    es2021: true,
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      //  {
      //    selector: 'ForOfStatement',
      //    message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      //  },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    camelcase: 0,
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': [
      2,
      { commonjs: true, amd: true, ignore: ['^node:'] },
    ],
    'import/extensions': 'off',
    'constructor-super': 2,
    'no-caller': 2,
    'no-const-assign': 2,
    'no-delete-var': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 1,
    'no-empty-pattern': 0,
    'no-empty': 0,
    'no-extra-parens': 0,
    'no-iterator': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 0,
    'no-spaced-func': 2,
    'no-this-before-super': 2,
    'no-undef-init': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': [
      2,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-useless-call': 1,
    'no-useless-computed-key': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-rename': 1,
    'no-var': 1,
    'no-with': 2,
    semi: 0,
    strict: [2, 'never'],
    'object-curly-spacing': [0, 'always'],
    'rest-spread-spacing': 0,
    'space-before-function-paren': [0, 'always'],
    'space-in-parens': [0, 'never'],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    quotes: [
      0,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'quote-props': [2, 'as-needed'],
    radix: 1,
    'unicode-bom': 2,
    'valid-jsdoc': 0,
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'react/no-deprecated': 2,
    'react/react-in-jsx-scope': 0,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowFunctions: true,
        allowArrowFunctions: true,
      },
    ],
    'react/state-in-constructor': 0,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/self-closing-comp': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react/require-render-return': 2,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-string-refs': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
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
    'react',
    'react-hooks',
    'unicorn',
  ],
  ignorePatterns: [
    '!.*',
    'node_modules',
    'vendor',
    'dist',
    'package-lock.json',
    'LICENSE',
    '.vscode',
    '.github',
  ],
  settings: {
    'json/sort-package-json': 'pro',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
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
        '@babel/preset-react',
        'airbnb',
      ],
      plugins: [
        '@vue/babel-plugin-jsx',
        [
          '@babel/plugin-transform-react-jsx',
          {
            pragma: 'h',
            pragmaFrag: 'Fragment',
          },
        ],
      ],
    },
  },
};
