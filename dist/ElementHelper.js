/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@knighttower/js-dom-observer/dist/DomObserver.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@knighttower/js-dom-observer/dist/DomObserver.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Author Knighttower
// MIT License
// [2022] [Knighttower] https://github.com/knighttower
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./node_modules/@knighttower/js-dom-observer/dist sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomObserver = exports.cleanup = exports.removeOnNodeChange = exports.addOnNodeChange = exports.executeOnNodeChanged = void 0;
    /**
     * @module DomObserver
     * Detect DOM changes
     * @name DomObserver
     * @param {window} selector
     * @param {Function}
     * @return DomObserver
     * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
     * @example DomObserver.removeOnNodeChange('elementIdentifier')
     */
    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged = {};
    exports.executeOnNodeChanged = executeOnNodeChanged;
    /**
     * When node change
     * @param {String} id
     * @param {Function} callback Callback when any node changes/ add/deleted/modified
     * @return {Void}
     */
    const addOnNodeChange = (id, callback) => {
        if (callback) {
            executeOnNodeChanged[id] = callback;
        }
    };
    exports.addOnNodeChange = addOnNodeChange;
    /**
     * Remove from node change
     * @param {String} id
     * @return {Void}
     */
    const removeOnNodeChange = (id) => {
        if (id) {
            delete executeOnNodeChanged[id];
        }
    };
    exports.removeOnNodeChange = removeOnNodeChange;
    /**
     * Deep cleanup
     * @return {Void}
     */
    const cleanup = () => {
        Object.keys(executeOnNodeChanged).forEach((key) => delete executeOnNodeChanged[key]);
    };
    exports.cleanup = cleanup;
    /**
     * Observer
     * @private
     * @return {MutationObserver}
     */
    (() => {
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    for (const id in executeOnNodeChanged) {
                        executeOnNodeChanged[id]();
                    }
                }
            }
        };
        const config = {
            childList: true,
            subtree: true,
        };
        const observer = new MutationObserver(callback);
        observer.observe(document.body, config);
    })();
    const DomObserver = {
        executeOnNodeChanged,
        addOnNodeChange,
        removeOnNodeChange,
        cleanup,
    };
    exports.DomObserver = DomObserver;
    exports.default = DomObserver;
});


/***/ }),

/***/ "./node_modules/@knighttower/js-dom-observer/dist sync recursive":
/*!**************************************************************!*\
  !*** ./node_modules/@knighttower/js-dom-observer/dist/ sync ***!
  \**************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@knighttower/js-dom-observer/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/ElementHelper.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementHelper: () => (/* binding */ ElementHelper),
/* harmony export */   "default": () => (/* binding */ ElementHelper)
/* harmony export */ });
/* harmony import */ var _knighttower_js_dom_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @knighttower/js-dom-observer */ "./node_modules/@knighttower/js-dom-observer/dist/DomObserver.js");
/* harmony import */ var _knighttower_js_dom_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_knighttower_js_dom_observer__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Author Knighttower
// MIT License
// Copyright (c) [2022] [Knighttower] https://github.com/knighttower



/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {String|Object} selector Class or ID or DOM element
 * @param {String} scope The scope to search in, window, document, dom element. Defaults to document
 * @return {Object}
 * @example new ElementHelper('elementSelector')
 * @example new ElementHelper('elementSelector', domElement|window|document)
 *
 */
var ElementHelper = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector
   * @return {Object}
   */
  function ElementHelper(selector) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    _classCallCheck(this, ElementHelper);
    this.selector = selector;
    if (_typeof(selector) === 'object') {
      this.domElement = selector;
    } else if (String(selector).includes('//')) {
      this.domElement = this.getElementByXpath(selector);
    } else {
      this.domElement = scope.querySelector(selector);
    }
  }

  // =========================================
  // --> Public
  // --------------------------

  /**
   * Check if the element exists or is visible. It will keep querying
   * @return {Boolean}
   */
  _createClass(ElementHelper, [{
    key: "isInDom",
    value: function isInDom() {
      var _this$domElement;
      return Boolean((_this$domElement = this.domElement) === null || _this$domElement === void 0 ? void 0 : _this$domElement.outerHTML);
    }

    /**
     * Wait for element exists or is visible. It will keep querying
     * @function whenInDom
     * @return {Promise}
     */
  }, {
    key: "whenInDom",
    value: function whenInDom() {
      var $this = this;
      var callbackId = Date.now() + Math.floor(Math.random() * 1000);
      return new Promise(function (resolveThis) {
        if (!$this.isInDom()) {
          _knighttower_js_dom_observer__WEBPACK_IMPORTED_MODULE_0___default().addOnNodeChange(callbackId, function () {
            var element = new ElementHelper($this.selector);
            if (element.isInDom()) {
              $this = element;
              resolveThis($this);
              _knighttower_js_dom_observer__WEBPACK_IMPORTED_MODULE_0___default().removeOnNodeChange(callbackId);
            }
          });
        } else {
          resolveThis($this);
        }
      });
    }

    /**
     * Find element by Xpath string
     * @param {String} xpath
     * @example getElementByXpath("//html[1]/body[1]/div[1]")
     * @return {Object} DOM element
     */
  }, {
    key: "getElementByXpath",
    value: function getElementByXpath(xpath) {
      return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    /**
     * Get the element xpath string
     * @author Based on https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reload-to-the-same-place-even-if/2631931#2631931
     * @return {String}
     */
  }, {
    key: "getXpathTo",
    value: function getXpathTo() {
      var element = this.domElement;
      if (element.id) {
        return "//*[@id='" + element.id + "']";
      }
      if (element === document.body) {
        return '//' + element.tagName;
      }
      var ix = 0;
      var siblings = element.parentNode.childNodes;
      for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element) {
          return new ElementHelper(element.parentNode).getXpathTo() + '/' + element.tagName + '[' + (ix + 1) + ']';
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
          ix++;
        }
      }
    }

    /**
     * Get the element attribute, but parse it if it is an object or array
     * @param {String} attr Atrribute name
     * @return {String|Array|Object|Null}
     */
  }, {
    key: "getAttribute",
    value: function getAttribute(attr) {
      return this.domElement.getAttribute(attr) || null;
    }

    /**
     * Create a unique has for the element derived from its xpath
     * @author Based on https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
     * @return {String}
     */
  }, {
    key: "getHash",
    value: function getHash() {
      var string = String(this.getXpathTo());
      var hash = 0;
      if (string.length === 0) {
        return hash;
      }
      for (var i = 0; i < string.length; i++) {
        var _char = string.charCodeAt(i);
        hash = (hash << 5) - hash + _char;
        hash = hash & hash;
      }
      return hash;
    }
  }]);
  return ElementHelper;
}();
/**
 * Future
 * @private
 * @todo enhance to extend the prototype like https://stackoverflow.com/questions/779880/in-javascript-can-you-extend-the-dom
 */

})();

window.ElementHelper = __webpack_exports__;
/******/ })()
;