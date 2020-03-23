module.exports = {
  extends: ["plugin:vue-libs/recommended"],
  parser: 'babel-eslint',
  rules: {
    "comma-dangle": [2, "always-multiline"],
    "no-var": "error",
    "no-unused-vars": "warn",
    "camelcase": "off"
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
