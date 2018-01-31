module.exports = {
  extends: [
    "prettier",
    "plugin:promise/recommended",
    "plugin:lodash/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ["prettier", "promise", "lodash"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
      },
    ],
    // Because some external APIs do not use camelCase
    "dot-notation": "off",
    // Allow for-of
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    // Allow creating promises
    "promise/avoid-new": "off",
    // Prefer `await fetch()` over `fetch().then()`
    "promise/prefer-await-to-then": "warn",
    // Force `import { map, noop } from "lodash-es";`
    "lodash/import-scope": ["error", "member"],
    // Do not enforce lodash
    "lodash/prefer-lodash-method": "off",
    // Allow any use of paths
    "lodash/path-style": "off",
  },
};
