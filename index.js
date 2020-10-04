module.exports = {
  extends: [
    "./base",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/react-a11y",
    "prettier",
    "prettier/react",
  ].map(require.resolve),
  env: {
    browser: true,
    "shared-node-browser": true,
  },
  rules: {},
};
