module.exports = {
  extends: [
    "airbnb",
    "@tokenfoundry/eslint-config/base",
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
  plugins: ["react"],
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
    // Do not force `export default`
    "import/prefer-default-export": "off",
  },
};
