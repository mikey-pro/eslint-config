module.exports = {
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['../../../tsconfig.json'],
        extraFileExtensions: ['.vue', '.svelte'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/named': 1,
        'import/namespace': 1,
        'import/default': 1,
        'import/no-named-as-default-member': 1,
        'import/no-unresolved': 1,
        '@typescript-eslint/indent': 1,
        '@typescript-eslint/naming-convention': 1,
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
        'prettier/prettier': 1,
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
        'spaced-comment': 1,
        '@html-eslint/indent': 1,
        '@html-eslint/no-extra-spacing-attrs': 1,
        '@html-eslint/require-closing-tags': 1,
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
        'prettier/prettier': 1,
      },
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      plugins: ['svelte3'],
      rules: {
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/no-mutable-exports': 1,
        'import/no-unresolved': 1,
        'prettier/prettier': 1,
      },
    },
    {
      files: ['*.json', '*.jsonc', '*rc'],
      extends: ['plugin:jsonc/recommended-with-json'],
      parser: 'jsonc-eslint-parser',
      plugins: ['json-format'],
      rules: {
        'prettier/prettier': [1, { parser: 'json' }],
      },
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/recommended-with-json5'],
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
    es2121: true,
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
    camelcase: 1,
    'no-console': 1,
    'func-names': 1,
    'no-process-exit': 1,
    'class-methods-use-this': 1,
    'no-underscore-dangle': 1,
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
    'import/extensions': [1, 'never', { ignorePackages: true }],
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],
    'keyword-spacing': 1,
    'require-atomic-updates': 1,
    'import/no-commonjs': 1,
    'sort-imports': 1,
    'constructor-super': 1,
    'no-caller': 1,
    'no-const-assign': 1,
    'no-delete-var': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-imports': 1,
    'no-else-return': 1,
    'no-empty-pattern': 1,
    'no-empty': 1,
    'no-extra-parens': 1,
    'no-iterator': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 1,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-shadow-restricted-names': 1,
    'no-shadow': 1,
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
    semi: 1,
    strict: [1, 'never'],
    'object-curly-spacing': [1, 'always'],
    'rest-spread-spacing': 1,
    'space-before-function-paren': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'quote-props': [1, 'as-needed'],
    radix: 1,
    'unicode-bom': 1,
    'valid-jsdoc': 1,
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
    'filenames/match-regex': 1,
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
    'react/state-in-constructor': 1,
    'react/no-deprecated': 1,
    'react/react-in-jsx-scope': 1,
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
    'react/function-component-definition': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-target-blank': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 1,
    'react/require-render-return': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-is-mounted': 1,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 1,
    'sort-vars': 1,
    'no-confusing-arrow': 1,
    'no-extra-bind': 1,
    'no-extra-semi': 1,
    'no-floating-decimal': 1,
    'no-useless-return': 1,
    'dot-notation': 1,
    'prettier/prettier': [1, { parser: 'babel' }],
    'jsx-quotes': 1,
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
