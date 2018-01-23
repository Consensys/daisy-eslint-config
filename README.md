# @tokenfoundry/eslint-config

Please use this configuration to maintain a common and homogeneous code base.

## Install

Install this package as any other package with:

```sh
yarn add --dev eslint @tokenfoundry/eslint-config
```

Create a `.eslintrc.js` file in the root of your project:

```js
// .eslintrc.js

module.exports = {
  extends: "@tokenfoundry/eslint-config/react",
};
```

Create a `.eslintignore` and add any files that are bundled, builded and/or _transpiled_:

```txt
!.eslintrc.js # allow self-formating

dist
lib
```

In the `package.json` file add the following in the `"scripts"` section:

```diff
 {
   ...
   "scripts": {
     ...
+    "lint": "eslint src .eslintrc.js",
   }
 }
```

> Assuming that the main code is in the `src` directory, change as needed.

## Usage

To lint the files run:

```sh
yarn lint
```

To lint the files and **auto-format** run:

```sh
yarn lint --fix
```
