module.exports = {
  extends: [
    ...[
    "./base",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/react-a11y",
  ].map(require.resolve),
  "prettier",
  "prettier/react",
],
  env: {
    browser: true,
    "shared-node-browser": true,
  },
  rules: {},
};
