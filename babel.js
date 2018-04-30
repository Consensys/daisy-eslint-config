module.exports = {
  extends: ["airbnb-base", "@tokenfoundry/eslint-config/base"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
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
