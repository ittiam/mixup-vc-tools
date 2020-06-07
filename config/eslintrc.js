module.exports = {
  extends: ['plugin:vue/recommended', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-var': 'error',
    'no-console': [2, { allow: ['warn', 'error'] }],
    'object-shorthand': 2,
    'no-unused-vars': [2, { ignoreRestSiblings: true, argsIgnorePattern: '^h$' }],
    'no-undef': 2,
    camelcase: 'off',
    'no-extra-boolean-cast': 'off',
    semi: ['error', 'always'],
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/comment-directive': 'off',
    'vue/prop-name-casing': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
  globals: {
    expect: true,
    document: true,
    window: true,
  },
  env: {
    jest: true,
    node: true,
    mocha: true,
  },
};
