module.exports = {
  extends: ["airbnb-base", "@daisypayments/eslint-config/base"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "all",
      },
    ],
    // Do not force `export default`
    "import/prefer-default-export": "off",
  },
};
