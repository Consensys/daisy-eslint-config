module.exports = {
  "extends": [
    "tokenfoundry/common",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  "rules": {
    "prettier/prettier": ["error", {
      printWidth: 80,
      trailingComma: "all",
    }],
  },
};
