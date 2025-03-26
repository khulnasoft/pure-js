# ✨ Pure JS – Polyfill the Future!

![Pure JS](https://img.shields.io/badge/PureJS-ECMAScript%20Polyfills-blue)

Pure JS is a modular JavaScript library that provides polyfills and shims for ECMAScript features, enabling developers to use modern JavaScript features in environments that do not natively support them. This library focuses on providing a "pure" implementation, avoiding global pollution by exporting features as modules.

## 🚀 Features

✅ Polyfills for ECMAScript features, including:
- `Map`, `Set`, `WeakMap`, `WeakSet`
- `Symbol` and well-known symbols (`Symbol.asyncDispose`, `Symbol.dispose`)
- Iterators & Async Iterators
- Typed Arrays
- Promises & Observables
- Utility functions (`queueMicrotask`, `structuredClone`)

✅ **Modular Design** - Import only what you need

✅ **Compatibility** - Supports both modern and legacy JavaScript environments

## 📂 Directory Structure

### 🔹 `override/internals/`
Contains internal utilities and helpers used across the library:
- **`map-helpers.js`** - Helper methods for `Map` operations.
- **`set-helpers.js`** - Helper methods for `Set` operations.
- **`weak-map-helpers.js`** - Helper methods for `WeakMap` operations.
- **`weak-set-helpers.js`** - Helper methods for `WeakSet` operations.
- **`map-iterate.js`** - Implements iteration logic for `Map` objects.
- **`set-to-string-tag.js`** - Sets the `toStringTag` property for objects.
- **`define-built-ins.js`** - Defines multiple built-in properties on a target object.

### 🔹 `override/modules/`
Polyfills for specific ECMAScript features:
- **`esnext.symbol.async-dispose.js`** - Defines `Symbol.asyncDispose`.
- **`esnext.symbol.dispose.js`** - Defines `Symbol.dispose`.
- **`es.regexp.constructor.js`** - Ensures correct `RegExp` constructor behavior.
- **`web.dom-collections.iterator.js`** - Adds iterator support for DOM collections.

### 🔹 `override/internals/collection.js`
Defines logic for managing collection constructors (`Map`, `Set`, `WeakMap`, `WeakSet`).

### 🔹 `package.json`
Includes metadata about the project (name, author, license, dependencies) and scripts for post-installation tasks.

## 📦 Installation

To install Pure JS via npm, run:

```sh
npm install pure-javascript
```

## 📖 Usage

Import specific polyfills as needed:

```js
import "pure-javascript/override/modules/esnext.symbol.dispose.js";

const obj = {
  [Symbol.dispose]() {
    console.log("Disposed!");
  },
};

obj[Symbol.dispose]();
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve Pure JS.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

