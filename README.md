# ElementHelper Class Documentation

```javascript
yarn add @knighttower/element-helper
```  
```javascript
import ElementHelper from '@knighttower/element-helper';
```  

## Overview

`ElementHelper` is a JavaScript class that adds extra functionality to interact with DOM elements. This class is part of a larger project and can be imported from the `@knighttower/adaptive` package.

## Table of Contents

1. [Author and License](#author-and-license)
2. [Class Definition](#class-definition)
3. [Constructor](#constructor)
4. [Public Methods](#public-methods)
5. [Private Section](#private-section)
6. [Examples](#examples)

### Author and License

- **Author**: Knighttower
- **License**: MIT
- **Source Code**: [GitHub Repository](https://github.com/knighttower)

### Class Definition

```javascript
export default class ElementHelper
```

#### Parameters

- `selector (String|Object)`: Class, ID, or DOM element.
- `scope (String)`: The scope to search in. Defaults to `document`.

#### Return

- Returns an `Object` instance of `ElementHelper`.

#### Examples

```javascript
const element = new ElementHelper('elementSelector') // return the DOM element
const element = new ElementHelper('elementSelector', domElement|window|document)
```

### Constructor

```javascript
constructor(selector, scope = document)
```

Initializes the `ElementHelper` class with the given `selector` and `scope`.

### Public Methods

#### `isInDom()`

- **Returns**: `Boolean`
- **Description**: Checks if the element exists or is visible in the DOM.

#### `whenInDom()`

- **Returns**: `Promise`
- **Description**: Waits until the element exists or becomes visible in the DOM.
- const element = new ElementHelper('elementSelector').whenInDom() // element.then() => {}

#### `getElementByXpath(xpath)`

- **Parameters**: `xpath (String)`
- **Returns**: `Object` (DOM element)
- **Description**: Finds an element by its XPath string.
- Example: getElementByXpath("//html[1]/body[1]/div[1]")

#### `getXpathTo()`

- **Returns**: `String`
- **Description**: Returns the XPath string of the element.
- Example: const elementPath = new ElementHelper('elementSelector').getXpathTo()

#### `getAttribute(attr)`

- **Parameters**: `attr (String)`
- **Returns**: `String|Array|Object|Null`
- **Description**: Gets the value of the specified attribute.
- Example: const elementAttr = new ElementHelper('elementSelector').getAttribute('style') // returns all inline styles
#### `getHash()`

- **Returns**: `String`
- **Description**: Creates a unique hash for the element derived from its XPath.

### Private Section

This section is reserved for future enhancements, possibly to extend the prototype of DOM elements.

### Examples

```javascript
const element = new ElementHelper('.my-class');
if (element.isInDom()) {
  // Do something
}

element.whenInDom().then((elem) => {
  // Do something when element is in DOM
});

const attrValue = element.getAttribute('data-attribute');
```

This documentation covers all the features, methods, and examples mentioned in the provided code. Please note that the code relies on `DomObserver` from the `@knighttower/js-dom-observer` package, which is not covered in this documentation.
