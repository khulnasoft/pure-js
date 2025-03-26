# Pure JS

Pure JS is a modular JavaScript library that provides polyfills and shims for ECMAScript features, enabling developers to use modern JavaScript features in environments that do not natively support them. This library focuses on providing a "pure" implementation, avoiding global pollution by exporting features as modules.

## Features

- Polyfills for ECMAScript features, including:
  - `Map`, `Set`, `WeakMap`, `WeakSet`
  - `Symbol` and well-known symbols like `Symbol.asyncDispose` and `Symbol.dispose`
  - Iterators and Async Iterators
  - Typed Arrays
  - Promises and Observables
  - Utility functions like `queueMicrotask` and `structuredClone`
- Modular design for selective imports
- Compatibility with modern and legacy JavaScript environments

## Directory Structure

### `override/internals/`
This directory contains internal utilities and helpers used across the library. Key files include:

- **`map-helpers.js`**: Provides helper methods for `Map` operations.
- **`set-helpers.js`**: Provides helper methods for `Set` operations.
- **`weak-map-helpers.js`**: Provides helper methods for `WeakMap` operations.
- **`weak-set-helpers.js`**: Provides helper methods for `WeakSet` operations.
- **`map-iterate.js`**: Implements iteration logic for `Map` objects.
- **`set-to-string-tag.js`**: Sets the `toStringTag` property for objects.
- **`define-built-ins.js`**: Defines multiple built-in properties on a target object.

### `override/modules/`
This directory contains polyfills for specific ECMAScript features. Key files include:

- **`esnext.symbol.async-dispose.js`**: Defines the `Symbol.asyncDispose` well-known symbol.
- **`esnext.symbol.dispose.js`**: Defines the `Symbol.dispose` well-known symbol.
- **`es.regexp.constructor.js`**: Ensures proper behavior of the `RegExp` constructor.
- **`web.dom-collections.iterator.js`**: Adds iterator support for DOM collections.

### `override/internals/collection.js`
Defines logic for creating and managing collection constructors like `Map`, `Set`, `WeakMap`, and `WeakSet`.

### `package.json`
The `package.json` file includes metadata about the project, such as its name, author, license, and dependencies. It also specifies scripts for post-installation tasks.

## Installation

To install the library, use npm:

```sh
npm install pure-js