module.exports = {
  extends: [
    "airbnb",
    "@daisypayments/eslint-config/base",
    "plugin:react/recommended",
    "prettier/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "all",
      },
    ],
    // It's ok not using destructing
    "react/destructuring-assignment": "off",
    // Do not use .jsx
    "react/jsx-filename-extension": "off",
    // Allow escaping text like: <span>{`You don't have...`}</span>
    "react/jsx-curly-brace-presence": "off",
    // Checks rules of Hooks
    "react-hooks/rules-of-hooks": "error",
    // Checks effect dependencies
    "react-hooks/exhaustive-deps": "warn",
    // Do not force `export default`
    "import/prefer-default-export": "off",
    // React hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
