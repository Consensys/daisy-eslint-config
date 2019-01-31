# @tokenfoundry/eslint-config

Please use this configuration to maintain a common and homogeneous code base.

## Install

Install this package as any other package with:

```sh
yarn add --dev eslint @tokenfoundry/eslint-config
```

Create a `.eslintignore` and add any files that are bundled, builded and/or _transpiled_:

```txt
!.eslintrc.js # allow self-formating

dist
lib
```

In the `package.json` file add the following in the `"scripts"` section:

```js
 {
   // ...
   "scripts": {
     // ...
     "lint": "eslint src __tests__ .eslintrc.js  --ext .js --ext .jsx"
   },
 }
```

> Assuming that the main code is in the `src` directory, change as needed.

### Configure for Node.js

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js

module.exports = {
  extends: ["@tokenfoundry/eslint-config"],
};
```

### Configure for ESNext (Babel) projects

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js

module.exports = {
  extends: ["@tokenfoundry/eslint-config/babel"],
};
```

### Configure for React.js and React-Native

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js

module.exports = {
  extends: ["@tokenfoundry/eslint-config/react"],
};
```

## Usage

To lint the files run:

```sh
yarn lint
```

To lint the files and **auto-format** run:

```sh
yarn lint --fix
```

> **Do not** run `yarn lint:css --fix` it will break your component file.

### Recommended usage

Install [`typicode/husky`](https://github.com/typicode/husky) so you always have to run the linter before committing:

```sh
yarn add --dev husky@next
```

And add to the `package.json`:

```json
 {
  // ...
  "scripts": {
    // ...
    "lint": "eslint src __tests__ .eslintrc.js  --ext .js --ext .jsx"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint"
    }
  },
}
```

### Custom rules

Modify the `.eslintrc.js` and add a `"rules"` field:

```js
// .eslintrc.js

module.exports = {
  extends: ["@tokenfoundry/eslint-config/react"],
  rules: {
    "react/prop-types": 0, // disabled
    "react/display-name": 1, // warning
    "react/jsx-boolean-value": 2, // throw error
  },
};
```

## Publishing

To publish and update of this package run:

```sh
# git add ...
# git commit ...

yarn publish --access=public
git push --follow-tags
```
