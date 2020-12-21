module.exports = {
  extends: [
    "plugin:cypress/recommended",
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
    camelcase: 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        directory: ".",
      },
    },
  },
};
