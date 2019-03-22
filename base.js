module.exports = {
  extends: [
    "prettier",
    "plugin:promise/recommended",
    "plugin:lodash/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
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
    "no-continue": "off",
    "no-empty": "off",
    "no-await-in-loop": "off",
    // Prevent people from re-defining names like "Date", "Error", etc.
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "all",
        // Some of those are here: https://www.w3schools.com/js/js_reserved.asp
        // But we will allow for productivity.
        allow: [
          "Text",
          "id",
          "type",
          "crypto",
          "event",
          "Event",
          "parent",
          "name",
          "assert",
          "server",
          "context",
          "status",
          "form",
          "test",
        ],
      },
    ],
    // It's ok
    "no-else-return": "off",
    // Because some external APIs do not use camelCase
    "dot-notation": "off",
    // It's ok to not use destructuring sometimes
    "prefer-destructuring": "off",
    // Allow for-of
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    // Allow creating promises
    "promise/avoid-new": "off",
    // Prefer `await fetch()` over `fetch().then()`
    "promise/prefer-await-to-then": "warn",
    // Do not enforce lodash
    "lodash/prefer-lodash-method": "off",
    // Allow any use of paths
    "lodash/path-style": "off",
    // Not required
    "lodash/prefer-constant": "off",
  },
};
