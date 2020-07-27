module.exports = {
  extends: [
    "@jungsoft/eslint-config/react",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tx", ".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [2, {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {
        directory: ".",
      },
    },
  },
};
