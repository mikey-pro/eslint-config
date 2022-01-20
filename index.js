module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        extraFileExtensions: ['.vue', '.svelte'],
      },
      rules: {
        'import/named': 0,
        'import/namespace': 0,
        'import/default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/naming-convention': 0,
        'prettier/prettier': [1, { parser: 'typescript' }],
      },
    },
    {
      files: ['*.tsx'],
      extends: ['react-app', 'react-app/jest'],
      parserOptions: {
        extraFileExtensions: ['.vue', '.svelte'],
      },
      rules: {
        'import/named': 0,
        'import/namespace': 0,
        'import/default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/indent': 0,
        'react/state-in-constructor': 0,
        'react/no-deprecated': 1,
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
        'react/no-string-refs': 1,
        'react/no-find-dom-node': 1,
        'react/jsx-no-comment-textnodes': 1,
        'react/jsx-curly-spacing': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/function-component-definition': 0,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-target-blank': 1,
        'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
        'react/jsx-key': [1, { checkFragmentShorthand: true }],
        'react/self-closing-comp': 1,
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/require-render-return': 1,
        'react/no-danger': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-is-mounted': 1,
        'react-hooks/rules-of-hooks': 1,
        'react-hooks/exhaustive-deps': 1,
        'prettier/prettier': [1, { parser: 'typescript' }],
      },
    },
    {
      files: ['*.css'],
      rules: {
        'prettier/prettier': [1, { parser: 'css' }],
      },
    },
    {
      files: ['*.scss'],
      rules: {
        'prettier/prettier': [1, { parser: 'scss' }],
      },
    },
    {
      files: ['*.less'],
      rules: {
        'prettier/prettier': [1, { parser: 'less' }],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      extends: ['plugin:yaml/recommended'],
      rules: {
        'prettier/prettier': [1, { parser: 'yaml' }],
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
      extends: ['react-app', 'react-app/jest'],
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
          ],
        },
      },
      rules: {
        'react/no-deprecated': 1,
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
        'react/no-string-refs': 1,
        'react/no-find-dom-node': 1,
        'react/jsx-no-comment-textnodes': 1,
        'react/jsx-curly-spacing': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/function-component-definition': 0,
        'react/state-in-constructor': 0,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-target-blank': 1,
        'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
        'react/jsx-key': [1, { checkFragmentShorthand: true }],
        'react/self-closing-comp': 1,
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/require-render-return': 1,
        'react/no-danger': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-is-mounted': 1,
        'react-hooks/rules-of-hooks': 1,
        'react-hooks/exhaustive-deps': 1,
      },
    },
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:md/recommended'],
      rules: {
        'md/remark': [
          1,
          {
            plugins: [
              'preset-lint-markdown-style-guide',
              ['lint-emphasis-marker', '_'],
            ],
          },
        ],
        'prettier/prettier': [1, { parser: 'markdown' }],
      },
    },
    {
      files: ['*.md.json'],
      rules: {
        'prettier/prettier': [1, { parser: 'json' }],
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
          1,
          { selfClosing: 'always' },
        ],
        'prettier/prettier': [1, { parser: 'html' }],
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['plugin:vue/vue3-recommended'],
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
            'eslint-plugin-vue',
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
          1,
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
        'vue/component-tags-order': [
          1,
          {
            order: [['script', 'template'], 'style'],
          },
        ],
        'prettier/prettier': 0,
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
        'prettier/prettier': [1, { parser: 'json' }],
      },
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/all'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'prettier/prettier': [1, { parser: 'json5' }],
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    es2022: true,
  },
  rules: {
    'no-restricted-syntax': [
      1,
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
      1,
      { commonjs: true, amd: true, ignore: ['^node:'] },
    ],
    'import/order': [
      1,
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'import/extensions': ['error', 'never', { ignorePackages: true }],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'keyword-spacing': 1,
    'require-atomic-updates': 0,
    'import/no-commonjs': 0,
    'sort-imports': 0,
    'constructor-super': 1,
    'no-caller': 1,
    'no-const-assign': 1,
    'no-delete-var': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-imports': 1,
    'no-else-return': 1,
    'no-empty-pattern': 0,
    'no-empty': 0,
    'no-extra-parens': 0,
    'no-iterator': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 1,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-shadow-restricted-names': 1,
    'no-shadow': 0,
    'no-spaced-func': 1,
    'no-this-before-super': 1,
    'no-undef-init': 1,
    'no-unneeded-ternary': 1,
    'no-unused-vars': [
      1,
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
    'no-with': 1,
    semi: 0,
    strict: [1, 'never'],
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
    'quote-props': [1, 'as-needed'],
    radix: 1,
    'unicode-bom': 1,
    'valid-jsdoc': 0,
    'spaced-comment': [
      1,
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
    'unicorn/import-index': [1, { ignoreImports: true }],
    'filenames/match-regex': 0,
    'unicorn/filename-case': [
      1,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ['README.md'],
      },
    ],
    'prettier/prettier': [1, { parser: 'babel' }],
  },
  plugins: [
    'prettier',
    'css-modules',
    'disable-autofix',
    '@babel',
    'unicorn',
    'sonarjs',
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
    'tsconfig.json',
  ],
  root: true,
  settings: {
    'json/sort-package-json': 'pro',
    polyfills: ['Promise'],
    react: {
      pragma: 'h',
      version: 'preact',
    },
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
      ],
    },
  },
};
