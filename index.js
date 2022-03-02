module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:unicorn/all',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
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
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue', '.svelte'],
        project: ['../../../tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/naming-convention': 1,
        'import/default': 1,
        'import/named': 1,
        'import/namespace': 1,
        'import/no-named-as-default-member': 1,
        'import/no-unresolved': 1,
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
      extends: ['plugin:yaml/recommended'],
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      rules: {
        'prettier/prettier': [1, { parser: 'yaml' }],
      },
    },
    {
      extends: ['plugin:toml/standard'],
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      rules: {
        'prettier/prettier': 1,
      },
    },
    {
      extends: ['plugin:md/recommended'],
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
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
      extends: ['plugin:@html-eslint/recommended'],
      files: ['*.html'],
      parser: '@html-eslint/parser',
      plugins: ['@html-eslint'],
      rules: {
        '@html-eslint/indent': 1,
        '@html-eslint/no-extra-spacing-attrs': 1,
        '@html-eslint/require-closing-tags': 1,
        'disable-autofix/@html-eslint/require-closing-tags': [
          1,
          { selfClosing: 'always' },
        ],
        'prettier/prettier': [1, { parser: 'html' }],
        'spaced-comment': 1,
      },
    },
    {
      extends: ['plugin:vue/vue3-recommended'],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        babelOptions: {
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
        },
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 1,
        'vue/component-tags-order': [
          1,
          {
            order: [['script', 'template'], 'style'],
          },
        ],
        'vue/html-self-closing': [
          1,
          {
            html: {
              component: 'always',
              normal: 'always',
              void: 'always',
            },
            math: 'always',
            svg: 'always',
          },
        ],
      },
    },
    {
      files: ['*.svelte'],
      plugins: ['svelte3'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/no-mutable-exports': 1,
        'import/no-unresolved': 1,
        'prettier/prettier': 1,
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-json'],
      files: ['*.json', '*.jsonc', '*rc'],
      parser: 'jsonc-eslint-parser',
      plugins: ['json-format'],
      rules: {
        'prettier/prettier': [1, { parser: 'json' }],
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-json5'],
      files: ['*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'prettier/prettier': [1, { parser: 'json5' }],
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
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
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'css-modules',
    'disable-autofix',
    '@babel',
    'unicorn',
    'sonarjs',
    'only-warn',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    camelcase: 1,
    'class-methods-use-this': 1,
    'constructor-super': 1,
    'dot-notation': 1,
    'func-names': 1,
    'import/extensions': [1, 'never', { ignorePackages: true }],
    'import/no-commonjs': 1,
    'import/no-unresolved': [
      1,
      { amd: true, commonjs: true, ignore: ['^node:'] },
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
    'jsx-quotes': 1,
    'keyword-spacing': 1,
    'no-caller': 1,
    'no-confusing-arrow': 1,
    'no-console': 1,
    'no-const-assign': 1,
    'no-delete-var': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-imports': 1,
    'no-else-return': 1,
    'no-empty': 1,
    'no-empty-pattern': 1,
    'no-extra-bind': 1,
    'no-extra-parens': 1,
    'no-extra-semi': 1,
    'no-floating-decimal': 1,
    'no-iterator': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 1,
    'no-process-exit': 1,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-restricted-syntax': [
      1,
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],
    'no-shadow': 1,
    'no-shadow-restricted-names': 1,
    'no-spaced-func': 1,
    'no-this-before-super': 1,
    'no-undef-init': 1,
    'no-underscore-dangle': 1,
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
    'no-useless-return': 1,
    'no-var': 1,
    'no-with': 1,
    'object-curly-spacing': [1, 'always'],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-destructuring': [
      1,
      {
        array: false,
        object: true,
      },
    ],
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'prettier/prettier': [1, { parser: 'babel' }],
    'quote-props': [1, 'as-needed'],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: 1,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 1,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/function-component-definition': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/jsx-no-bind': [
      1,
      {
        allowArrowFunctions: true,
        allowFunctions: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-find-dom-node': 1,
    'react/no-is-mounted': 1,
    'react/no-string-refs': 1,
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-render-return': 1,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'react/state-in-constructor': 1,
    'require-atomic-updates': 1,
    'rest-spread-spacing': 1,
    semi: 1,
    'sort-imports': 1,
    'sort-keys-fix/sort-keys-fix': 1,
    'sort-vars': 1,
    'space-before-function-paren': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'spaced-comment': [
      1,
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['/'],
        },
      },
    ],
    strict: [1, 'never'],
    'unicode-bom': 1,
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
    'unicorn/import-index': [1, { ignoreImports: true }],
    'valid-jsdoc': 1,
  },
  settings: {
    'json/sort-package-json': 'pro',
    polyfills: ['Promise'],
    react: {
      pragma: 'h',
      version: 'detect',
    },
  },
};
