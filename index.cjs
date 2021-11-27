module.exports = {
  extends: [
    'airbnb',
    'standard',
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:github/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.css'],
      rules: {
        'prettier/prettier': [2, { parser: 'css' }],
      },
    },
    {
      files: ['*.scss'],
      rules: {
        'prettier/prettier': [2, { parser: 'scss' }],
      },
    },
    {
      files: ['*.less'],
      rules: {
        'prettier/prettier': [2, { parser: 'less' }],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      extends: ['plugin:yaml/recommended'],
      rules: {
        'prettier/prettier': [2, { parser: 'yaml' }],
      },
    },
    {
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      extends: ['plugin:toml/standard'],
      rules: {
        'prettier/prettier': 0,
      },
    },
    {
      files: ['*.jsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      plugins: ['react', 'react-hooks'],
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
        },
     },
      rules: {
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
        'react/function-component-definition': 0,
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
      },
    },
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:md/recommended'],
      rules: {
        'md/remark': [
          2,
          {
            plugins: [
              'preset-lint-markdown-style-guide',
              ['lint-emphasis-marker', '_'],
            ],
          },
        ],
        'prettier/prettier': [2, { parser: 'markdown' }],
      },
    },
    {
      files: ['*.md.json'],
      rules: {
        'prettier/prettier': [2, { parser: 'json' }],
      },
    },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      plugins: ['@html-eslint'],
      rules: {
        'spaced-comment': 0,
        '@html-eslint/indent': 0,
        '@html-eslint/no-extra-spacing-attrs': 0,
        '@html-eslint/require-closing-tags': 0,
        'disable-autofix/@html-eslint/require-closing-tags': [
          2,
          { selfClosing: 'always' },
        ],
        'prettier/prettier': [2, { parser: 'html' }],
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['plugin:vue/vue3-recommended', '@vue/airbnb'],
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
      rules: {
        'vue/html-self-closing': [
          2,
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
        'prettier/prettier': [2, { parser: 'vue' }],
      },
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      plugins: ['svelte3'],
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0,
        'import/no-unresolved': 0,
        'prettier/prettier': 0,
      },
    },
    {
      files: ['*.json', '*.jsonc', '*rc'],
      extends: ['plugin:jsonc/all'],
      parser: 'jsonc-eslint-parser',
      plugins: ['json-format'],
      rules: {
        'prettier/prettier': [2, { parser: 'json' }],
      },
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/all'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'prettier/prettier': [2, { parser: 'json5' }],
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
      2,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
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
    'no-console': 0,
    'func-names': 0,
    'no-process-exit': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': [
      2,
      { commonjs: true, amd: true, ignore: ['^node:'] },
    ],
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'eslint-comments/no-use': [
      'error',
      { allow: ['eslint-disable', 'eslint-disable-next-line'] },
    ],
    'import/no-commonjs': 0,
    'sort-imports': 0,
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
      2,
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
    'unicorn/import-index': [2, { ignoreImports: true }],
    'filenames/match-regex': 0,
    'unicorn/filename-case': [
      2,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ['README.md'],
      },
    ],
    'prettier/prettier': [2, { parser: 'babel' }],
  },
  plugins: [
    'import',
    'prettier',
    'css-modules',
    'disable-autofix',
    '@babel',
    'unicorn',
    'sonarjs',
    'github',
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
    polyfills: ['Promise'],
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
        'airbnb',
      ],
    },
  },
};
