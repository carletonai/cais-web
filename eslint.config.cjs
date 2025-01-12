const { FlatCompat } = require("@eslint/eslintrc");
const { configs } = require("eslint-plugin-react");
const compat = new FlatCompat({
  recommendedConfig: configs.recommended,
});

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2020: true,
      },
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    plugins: {
      "react-refresh": require("eslint-plugin-react-refresh"),
    },
    rules: {
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      semi: ["error", "always"],
    },
  },
  ...compat.config({
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
  }),
];
