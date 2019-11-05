const { readdirSync } = require('fs');
const path = require('path');

const { version } = require('react/package.json');

const getPackageDependencies = () =>
  readdirSync(path.join(__dirname, 'packages'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(__dirname, 'packages', dirent.name));

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:eslint-comments/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'filenames', 'jest'],
  settings: {
    react: { version },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./'],
      },
    },
  },
  rules: {
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'no-invalid-this': 'off',
    'no-unused-expressions': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-use': [
      'error',
      { allow: ['eslint-disable-next-line'] },
    ],
    'filenames/match-exported': 'error',
    'filenames/match-regex': ['error', /^\.?.*(\.config|\.test)?$/i, true],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          ['index', 'sibling', 'parent'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [...getPackageDependencies(), __dirname],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-sort-props': 'error',

    // XXX fix and enforce these rules
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-unescaped-entities': 'off',

    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  overrides: [
    {
      files: ['*.md'],
      plugins: ['markdown'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'prettier/prettier': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
  env: {
    'jest/globals': true,
  },
  globals: {
    mount: true,
    shallow: true,
    render: true,
    mountWithIntl: true,
    shallowWithIntl: true,
    flushPromises: true,
  },
};
