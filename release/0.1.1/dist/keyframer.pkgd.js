/*
Copyright (c) 2019 Daybrush
name: keyframer
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keyframer.git
version: 0.0.3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Keyframer = {}));
})(this, (function (exports) { 'use strict';

  /*
  Copyright (c) 2018 Daybrush
  @name: @daybrush/utils
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/utils
  @version 1.11.0
  */
  /**
  * @namespace
  * @name Consts
  */
  /**
  * get string "rgb"
  * @memberof Color
  * @example
  import {RGB} from "@daybrush/utils";

  console.log(RGB); // "rgb"
  */
  var RGB = "rgb";
  /**
  * get string "rgba"
  * @memberof Color
  * @example
  import {RGBA} from "@daybrush/utils";

  console.log(RGBA); // "rgba"
  */
  var RGBA = "rgba";
  /**
  * get string "hsl"
  * @memberof Color
  * @example
  import {HSL} from "@daybrush/utils";

  console.log(HSL); // "hsl"
  */
  var HSL = "hsl";
  /**
  * get string "hsla"
  * @memberof Color
  * @example
  import {HSLA} from "@daybrush/utils";

  console.log(HSLA); // "hsla"
  */
  var HSLA = "hsla";
  /**
  * gets an array of color models.
  * @memberof Color
  * @example
  import {COLOR_MODELS} from "@daybrush/utils";

  console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
  */
  var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
  /**
  * get string "function"
  * @memberof Consts
  * @example
  import {FUNCTION} from "@daybrush/utils";

  console.log(FUNCTION); // "function"
  */
  var FUNCTION = "function";
  /**
  * get string "property"
  * @memberof Consts
  * @example
  import {PROPERTY} from "@daybrush/utils";

  console.log(PROPERTY); // "property"
  */
  var PROPERTY = "property";
  /**
  * get string "array"
  * @memberof Consts
  * @example
  import {ARRAY} from "@daybrush/utils";

  console.log(ARRAY); // "array"
  */
  var ARRAY = "array";
  /**
  * get string "object"
  * @memberof Consts
  * @example
  import {OBJECT} from "@daybrush/utils";

  console.log(OBJECT); // "object"
  */
  var OBJECT = "object";
  /**
  * get string "string"
  * @memberof Consts
  * @example
  import {STRING} from "@daybrush/utils";

  console.log(STRING); // "string"
  */
  var STRING = "string";
  /**
  * get string "number"
  * @memberof Consts
  * @example
  import {NUMBER} from "@daybrush/utils";

  console.log(NUMBER); // "number"
  */
  var NUMBER = "number";
  /**
  * get string "undefined"
  * @memberof Consts
  * @example
  import {UNDEFINED} from "@daybrush/utils";

  console.log(UNDEFINED); // "undefined"
  */
  var UNDEFINED = "undefined";
  /**
  * Check whether the environment is window or node.js.
  * @memberof Consts
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */
  var IS_WINDOW = typeof window !== UNDEFINED;
  /**
  * Check whether the environment is window or node.js.
  * @memberof Consts
  * @name document
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */
  var doc = typeof document !== UNDEFINED && document; // FIXME: this type maybe false
  var prefixes = ["webkit", "ms", "moz", "o"];
  /**
   * @namespace CrossBrowser
   */
  /**
  * Get a CSS property with a vendor prefix that supports cross browser.
  * @function
  * @param {string} property - A CSS property
  * @return {string} CSS property with cross-browser vendor prefix
  * @memberof CrossBrowser
  * @example
  import {getCrossBrowserProperty} from "@daybrush/utils";

  console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
  console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
  */
  var getCrossBrowserProperty = function (property) {
    if (!doc) {
      return "";
    }
    var styles = (doc.body || doc.documentElement).style;
    var length = prefixes.length;
    if (typeof styles[property] !== UNDEFINED) {
      return property;
    }
    for (var i = 0; i < length; ++i) {
      var name = "-" + prefixes[i] + "-" + property;
      if (typeof styles[name] !== UNDEFINED) {
        return name;
      }
    }
    return "";
  };
  /**
  * get string "transfrom" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {TRANSFORM} from "@daybrush/utils";

  console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
  */
  var TRANSFORM = /*#__PURE__*/getCrossBrowserProperty("transform");
  /**
  * get string "filter" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {FILTER} from "@daybrush/utils";

  console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
  */
  var FILTER = /*#__PURE__*/getCrossBrowserProperty("filter");
  /**
  * get string "animation" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {ANIMATION} from "@daybrush/utils";

  console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
  */
  var ANIMATION = /*#__PURE__*/getCrossBrowserProperty("animation");
  /**
  * get string "keyframes" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {KEYFRAMES} from "@daybrush/utils";

  console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
  */
  var KEYFRAMES = /*#__PURE__*/ANIMATION.replace("animation", "keyframes");
  var OPEN_CLOSED_CHARACTERS = [{
    open: "(",
    close: ")"
  }, {
    open: "\"",
    close: "\""
  }, {
    open: "'",
    close: "'"
  }, {
    open: "\\\"",
    close: "\\\""
  }, {
    open: "\\'",
    close: "\\'"
  }];

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  }

  /**
  * @namespace
  * @name Utils
  */
  /**
   * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
   * @memberof Utils
   * @param - The first number
   * @param - The second number
   * @param - The first number to base on the inner product
   * @param - The second number to base on the inner product
   * @return - Returns the inner product
  import { dot } from "@daybrush/utils";

  console.log(dot(0, 15, 2, 3)); // 6
  console.log(dot(5, 15, 2, 3)); // 9
  console.log(dot(5, 15, 1, 1)); // 10
   */
  function dot$1(a1, a2, b1, b2) {
    return (a1 * b2 + a2 * b1) / (b1 + b2);
  }
  /**
  * Check the type that the value is undefined.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {boolean} true if the type is correct, false otherwise
  * @example
  import {isUndefined} from "@daybrush/utils";

  console.log(isUndefined(undefined)); // true
  console.log(isUndefined("")); // false
  console.log(isUndefined(1)); // false
  console.log(isUndefined(null)); // false
  */
  function isUndefined$1(value) {
    return typeof value === UNDEFINED;
  }
  /**
  * Check the type that the value is object.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isObject} from "@daybrush/utils";

  console.log(isObject({})); // true
  console.log(isObject(undefined)); // false
  console.log(isObject("")); // false
  console.log(isObject(null)); // false
  */
  function isObject$1(value) {
    return value && typeof value === OBJECT;
  }
  /**
  * Check the type that the value is isArray.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isArray} from "@daybrush/utils";

  console.log(isArray([])); // true
  console.log(isArray({})); // false
  console.log(isArray(undefined)); // false
  console.log(isArray(null)); // false
  */
  function isArray(value) {
    return Array.isArray(value);
  }
  /**
  * Check the type that the value is string.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isString} from "@daybrush/utils";

  console.log(isString("1234")); // true
  console.log(isString(undefined)); // false
  console.log(isString(1)); // false
  console.log(isString(null)); // false
  */
  function isString(value) {
    return typeof value === STRING;
  }
  /**
  * Check the type that the value is function.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isFunction} from "@daybrush/utils";

  console.log(isFunction(function a() {})); // true
  console.log(isFunction(() => {})); // true
  console.log(isFunction("1234")); // false
  console.log(isFunction(1)); // false
  console.log(isFunction(null)); // false
  */
  function isFunction$1(value) {
    return typeof value === FUNCTION;
  }
  function isEqualSeparator(character, separator) {
    var isCharacterSpace = character === "" || character == " ";
    var isSeparatorSpace = separator === "" || separator == " ";
    return isSeparatorSpace && isCharacterSpace || character === separator;
  }
  function findOpen(openCharacter, texts, index, length, openCloseCharacters) {
    var isIgnore = findIgnore(openCharacter, texts, index);
    if (!isIgnore) {
      return findClose(openCharacter, texts, index + 1, length, openCloseCharacters);
    }
    return index;
  }
  function findIgnore(character, texts, index) {
    if (!character.ignore) {
      return null;
    }
    var otherText = texts.slice(Math.max(index - 3, 0), index + 3).join("");
    return new RegExp(character.ignore).exec(otherText);
  }
  function findClose(closeCharacter, texts, index, length, openCloseCharacters) {
    var _loop_1 = function (i) {
      var character = texts[i].trim();
      if (character === closeCharacter.close && !findIgnore(closeCharacter, texts, i)) {
        return {
          value: i
        };
      }
      var nextIndex = i;
      // re open
      var openCharacter = find(openCloseCharacters, function (_a) {
        var open = _a.open;
        return open === character;
      });
      if (openCharacter) {
        nextIndex = findOpen(openCharacter, texts, i, length, openCloseCharacters);
      }
      if (nextIndex === -1) {
        return out_i_1 = i, "break";
      }
      i = nextIndex;
      out_i_1 = i;
    };
    var out_i_1;
    for (var i = index; i < length; ++i) {
      var state_1 = _loop_1(i);
      i = out_i_1;
      if (typeof state_1 === "object") return state_1.value;
      if (state_1 === "break") break;
    }
    return -1;
  }
  function splitText(text, splitOptions) {
    var _a = isString(splitOptions) ? {
        separator: splitOptions
      } : splitOptions,
      _b = _a.separator,
      separator = _b === void 0 ? "," : _b,
      isSeparateFirst = _a.isSeparateFirst,
      isSeparateOnlyOpenClose = _a.isSeparateOnlyOpenClose,
      _c = _a.isSeparateOpenClose,
      isSeparateOpenClose = _c === void 0 ? isSeparateOnlyOpenClose : _c,
      _d = _a.openCloseCharacters,
      openCloseCharacters = _d === void 0 ? OPEN_CLOSED_CHARACTERS : _d;
    var openClosedText = openCloseCharacters.map(function (_a) {
      var open = _a.open,
        close = _a.close;
      if (open === close) {
        return open;
      }
      return open + "|" + close;
    }).join("|");
    var regexText = "(\\s*" + separator + "\\s*|" + openClosedText + "|\\s+)";
    var regex = new RegExp(regexText, "g");
    var texts = text.split(regex).filter(function (chr) {
      return chr && chr !== "undefined";
    });
    var length = texts.length;
    var values = [];
    var tempValues = [];
    function resetTemp() {
      if (tempValues.length) {
        values.push(tempValues.join(""));
        tempValues = [];
        return true;
      }
      return false;
    }
    var _loop_2 = function (i) {
      var character = texts[i].trim();
      var nextIndex = i;
      var openCharacter = find(openCloseCharacters, function (_a) {
        var open = _a.open;
        return open === character;
      });
      var closeCharacter = find(openCloseCharacters, function (_a) {
        var close = _a.close;
        return close === character;
      });
      if (openCharacter) {
        nextIndex = findOpen(openCharacter, texts, i, length, openCloseCharacters);
        if (nextIndex !== -1 && isSeparateOpenClose) {
          if (resetTemp() && isSeparateFirst) {
            return out_i_2 = i, "break";
          }
          values.push(texts.slice(i, nextIndex + 1).join(""));
          i = nextIndex;
          if (isSeparateFirst) {
            return out_i_2 = i, "break";
          }
          return out_i_2 = i, "continue";
        }
      } else if (closeCharacter && !findIgnore(closeCharacter, texts, i)) {
        var nextOpenCloseCharacters = __spreadArrays$1(openCloseCharacters);
        nextOpenCloseCharacters.splice(openCloseCharacters.indexOf(closeCharacter), 1);
        return {
          value: splitText(text, {
            separator: separator,
            isSeparateFirst: isSeparateFirst,
            isSeparateOnlyOpenClose: isSeparateOnlyOpenClose,
            isSeparateOpenClose: isSeparateOpenClose,
            openCloseCharacters: nextOpenCloseCharacters
          })
        };
      } else if (isEqualSeparator(character, separator) && !isSeparateOnlyOpenClose) {
        resetTemp();
        if (isSeparateFirst) {
          return out_i_2 = i, "break";
        }
        return out_i_2 = i, "continue";
      }
      if (nextIndex === -1) {
        nextIndex = length - 1;
      }
      tempValues.push(texts.slice(i, nextIndex + 1).join(""));
      i = nextIndex;
      out_i_2 = i;
    };
    var out_i_2;
    for (var i = 0; i < length; ++i) {
      var state_2 = _loop_2(i);
      i = out_i_2;
      if (typeof state_2 === "object") return state_2.value;
      if (state_2 === "break") break;
    }
    if (tempValues.length) {
      values.push(tempValues.join(""));
    }
    return values;
  }
  /**
  * divide text by space.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {Array} divided texts
  * @example
  import {spliceSpace} from "@daybrush/utils";

  console.log(splitSpace("a b c d e f g"));
  // ["a", "b", "c", "d", "e", "f", "g"]
  console.log(splitSpace("'a,b' c 'd,e' f g"));
  // ["'a,b'", "c", "'d,e'", "f", "g"]
  */
  function splitSpace(text) {
    // divide comma(space)
    return splitText(text, "");
  }
  /**
  * divide text by comma.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {Array} divided texts
  * @example
  import {splitComma} from "@daybrush/utils";

  console.log(splitComma("a,b,c,d,e,f,g"));
  // ["a", "b", "c", "d", "e", "f", "g"]
  console.log(splitComma("'a,b',c,'d,e',f,g"));
  // ["'a,b'", "c", "'d,e'", "f", "g"]
  */
  function splitComma(text) {
    // divide comma(,)
    // "[^"]*"|'[^']*'
    return splitText(text, ",");
  }
  /**
  * divide text by bracket "(", ")".
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {object} divided texts
  * @example
  import {splitBracket} from "@daybrush/utils";

  console.log(splitBracket("a(1, 2)"));
  // {prefix: "a", value: "1, 2", suffix: ""}
  console.log(splitBracket("a(1, 2)b"));
  // {prefix: "a", value: "1, 2", suffix: "b"}
  */
  function splitBracket(text) {
    var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);
    if (!matches || matches.length < 4) {
      return {};
    } else {
      return {
        prefix: matches[1],
        value: matches[2],
        suffix: matches[3]
      };
    }
  }
  /**
  * divide text by number and unit.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {} divided texts
  * @example
  import {splitUnit} from "@daybrush/utils";

  console.log(splitUnit("10px"));
  // {prefix: "", value: 10, unit: "px"}
  console.log(splitUnit("-10px"));
  // {prefix: "", value: -10, unit: "px"}
  console.log(splitUnit("a10%"));
  // {prefix: "a", value: 10, unit: "%"}
  */
  function splitUnit(text) {
    var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);
    if (!matches) {
      return {
        prefix: "",
        unit: "",
        value: NaN
      };
    }
    var prefix = matches[1];
    var value = matches[2];
    var unit = matches[3];
    return {
      prefix: prefix,
      unit: unit,
      value: parseFloat(value)
    };
  }
  /**
  * transform strings to camel-case
  * @memberof Utils
  * @param {String} text - string
  * @return {String} camel-case string
  * @example
  import {camelize} from "@daybrush/utils";

  console.log(camelize("transform-origin")); // transformOrigin
  console.log(camelize("abcd_efg")); // abcdEfg
  console.log(camelize("abcd efg")); // abcdEfg
  */
  function camelize(str) {
    return str.replace(/[\s-_]+([^\s-_])/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  /**
  * transform a camelized string into a lowercased string.
  * @memberof Utils
  * @param {string} text - a camel-cased string
  * @param {string} [separator="-"] - a separator
  * @return {string}  a lowercased string
  * @example
  import {decamelize} from "@daybrush/utils";

  console.log(decamelize("transformOrigin")); // transform-origin
  console.log(decamelize("abcdEfg", "_")); // abcd_efg
  */
  function decamelize(str, separator) {
    if (separator === void 0) {
      separator = "-";
    }
    return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
      return "" + letter + separator + letter2.toLowerCase();
    });
  }
  /**
  * transforms something in an array into an array.
  * @memberof Utils
  * @param - Array form
  * @return an array
  * @example
  import {toArray} from "@daybrush/utils";

  const arr1 = toArray(document.querySelectorAll(".a")); // Element[]
  const arr2 = toArray(document.querySelectorAll<HTMLElement>(".a")); // HTMLElement[]
  */
  function toArray(value) {
    return [].slice.call(value);
  }
  /**
  * Date.now() method
  * @memberof CrossBrowser
  * @return {number} milliseconds
  * @example
  import {now} from "@daybrush/utils";

  console.log(now()); // 12121324241(milliseconds)
  */
  function now() {
    return Date.now ? Date.now() : new Date().getTime();
  }
  /**
  * Returns the index of the first element in the array that satisfies the provided testing function.
  * @function
  * @memberof CrossBrowser
  * @param - The array `findIndex` was called upon.
  * @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  * @param - Returns defaultIndex if not found by the function.
  * @example
  import { findIndex } from "@daybrush/utils";

  findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
  */
  function findIndex(arr, callback, defaultIndex) {
    if (defaultIndex === void 0) {
      defaultIndex = -1;
    }
    var length = arr.length;
    for (var i = 0; i < length; ++i) {
      if (callback(arr[i], i, arr)) {
        return i;
      }
    }
    return defaultIndex;
  }
  /**
  * Returns the value of the first element in the array that satisfies the provided testing function.
  * @function
  * @memberof CrossBrowser
  * @param - The array `find` was called upon.
  * @param - A function to execute on each value in the array,
  * @param - Returns defalutValue if not found by the function.
  * @example
  import { find } from "@daybrush/utils";

  find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
  */
  function find(arr, callback, defalutValue) {
    var index = findIndex(arr, callback);
    return index > -1 ? arr[index] : defalutValue;
  }
  /**
  * window.requestAnimationFrame() method with cross browser.
  * @function
  * @memberof CrossBrowser
  * @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
  * @return {number} id
  * @example
  import {requestAnimationFrame} from "@daybrush/utils";

  requestAnimationFrame((timestamp) => {
    console.log(timestamp);
  });
  */
  var requestAnimationFrame = /*#__PURE__*/function () {
    var firstTime = now();
    var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
    return raf ? raf.bind(window) : function (callback) {
      var currTime = now();
      var id = setTimeout(function () {
        callback(currTime - firstTime);
      }, 1000 / 60);
      return id;
    };
  }();
  /**
  * window.cancelAnimationFrame() method with cross browser.
  * @function
  * @memberof CrossBrowser
  * @param {number} handle - the id obtained through requestAnimationFrame method
  * @return {void}
  * @example
  import { requestAnimationFrame, cancelAnimationFrame } from "@daybrush/utils";

  const id = requestAnimationFrame((timestamp) => {
    console.log(timestamp);
  });

  cancelAnimationFrame(id);
  */
  var cancelAnimationFrame = /*#__PURE__*/function () {
    var caf = IS_WINDOW && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
    return caf ? caf.bind(window) : function (handle) {
      clearTimeout(handle);
    };
  }();
  /**
  * @function
  * @memberof Utils
  */
  function getKeys(obj) {
    return Object.keys(obj);
  }
  /**
  * @function
  * @memberof Utils
  */
  function sortOrders(keys, orders) {
    if (orders === void 0) {
      orders = [];
    }
    keys.sort(function (a, b) {
      var index1 = orders.indexOf(a);
      var index2 = orders.indexOf(b);
      if (index2 === -1 && index1 === -1) {
        return 0;
      }
      if (index1 === -1) {
        return 1;
      }
      if (index2 === -1) {
        return -1;
      }
      return index1 - index2;
    });
  }
  /**
  * calculate between min, max
  * @function
  * @memberof Utils
  */
  function between(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  /**
  * @namespace
  * @name Color
  */
  /**
  * Remove the # from the hex color.
  * @memberof Color
  * @param {} hex - hex color
  * @return {} hex color
  * @example
  import {cutHex} from "@daybrush/utils";

  console.log(cutHex("#000000")) // "000000"
  */
  function cutHex(hex) {
    return hex.replace("#", "");
  }
  /**
  * convert hex color to rgb color.
  * @memberof Color
  * @param {} hex - hex color
  * @return {} rgb color
  * @example
  import {hexToRGBA} from "@daybrush/utils";

  console.log(hexToRGBA("#00000005"));
  // [0, 0, 0, 1]
  console.log(hexToRGBA("#201045"));
  // [32, 16, 69, 1]
  */
  function hexToRGBA(hex) {
    var h = cutHex(hex);
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    var a = parseInt(h.substring(6, 8), 16) / 255;
    if (isNaN(a)) {
      a = 1;
    }
    return [r, g, b, a];
  }
  /**
  * convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
  * @memberof Color
  * @param {} hex - 3(or 4)-digit hex color
  * @return {} 6(or 8)-digit hex color
  * @example
  import {toFullHex} from "@daybrush/utils";

  console.log(toFullHex("#123")); // "#112233"
  console.log(toFullHex("#123a")); // "#112233aa"
  */
  function toFullHex(h) {
    var r = h.charAt(1);
    var g = h.charAt(2);
    var b = h.charAt(3);
    var a = h.charAt(4);
    var arr = ["#", r, r, g, g, b, b, a, a];
    return arr.join("");
  }
  /**
  * convert hsl color to rgba color.
  * @memberof Color
  * @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
  * @return {} rgba color
  * @example
  import {hslToRGBA} from "@daybrush/utils";

  console.log(hslToRGBA([150, 0.5, 0.4]));
  // [51, 153, 102, 1]
  */
  function hslToRGBA(hsl) {
    var _a;
    var h = hsl[0];
    var s = hsl[1];
    var l = hsl[2];
    if (h < 0) {
      h += Math.floor((Math.abs(h) + 360) / 360) * 360;
    }
    h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(h / 60 % 2 - 1));
    var m = l - c / 2;
    var rgb;
    if (h < 60) {
      rgb = [c, x, 0];
    } else if (h < 120) {
      rgb = [x, c, 0];
    } else if (h < 180) {
      rgb = [0, c, x];
    } else if (h < 240) {
      rgb = [0, x, c];
    } else if (h < 300) {
      rgb = [x, 0, c];
    } else if (h < 360) {
      rgb = [c, 0, x];
    } else {
      rgb = [0, 0, 0];
    }
    return [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), (_a = hsl[3]) !== null && _a !== void 0 ? _a : 1];
  }
  /**
  * convert string to rgba color.
  * @memberof Color
  * @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
  * @return {} rgba color
  * @example
  import {stringToRGBA} from "@daybrush/utils";

  console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
  console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
  console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
  */
  function stringToRGBA(color) {
    if (color.charAt(0) === "#") {
      if (color.length === 4 || color.length === 5) {
        return hexToRGBA(toFullHex(color));
      } else {
        return hexToRGBA(color);
      }
    } else if (color.indexOf("(") !== -1) {
      // in bracket.
      var _a = splitBracket(color),
        prefix = _a.prefix,
        value = _a.value;
      if (!prefix || !value) {
        return undefined;
      }
      var arr = splitComma(value);
      var colorArr = [0, 0, 0, 1];
      var length = arr.length;
      switch (prefix) {
        case RGB:
        case RGBA:
          for (var i = 0; i < length; ++i) {
            colorArr[i] = parseFloat(arr[i]);
          }
          return colorArr;
        case HSL:
        case HSLA:
          for (var i = 0; i < length; ++i) {
            if (arr[i].indexOf("%") !== -1) {
              colorArr[i] = parseFloat(arr[i]) / 100;
            } else {
              colorArr[i] = parseFloat(arr[i]);
            }
          }
          // hsl, hsla to rgba
          return hslToRGBA(colorArr);
      }
    }
    return undefined;
  }

  /**
   * Returns all element descendants of node that
   * match selectors.
   */
  /**
   * Checks if the specified class value exists in the element's class attribute.
   * @memberof DOM
   * @param - A DOMString containing one or more selectors to match
   * @param - If multi is true, a DOMString containing one or more selectors to match against.
   * @example
  import {$} from "@daybrush/utils";

  console.log($("div")); // div element
  console.log($("div", true)); // [div, div] elements
  */
  function $(selectors, multi) {
    if (!doc) {
      return multi ? [] : null;
    }
    return multi ? doc.querySelectorAll(selectors) : doc.querySelector(selectors);
  }
  /**
  * Checks if the specified class value exists in the element's class attribute.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to search
  * @return {boolean} return false if the class is not found.
  * @example
  import {hasClass} from "@daybrush/utils";

  console.log(hasClass(element, "start")); // true or false
  */
  function hasClass(element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    }
    return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  }
  /**
  * Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to add
  * @example
  import {addClass} from "@daybrush/utils";

  addClass(element, "start");
  */
  function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      element.className += " " + className;
    }
  }
  /**
  * Removes the specified class value.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to remove
  * @example
  import {removeClass} from "@daybrush/utils";

  removeClass(element, "start");
  */
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      element.className = element.className.replace(reg, " ");
    }
  }
  /**
  * Gets the CSS properties from the element.
  * @memberof DOM
  * @param elements - elements
  * @param properites - the CSS properties
  * @return returns CSS properties and values.
  * @example
  import {fromCSS} from "@daybrush/utils";

  console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
  */
  function fromCSS(elements, properties) {
    if (!elements || !properties || !properties.length) {
      return {};
    }
    var element;
    if (elements instanceof Element) {
      element = elements;
    } else if (elements.length) {
      element = elements[0];
    } else {
      return {};
    }
    var cssObject = {};
    var styles = window.getComputedStyle(element);
    var length = properties.length;
    for (var i = 0; i < length; ++i) {
      cssObject[properties[i]] = styles[properties[i]];
    }
    return cssObject;
  }
  /**
  * Sets up a function that will be called whenever the specified event is delivered to the target
  * @memberof DOM
  * @param - event target
  * @param - A case-sensitive string representing the event type to listen for.
  * @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
  * @param - An options object that specifies characteristics about the event listener.
  * @example
  import {addEvent} from "@daybrush/utils";

  addEvent(el, "click", e => {
    console.log(e);
  });
  */
  function addEvent(el, type, listener, options) {
    el.addEventListener(type, listener, options);
  }
  /**
  * removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
  * @memberof DOM
  * @param - event target
  * @param - A case-sensitive string representing the event type to listen for.
  * @param - The EventListener function of the event handler to remove from the event target.
  * @param - An options object that specifies characteristics about the event listener.
  * @example
  import {addEvent, removeEvent} from "@daybrush/utils";
  const listener = e => {
    console.log(e);
  };
  addEvent(el, "click", listener);
  removeEvent(el, "click", listener);
  */
  function removeEvent(el, type, listener, options) {
    el.removeEventListener(type, listener, options);
  }

  /*
  Copyright (c) 2019 Daybrush
  name: @scena/event-emitter
  license: MIT
  author: Daybrush
  repository: git+https://github.com/daybrush/gesture.git
  version: 1.0.5
  */

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __assign$1 = function () {
    __assign$1 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign$1.apply(this, arguments);
  };
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

    return r;
  }

  /**
   * Implement EventEmitter on object or component.
   */

  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      this._events = {};
    }
    /**
     * Add a listener to the registered event.
     * @param - Name of the event to be added
     * @param - listener function of the event to be added
     * @example
     * import EventEmitter from "@scena/event-emitter";
     * cosnt emitter = new EventEmitter();
     *
     * // Add listener in "a" event
     * emitter.on("a", () => {
     * });
     * // Add listeners
     * emitter.on({
     *  a: () => {},
     *  b: () => {},
     * });
     */


    var __proto = EventEmitter.prototype;

    __proto.on = function (eventName, listener) {
      if (isObject$1(eventName)) {
        for (var name in eventName) {
          this.on(name, eventName[name]);
        }
      } else {
        this._addEvent(eventName, listener, {});
      }

      return this;
    };
    /**
     * Remove listeners registered in the event target.
     * @param - Name of the event to be removed
     * @param - listener function of the event to be removed
     * @example
     * import EventEmitter from "@scena/event-emitter";
     * cosnt emitter = new EventEmitter();
     *
     * // Remove all listeners.
     * emitter.off();
     *
     * // Remove all listeners in "A" event.
     * emitter.off("a");
     *
     *
     * // Remove "listener" listener in "a" event.
     * emitter.off("a", listener);
     */


    __proto.off = function (eventName, listener) {
      if (!eventName) {
        this._events = {};
      } else if (isObject$1(eventName)) {
        for (var name in eventName) {
          this.off(name);
        }
      } else if (!listener) {
        this._events[eventName] = [];
      } else {
        var events = this._events[eventName];

        if (events) {
          var index = findIndex(events, function (e) {
            return e.listener === listener;
          });

          if (index > -1) {
            events.splice(index, 1);
          }
        }
      }

      return this;
    };
    /**
     * Add a disposable listener and Use promise to the registered event.
     * @param - Name of the event to be added
     * @param - disposable listener function of the event to be added
     * @example
     * import EventEmitter from "@scena/event-emitter";
     * cosnt emitter = new EventEmitter();
     *
     * // Add a disposable listener in "a" event
     * emitter.once("a", () => {
     * });
     *
     * // Use Promise
     * emitter.once("a").then(e => {
     * });
     */


    __proto.once = function (eventName, listener) {
      var _this = this;

      if (listener) {
        this._addEvent(eventName, listener, {
          once: true
        });
      }

      return new Promise(function (resolve) {
        _this._addEvent(eventName, resolve, {
          once: true
        });
      });
    };
    /**
     * Fires an event to call listeners.
     * @param - Event name
     * @param - Event parameter
     * @return If false, stop the event.
     * @example
     *
     * import EventEmitter from "@scena/event-emitter";
     *
     *
     * const emitter = new EventEmitter();
     *
     * emitter.on("a", e => {
     * });
     *
     *
     * emitter.emit("a", {
     *   a: 1,
     * });
     */


    __proto.emit = function (eventName, param) {
      var _this = this;

      if (param === void 0) {
        param = {};
      }

      var events = this._events[eventName];

      if (!eventName || !events) {
        return true;
      }

      var isStop = false;
      param.eventType = eventName;

      param.stop = function () {
        isStop = true;
      };

      param.currentTarget = this;

      __spreadArrays(events).forEach(function (info) {
        info.listener(param);

        if (info.once) {
          _this.off(eventName, info.listener);
        }
      });

      return !isStop;
    };
    /**
     * Fires an event to call listeners.
     * @param - Event name
     * @param - Event parameter
     * @return If false, stop the event.
     * @example
     *
     * import EventEmitter from "@scena/event-emitter";
     *
     *
     * const emitter = new EventEmitter();
     *
     * emitter.on("a", e => {
     * });
     *
     *
     * emitter.emit("a", {
     *   a: 1,
     * });
     */

    /**
    * Fires an event to call listeners.
    * @param - Event name
    * @param - Event parameter
    * @return If false, stop the event.
    * @example
    *
    * import EventEmitter from "@scena/event-emitter";
    *
    *
    * const emitter = new EventEmitter();
    *
    * emitter.on("a", e => {
    * });
    *
    * // emit
    * emitter.trigger("a", {
    *   a: 1,
    * });
    */


    __proto.trigger = function (eventName, param) {
      if (param === void 0) {
        param = {};
      }

      return this.emit(eventName, param);
    };

    __proto._addEvent = function (eventName, listener, options) {
      var events = this._events;
      events[eventName] = events[eventName] || [];
      var listeners = events[eventName];
      listeners.push(__assign$1({
        listener: listener
      }, options));
    };

    return EventEmitter;
  }();

  var EventEmitter$1 = EventEmitter;

  /*
  Copyright (c) NAVER Corp.
  name: @egjs/component
  license: MIT
  author: NAVER Corp.
  repository: https://github.com/naver/egjs-component
  version: 3.0.4
  */
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }

  /*
   * Copyright (c) 2015 NAVER Corp.
   * egjs projects are licensed under the MIT license
   */
  var isUndefined = function (value) {
    return typeof value === "undefined";
  };

  // This class name is not matched to file name intentionally
  /**
   * Event class to provide additional properties
   * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
   */
  var ComponentEvent = /*#__PURE__*/function () {
    /**
     * Create a new instance of ComponentEvent.
     * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
     * @param eventType The name of the event.<ko>이벤트 이름.</ko>
     * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
     */
    function ComponentEvent(eventType, props) {
      var e_1, _a;
      this._canceled = false;
      if (props) {
        try {
          for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this[key] = props[key];
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      this.eventType = eventType;
    }
    /**
     * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
     * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
     */
    var __proto = ComponentEvent.prototype;
    __proto.stop = function () {
      this._canceled = true;
    };
    /**
     * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
     * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
     * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
     */
    __proto.isCanceled = function () {
      return this._canceled;
    };
    return ComponentEvent;
  }();

  /**
   * A class used to manage events in a component
   * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
   */
  var Component = /*#__PURE__*/function () {
    /**
     * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
     */
    function Component() {
      this._eventHandler = {};
    }
    /**
     * Trigger a custom event.
     * @ko 커스텀 이벤트를 발생시킨다
     * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
     * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
     * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
     *   hi: { foo: { a: number; b: boolean } };
     *   someEvent: (foo: number, bar: string) => void;
     *   someOtherEvent: void; // When there's no event argument
     * }> {
     *   some(){
     *     if(this.trigger("beforeHi")){ // When event call to stop return false.
     *       this.trigger("hi");// fire hi event.
     *     }
     *   }
     * }
     *
     * const some = new Some();
     * some.on("beforeHi", e => {
     *   if(condition){
     *     e.stop(); // When event call to stop, `hi` event not call.
     *   }
     *   // `currentTarget` is component instance.
     *   console.log(some === e.currentTarget); // true
     *
     *   typeof e.foo; // number
     *   typeof e.bar; // string
     * });
     * some.on("hi", e => {
     *   typeof e.foo.b; // boolean
     * });
     * // If you want to more know event design. You can see article.
     * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
     * ```
     */
    var __proto = Component.prototype;
    __proto.trigger = function (event) {
      var params = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }
      var eventName = event instanceof ComponentEvent ? event.eventType : event;
      var handlers = __spread(this._eventHandler[eventName] || []);
      if (handlers.length <= 0) {
        return this;
      }
      if (event instanceof ComponentEvent) {
        event.currentTarget = this;
        handlers.forEach(function (handler) {
          handler(event);
        });
      } else {
        handlers.forEach(function (handler) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          handler.apply(void 0, __spread(params));
        });
      }
      return this;
    };
    /**
     * Executed event just one time.
     * @ko 이벤트가 한번만 실행된다.
     * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
     * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
     * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: ComponentEvent;
     * }> {
     *   hi() {
     *     alert("hi");
     *   }
     *   thing() {
     *     this.once("hi", this.hi);
     *   }
     * }
     *
     * var some = new Some();
     * some.thing();
     * some.trigger(new ComponentEvent("hi"));
     * // fire alert("hi");
     * some.trigger(new ComponentEvent("hi"));
     * // Nothing happens
     * ```
     */
    __proto.once = function (eventName, handlerToAttach) {
      var _this = this;
      if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
        var eventHash = eventName;
        for (var key in eventHash) {
          this.once(key, eventHash[key]);
        }
        return this;
      } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
        var listener_1 = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          handlerToAttach.apply(void 0, __spread(args));
          _this.off(eventName, listener_1);
        };
        this.on(eventName, listener_1);
      }
      return this;
    };
    /**
     * Checks whether an event has been attached to a component.
     * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
     * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
     * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
     * @example
     * ```ts
     * import Component from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   some() {
     *     this.hasOn("hi");// check hi event.
     *   }
     * }
     * ```
     */
    __proto.hasOn = function (eventName) {
      return !!this._eventHandler[eventName];
    };
    /**
     * Attaches an event to a component.
     * @ko 컴포넌트에 이벤트를 등록한다.
     * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
     * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
     * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   hi() {
     *     console.log("hi");
     *   }
     *   some() {
     *     this.on("hi",this.hi); //attach event
     *   }
     * }
     * ```
     */
    __proto.on = function (eventName, handlerToAttach) {
      if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.on(name, eventHash[name]);
        }
        return this;
      } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
        var handlerList = this._eventHandler[eventName];
        if (isUndefined(handlerList)) {
          this._eventHandler[eventName] = [];
          handlerList = this._eventHandler[eventName];
        }
        handlerList.push(handlerToAttach);
      }
      return this;
    };
    /**
     * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
     * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
     * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
     * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
     * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
     * @example
     * ```ts
     * import Component, { ComponentEvent } from "@egjs/component";
     *
     * class Some extends Component<{
     *   hi: void;
     * }> {
     *   hi() {
     *     console.log("hi");
     *   }
     *   some() {
     *     this.off("hi",this.hi); //detach event
     *   }
     * }
     * ```
     */
    __proto.off = function (eventName, handlerToDetach) {
      var e_1, _a;
      // Detach all event handlers.
      if (isUndefined(eventName)) {
        this._eventHandler = {};
        return this;
      }
      // Detach all handlers for eventname or detach event handlers by object.
      if (isUndefined(handlerToDetach)) {
        if (typeof eventName === "string") {
          delete this._eventHandler[eventName];
          return this;
        } else {
          var eventHash = eventName;
          for (var name in eventHash) {
            this.off(name, eventHash[name]);
          }
          return this;
        }
      }
      // Detach single event handler
      var handlerList = this._eventHandler[eventName];
      if (handlerList) {
        var idx = 0;
        try {
          for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
            var handlerFunction = handlerList_1_1.value;
            if (handlerFunction === handlerToDetach) {
              handlerList.splice(idx, 1);
              if (handlerList.length <= 0) {
                delete this._eventHandler[eventName];
              }
              break;
            }
            idx++;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      return this;
    };
    /**
     * Version info string
     * @ko 버전정보 문자열
     * @name VERSION
     * @static
     * @example
     * Component.VERSION;  // ex) 3.0.0
     * @memberof Component
     */
    Component.VERSION = "3.0.4";
    return Component;
  }();

  /*
  Copyright (c) 2022-present NAVER Corp.
  name: @cfcs/core
  license: MIT
  author: NAVER Crop.
  repository: https://github.com/naver/cfcs/tree/main/packages/core
  version: 0.1.0
  */

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  /**
   * @hidden
   */
  function keys(obj) {
    return Object.keys(obj);
  }
  /**
   * @hidden
   */

  function isObject(val) {
    return typeof val === "object";
  }
  /**
   * @hidden
   */

  function isFunction(val) {
    return typeof val === "function";
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  var OBSERVERS_PATH = "__observers__";
  var COMPUTED_PATH = "__computed__";
  var CFCS_DETECTED_DEPENDENCIES_VERSION = 1;
  var CFCS_DETECTED_DEPENDENCIES = "__CFCS_DETECTED_DEPENDENCIES__";

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var extendStatics$1 = function (d, b) {
    extendStatics$1 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics$1(d, b);
  };

  function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$1(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  function getDetectedStack() {
    // Version issues do not occur when you access the native object in the global.
    Object[CFCS_DETECTED_DEPENDENCIES] = Object[CFCS_DETECTED_DEPENDENCIES] || {};
    var versionList = Object[CFCS_DETECTED_DEPENDENCIES];
    versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];
    return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
  }
  function getCurrentDetected() {
    var stack = getDetectedStack();
    return stack[stack.length - 1];
  }
  function detectDependencies(host) {
    var stack = getDetectedStack();
    var observers = [];
    var detected = {
      host: host,
      observers: observers,
      push: function (observer) {
        if (host !== observer && observers.indexOf(observer) === -1) {
          observers.push(observer);
        }
      }
    };
    stack.push(detected);
    return detected;
  }
  function endDetectDependencies() {
    var stack = getDetectedStack();
    return stack.pop();
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
   * @category Reactive
   * @see observe
   */

  var Observer =
  /*#__PURE__*/
  function () {
    /**
     *
     */
    function Observer(value) {
      this._emitter = new Component();
      this._current = value;
    }

    var __proto = Observer.prototype;
    Object.defineProperty(__proto, "current", {
      /**
       * return the current value.
       */
      get: function () {
        var currentDetected = getCurrentDetected();
        currentDetected === null || currentDetected === void 0 ? void 0 : currentDetected.push(this);
        return this._current;
      },
      set: function (value) {
        this._setCurrent(value);
      },
      enumerable: false,
      configurable: true
    });
    /**
     * When the current value changes, the callback function is called.
     */

    __proto.subscribe = function (callback) {
      this.current;

      this._emitter.on("update", callback);

      return this;
    };
    /**
     * Cancel the registered subscription through callback.
     */


    __proto.unsubscribe = function (callback) {
      this._emitter.off("update", callback);

      return this;
    };

    __proto._setCurrent = function (value) {
      var prevValue = this._current;
      var isUpdate = value !== prevValue;
      this._current = value;

      if (isUpdate) {
        this._emitter.trigger("update", value, prevValue);
      }
    };
    /**
     * @hidden
     */


    __proto.toString = function () {
      return "".concat(this.current);
    };
    /**
     * @hidden
     */


    __proto.valueOf = function () {
      return this.current;
    };

    return Observer;
  }();

  /**
   * @category Reactive
   * @hidden
   */

  var ComputedObserver =
  /*#__PURE__*/
  function (_super) {
    __extends$1(ComputedObserver, _super);
    /**
     * @description Creates a new computed observer from the values of other observers.
     * It is read-only and if you change the value of the observer used inside the callback, its value will be automatically updated.
     * @param _computedCallback A function for observers to be computed.
     */


    function ComputedObserver(_computedCallback) {
      var _this = _super.call(this) || this;

      _this._computedCallback = _computedCallback;
      _this._registered = [];

      _this._onCheckUpdate = function () {
        _this._setCurrent(_this.current);
      };

      _this._current = _this.current;
      return _this;
    }

    var __proto = ComputedObserver.prototype;
    Object.defineProperty(__proto, "current", {
      get: function () {
        var _this = this;

        detectDependencies(this);

        var value = this._computedCallback();

        var results = endDetectDependencies();

        this._registered.forEach(function (observer) {
          observer.unsubscribe(_this._onCheckUpdate);
        });

        results.observers.forEach(function (observer) {
          observer.subscribe(_this._onCheckUpdate);
        });
        this._registered = results.observers;
        return value;
      },
      enumerable: false,
      configurable: true
    });
    return ComputedObserver;
  }(Observer);

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  function injectObserve(prototype, memberName, publicName) {
    if (publicName === void 0) {
      publicName = memberName;
    }

    var nextAttributes = {
      configurable: true,
      get: function () {
        return getObserver(this, publicName).current;
      },
      set: function (value) {
        getObserver(this, publicName, value).current = value;
      }
    };
    Object.defineProperty(prototype, memberName, nextAttributes);

    if (publicName !== memberName) {
      Object.defineProperty(prototype, publicName, {
        configurable: true,
        get: function () {
          return getObserver(this, publicName).current;
        }
      });
    }
  }
  /**
   * @description `Observe` is a property decorator and converts the property into a `reactive state`. You can detect its status through `.subscribe`.
   * @category Reactive-Decorator
   * @see ReactiveSubscribe
   * @example
  * ```ts
  import { ReactiveSubscribe, Observe } from "@cfcs/core";

  @ReactiveSubscribe
  class Component {
    // The public name and state name are the same.
    @Observe value1 = 1;
    // If you want to set public name and private properties separately
    @Observe("value2") _value2 = 1;

    constructor() {
      requestAnimationFrame(() => {
        this.value1 = 2;
      });
    }
  }
  interface C
  ```
   */


  function Observe() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (args.length > 1) {
      return injectObserve(args[0], args[1]);
    }

    return function (prototype, memberName) {
      return injectObserve(prototype, memberName, args[0]);
    };
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */
  /**
   * @hidden
   */

  function injectReactiveSubscribe(object) {
    object["subscribe"] = function (name, callback) {
      this[name];
      getObserver(this, name).subscribe(callback);
    };

    object["unsubscribe"] = function (name, callback) {
      var _this = this;

      if (!name) {
        keys(getObservers(this)).forEach(function (observerName) {
          _this.unsubscribe(observerName);
        });
        return;
      }

      if (!(name in this)) {
        return;
      }

      getObserver(this, name).unsubscribe(callback);
    };
  }

  /**
   * cfcs
   * Copyright (c) 2022-present NAVER Corp.
   * MIT license
   */

  function makeReactiveObject(setup, all) {
    var result = isFunction(setup) ? setup() : setup;
    var reactiveObject = {};
    defineObservers(reactiveObject);
    keys(result).forEach(function (name) {
      var value = result[name];

      if (isObserver(value)) {
        setObserver(reactiveObject, name, value);
      } else {
        setObserver(reactiveObject, name, observe(value));
      }

      Observe(name)(reactiveObject, name);
    });
    injectReactiveSubscribe(reactiveObject);
    return reactiveObject;
  }
  /**
   * @description Make the return value of the corresponding object or function a reactive object.
   * @category Reactive
   * @param setup - The target object or function to which reactive is applied
   * @returns Makes all values into reactive objects.
   * @example
   * ```ts
   * import { reactive } from "@cfcs/core";
   *
   * const obj = reactive({
   *  value1: 1,
   *  value2: 2,
   * });
   *
   * obj.subscribe("value1", value1 => {
   *   console.log(value1);
   * });
   * obj.value1 = 2;
   * ```
   */


  function reactive(setup) {
    return makeReactiveObject(setup);
  }
  /**
   * @description Make the return value of the corresponding object or function a reactive object.
   * @category Reactive
   * @param setup - The target object or function to which reactive is applied
   * @returns Only the values to which observer is applied are objects to which reactive is applied.
   * @example
   * ```ts
   * import { partialReactive, observe } from "@cfcs/core";
   *
   * const value1 = observe(1);
   * const value2 = observe(2);
   * const obj = partialReactive({
   *  value1,
   *  value2,
   * });
   *
   * obj.subscribe("value1", value1 => {
   *   console.log(value1);
   * });
   * value1.current = 2;
   * ```
   */

  function partialReactive(setup) {
    return makeReactiveObject(setup);
  }
  /**
   * @description Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
   * @category Reactive
   * @example
   * ```ts
   * import { observe } from "@cfcs/core";
   *
   * const ob1 = observe(1);
   *
   * ob1.subscribe(nextValue => {
   *   console.log(nextValue);
   * });
   *
   * ob1.current = 2;
   * ```
   */

  function observe(defaultValue) {
    return new Observer(defaultValue);
  }
  /**
   * @hidden
   */

  function computed(computedCallback) {
    return new ComputedObserver(computedCallback);
  }
  /**
   * @hidden
   */

  function defineObservers(instance) {
    var observers = {};
    Object.defineProperty(instance, OBSERVERS_PATH, {
      get: function () {
        return observers;
      }
    });
    return observers;
  }
  /**
   * @hidden
   */

  function getObservers(instance, isComputed) {
    var _a, _b;

    if (!instance[OBSERVERS_PATH]) {
      defineObservers(instance);
    }

    var observers = instance[OBSERVERS_PATH];

    if (!isComputed) {
      var computedList = (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b[COMPUTED_PATH];

      if (computedList) {
        computedList.forEach(function (name) {
          if (!(name in observers) && name in instance) {
            instance[name];
          }
        });
      }
    }

    return observers;
  }
  /**
   * @hidden
   */

  function getObserver(instance, name, defaultValue) {
    var observers = getObservers(instance);

    if (!observers[name]) {
      observers[name] = observe(defaultValue);
    }

    return observers[name];
  }
  /**
   * @hidden
   */

  function setObserver(instance, name, observer) {
    var observers = getObservers(instance);
    observers[name] = observer;
  }
  /**
   * @description Whether that object is an observer instance
   * @category Reactive
   */

  function isObserver(val) {
    return val && isObject(val) && "current" in val && "subscribe" in val && "unsubscribe" in val;
  }

  /*
  Copyright (c) 2019 Daybrush
  name: order-map
  license: MIT
  author: Daybrush
  repository: git+https://github.com/daybrush/order-map.git
  version: 0.2.2
  */
  /**
   *
   */
  var OrderMap =
  /*#__PURE__*/
  function () {
    /**
     *
     */
    function OrderMap(separator) {
      this.separator = separator;
      this.orderMap = {};
    }
    /**
     *
     */


    var __proto = OrderMap.prototype;

    __proto.getFullName = function (names) {
      return names.join(this.separator);
    };
    /**
     *
     */


    __proto.get = function (names) {
      return this.orderMap[this.getFullName(names)];
    };
    /**
     *
     */


    __proto.gets = function (names, isFull) {
      if (isFull === void 0) {
        isFull = true;
      }

      var fullOrders = [];
      var self = this;

      function pushOrders(nextNames, stack) {
        var orders = self.get(nextNames);

        if (!orders) {
          return;
        }

        orders.forEach(function (name) {
          var nextStack = stack.concat([name]);
          var nextOrders = pushOrders(nextNames.concat([name]), nextStack);

          if (!nextOrders || !nextOrders.length) {
            fullOrders.push(stack.concat([name]));
          }
        });
        return orders;
      }

      pushOrders(names, isFull ? names : []);
      return fullOrders;
    };
    /**
     *
     */


    __proto.set = function (names, orders) {
      var _this = this;

      names.forEach(function (name, i) {
        _this.addName(names.slice(0, i), name);
      });
      this.orderMap[this.getFullName(names)] = orders;
      return orders;
    };
    /**
     *
     */


    __proto.add = function (names) {
      var length = names.length;

      if (!length) {
        return [];
      }

      return this.addName(names.slice(0, -1), names[length - 1]);
    };
    /**
     *
     */


    __proto.addName = function (names, name) {
      var orders = this.get(names) || this.set(names, []);

      if (orders.indexOf(name) === -1) {
        orders.push(name);
      }

      return orders;
    };
    /**
     *
     */


    __proto.findIndex = function (names, orderName) {
      var orders = this.orderMap[this.getFullName(names)];

      if (!orders) {
        return -1;
      }

      return orders.indexOf(orderName);
    };
    /**
     *
     */


    __proto.remove = function (names) {
      var fullName = this.getFullName(names);
      var orderMap = this.orderMap;

      for (var name in orderMap) {
        if (name.indexOf(fullName) === 0) {
          delete orderMap[name];
        }
      }

      var length = names.length;

      if (length) {
        var prevNames = names.slice(0, -1);
        var lastName = names[length - 1];
        this.splice(prevNames, this.findIndex(prevNames, lastName), 1);
      }

      return this;
    };
    /**
     *
     */


    __proto.filter = function (names, callback, isFull) {
      if (isFull === void 0) {
        isFull = true;
      }

      var result = this.gets(names, isFull).filter(callback);
      var map = new OrderMap(this.separator);
      var stack = isFull ? [] : names;
      result.forEach(function (nextNames) {
        map.add(stack.concat(nextNames));
      });
      return map;
    };
    /**
     *
     */


    __proto.splice = function (names, index, deleteCount) {
      var orders = [];

      for (var _i = 3; _i < arguments.length; _i++) {
        orders[_i - 3] = arguments[_i];
      }

      var currentOrders = this.get(names) || this.set(names, []);
      currentOrders.splice.apply(currentOrders, [index, deleteCount].concat(orders));
      return this;
    };
    /**
     *
     */


    __proto.clear = function () {
      this.orderMap = {};
    };
    /**
     *
     */


    __proto.setObject = function (obj) {
      var orderMap = this.orderMap;

      for (var name in obj) {
        orderMap[name] = obj[name].slice();
      }
    };
    /**
     *
     */


    __proto.getObject = function () {
      var nextMap = {};
      var orderMap = this.orderMap;

      for (var name in orderMap) {
        nextMap[name] = orderMap[name].slice();
      }

      return nextMap;
    };
    /**
     *
     */


    __proto.clone = function () {
      var map = new OrderMap(this.separator);
      map.setObject(map.orderMap);
      return map;
    };

    return OrderMap;
  }();

  var OrderMap$1 = OrderMap;

  /*
  Copyright (c) Daybrush
  name: css-styled
  license: MIT
  author: Daybrush
  repository: git+https://github.com/daybrush/css-styled.git
  version: 1.0.6
  */

  function hash(str) {
    var hash = 5381,
        i    = str.length;

    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }

    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
  }

  var stringHash = hash;

  function getHash(str) {
    return stringHash(str).toString(36);
  }
  function getShadowRoot(parentElement) {
    if (parentElement && parentElement.getRootNode) {
      var rootNode = parentElement.getRootNode();
      if (rootNode.nodeType === 11) {
        return rootNode;
      }
    }
    return;
  }
  function replaceStyle(className, css, options) {
    if (options.original) {
      return css;
    }
    return css.replace(/([^};{\s}][^};{]*|^\s*){/mg, function (_, selector) {
      var trimmedSelector = selector.trim();
      return (trimmedSelector ? splitComma(trimmedSelector) : [""]).map(function (subSelector) {
        var trimmedSubSelector = subSelector.trim();
        if (trimmedSubSelector.indexOf("@") === 0) {
          return trimmedSubSelector;
        } else if (trimmedSubSelector.indexOf(":global") > -1) {
          return trimmedSubSelector.replace(/\:global/g, "");
        } else if (trimmedSubSelector.indexOf(":host") > -1) {
          return "".concat(trimmedSubSelector.replace(/\:host/g, ".".concat(className)));
        } else if (trimmedSubSelector) {
          return ".".concat(className, " ").concat(trimmedSubSelector);
        } else {
          return ".".concat(className);
        }
      }).join(", ") + " {";
    });
  }
  function injectStyle(className, css, options, shadowRoot) {
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-styled-id", className);
    style.setAttribute("data-styled-count", "1");
    if (options.nonce) {
      style.setAttribute("nonce", options.nonce);
    }
    style.innerHTML = replaceStyle(className, css, options);
    (shadowRoot || document.head || document.body).appendChild(style);
    return style;
  }

  /**
   * Create an styled object that can be defined and inserted into the css.
   * @param - css styles
   */
  function styled(css) {
    var injectClassName = "rCS" + getHash(css);
    return {
      className: injectClassName,
      inject: function (el, options) {
        if (options === void 0) {
          options = {};
        }
        var shadowRoot = getShadowRoot(el);
        var styleElement = (shadowRoot || document).querySelector("style[data-styled-id=\"".concat(injectClassName, "\"]"));
        if (!styleElement) {
          styleElement = injectStyle(injectClassName, css, options, shadowRoot);
        } else {
          var count = parseFloat(styleElement.getAttribute("data-styled-count")) || 0;
          styleElement.setAttribute("data-styled-count", "".concat(count + 1));
        }
        return {
          destroy: function () {
            var _a;
            var injectCount = parseFloat(styleElement.getAttribute("data-styled-count")) || 0;
            if (injectCount <= 1) {
              if (styleElement.remove) {
                styleElement.remove();
              } else {
                (_a = styleElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(styleElement);
              }
              styleElement = null;
            } else {
              styleElement.setAttribute("data-styled-count", "".concat(injectCount - 1));
            }
          }
        };
      }
    };
  }

  /*
  Copyright (c) 2016 Daybrush
  name: scenejs
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/scenejs.git
  version: 1.10.0
  */

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  }

  function cubic(y1, y2, t) {
      var t2 = 1 - t;
      // Bezier Curve Formula
      return t * t * t + 3 * t * t * t2 * y2 + 3 * t * t2 * t2 * y1;
  }
  function solveFromX(x1, x2, x) {
      // x  0 ~ 1
      // t 0 ~ 1
      var t = x;
      var solveX = x;
      var dx = 1;
      while (Math.abs(dx) > 1 / 1000) {
          // 예상 t초에 의한 _x값
          solveX = cubic(x1, x2, t);
          dx = solveX - x;
          // 차이가 미세하면 그 값을 t로 지정
          if (Math.abs(dx) < 1 / 1000) {
              return t;
          }
          t -= dx / 2;
      }
      return t;
  }
  /**
   * @namespace easing
   */
  /**
  * Cubic Bezier curve.
  * @memberof easing
  * @func bezier
  * @param {number} [x1] - point1's x
  * @param {number} [y1] - point1's y
  * @param {number} [x2] - point2's x
  * @param {number} [y2] - point2's y
  * @return {function} the curve function
  * @example
  import {bezier} from "scenejs";
  Scene.bezier(0, 0, 1, 1) // LINEAR
  Scene.bezier(0.25, 0.1, 0.25, 1) // EASE
  */
  function bezier(x1, y1, x2, y2) {
      /*
            x = f(t)
            calculate inverse function by x
            t = f-1(x)
        */
      var func = function (x) {
          var t = solveFromX(x1, x2, between(x, 0, 1));
          return cubic(y1, y2, t);
      };
      func.easingName = "cubic-bezier(".concat(x1, ",").concat(y1, ",").concat(x2, ",").concat(y2, ")");
      return func;
  }
  /**
  * Specifies a stepping function
  * @see {@link https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp|CSS3 Timing Function}
  * @memberof easing
  * @func steps
  * @param {number} count - point1's x
  * @param {"start" | "end"} postion - point1's y
  * @return {function} the curve function
  * @example
  import {steps} from "scenejs";
  Scene.steps(1, "start") // Scene.STEP_START
  Scene.steps(1, "end") // Scene.STEP_END
  */
  function steps(count, position) {
      var func = function (time) {
          var level = 1 / count;
          if (time >= 1) {
              return 1;
          }
          return (position === "start" ? level : 0) + Math.floor(time / level) * level;
      };
      func.easingName = "steps(".concat(count, ", ").concat(position, ")");
      return func;
  }
  /**
  * Equivalent to steps(1, start)
  * @memberof easing
  * @name STEP_START
  * @static
  * @type {function}
  * @example
  import {STEP_START} from "scenejs";
  Scene.STEP_START // steps(1, start)
  */
  var STEP_START = /*#__PURE__#*/ steps(1, "start");
  /**
  * Equivalent to steps(1, end)
  * @memberof easing
  * @name STEP_END
  * @static
  * @type {function}
  * @example
  import {STEP_END} from "scenejs";
  Scene.STEP_END // steps(1, end)
  */
  var STEP_END = /*#__PURE__#*/ steps(1, "end");
  /**
  * Linear Speed (0, 0, 1, 1)
  * @memberof easing
  * @name LINEAR
  * @static
  * @type {function}
  * @example
  import {LINEAR} from "scenejs";
  Scene.LINEAR
  */
  var LINEAR = /*#__PURE__#*/ bezier(0, 0, 1, 1);
  /**
  * Ease Speed (0.25, 0.1, 0.25, 1)
  * @memberof easing
  * @name EASE
  * @static
  * @type {function}
  * @example
  import {EASE} from "scenejs";
  Scene.EASE
  */
  var EASE = /*#__PURE__#*/ bezier(0.25, 0.1, 0.25, 1);
  /**
  * Ease In Speed (0.42, 0, 1, 1)
  * @memberof easing
  * @name EASE_IN
  * @static
  * @type {function}
  * @example
  import {EASE_IN} from "scenejs";
  Scene.EASE_IN
  */
  var EASE_IN = /*#__PURE__#*/ bezier(0.42, 0, 1, 1);
  /**
  * Ease Out Speed (0, 0, 0.58, 1)
  * @memberof easing
  * @name EASE_OUT
  * @static
  * @type {function}
  * @example
  import {EASE_OUT} from "scenejs";
  Scene.EASE_OUT
  */
  var EASE_OUT = /*#__PURE__#*/ bezier(0, 0, 0.58, 1);
  /**
  * Ease In Out Speed (0.42, 0, 0.58, 1)
  * @memberof easing
  * @name EASE_IN_OUT
  * @static
  * @type {function}
  * @example
  import {EASE_IN_OUT} from "scenejs";
  Scene.EASE_IN_OUT
  */
  var EASE_IN_OUT = /*#__PURE__#*/ bezier(0.42, 0, 0.58, 1);

  var _a;
  var PREFIX = "__SCENEJS_";
  var DATA_SCENE_ID = "data-scene-id";
  var TIMING_FUNCTION = "animation-timing-function";
  var ROLES = { transform: {}, filter: {}, attribute: {}, html: true };
  var ALIAS = { easing: [TIMING_FUNCTION] };
  var FIXED = (_a = {}, _a[TIMING_FUNCTION] = true, _a.contents = true, _a.html = true, _a);
  var MAXIMUM = 1000000;
  var THRESHOLD = 0.000001;
  var DURATION = "duration";
  var FILL_MODE = "fillMode";
  var DIRECTION = "direction";
  var ITERATION_COUNT = "iterationCount";
  var DELAY = "delay";
  var EASING = "easing";
  var PLAY_SPEED = "playSpeed";
  var EASING_NAME = "easingName";
  var ITERATION_TIME = "iterationTime";
  var PAUSED = "paused";
  var ENDED = "ended";
  var TIMEUPDATE = "timeupdate";
  var PLAY = "play";
  var RUNNING = "running";
  var ITERATION = "iteration";
  var START_ANIMATION = "startAnimation";
  var PAUSE_ANIMATION = "pauseAnimation";
  var ALTERNATE = "alternate";
  var REVERSE = "reverse";
  var ALTERNATE_REVERSE = "alternate-reverse";
  var NORMAL = "normal";
  var INFINITE = "infinite";
  var PLAY_STATE = "playState";
  var PLAY_CSS = "playCSS";
  var PREV_TIME = "prevTime";
  var TICK_TIME = "tickTime";
  var CURRENT_TIME = "currentTime";
  var SELECTOR = "selector";
  var TRANSFORM_NAME = "transform";
  var EASINGS = {
      "linear": LINEAR,
      "ease": EASE,
      "ease-in": EASE_IN,
      "ease-out": EASE_OUT,
      "ease-in-out": EASE_IN_OUT,
      "step-start": STEP_START,
      "step-end": STEP_END,
  };
  var NAME_SEPARATOR = "_///_";
  /**
  * option name list
  * @name Scene.OPTIONS
  * @memberof Scene
  * @static
  * @type {$ts:OptionType}
  * @example
  * Scene.OPTIONS // ["duration", "fillMode", "direction", "iterationCount", "delay", "easing", "playSpeed"]
  */
  var OPTIONS = [DURATION, FILL_MODE, DIRECTION, ITERATION_COUNT, DELAY, EASING, PLAY_SPEED];

  /**
  * Make string, array to PropertyObject for the dot product
  */
  var PropertyObject = /*#__PURE__*/ (function () {
      /**
        * @param - This value is in the array format.
        * @param - options
        * @example
    var obj = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")"
    });
         */
      function PropertyObject(value, options) {
          this.prefix = "";
          this.suffix = "";
          this.model = "";
          this.type = "";
          this.separator = ",";
          options && this.setOptions(options);
          this.value = isString(value) ? value.split(this.separator) : value;
      }
      PropertyObject.prototype.setOptions = function (newOptions) {
          for (var name_1 in newOptions) {
              this[name_1] = newOptions[name_1];
          }
          return this;
      };
      /**
        * the number of values.
        * @example
    const obj1 = new PropertyObject("1,2,3", ",");

    console.log(obj1.length);
    // 3
         */
      PropertyObject.prototype.size = function () {
          return this.value.length;
      };
      /**
        * retrieve one of values at the index
        * @param {Number} index - index
        * @return {Object} one of values at the index
        * @example
    const obj1 = new PropertyObject("1,2,3", ",");

    console.log(obj1.get(0));
    // 1
         */
      PropertyObject.prototype.get = function (index) {
          return this.value[index];
      };
      /**
        * Set the value at that index
        * @param {Number} index - index
        * @param {Object} value - text, a number, object to set
        * @return {PropertyObject} An instance itself
        * @example
    const obj1 = new PropertyObject("1,2,3", ",");
    obj1.set(0, 2);
    console.log(obj1.toValue());
    // 2,2,3
         */
      PropertyObject.prototype.set = function (index, value) {
          this.value[index] = value;
          return this;
      };
      /**
        * create a copy of an instance itself.
        * @return {PropertyObject} clone
        * @example
    const obj1 = new PropertyObject("1,2,3", ",");
    const obj2 = obj1.clone();
         */
      PropertyObject.prototype.clone = function () {
          var _a = this, separator = _a.separator, prefix = _a.prefix, suffix = _a.suffix, model = _a.model, type = _a.type;
          var arr = this.value.map(function (v) { return (isPropertyObject(v) ? v.clone() : v); });
          return new PropertyObject(arr, {
              separator: separator,
              prefix: prefix,
              suffix: suffix,
              model: model,
              type: type,
          });
      };
      /**
        * Make Property Object to String
        * @return {String} Make Property Object to String
        * @example
    //rgba(100, 100, 100, 0.5)
    const obj4 = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")",
    });
    console.log(obj4.toValue());
    // "rgba(100,100,100,0.5)"
        */
      PropertyObject.prototype.toValue = function () {
          return this.prefix + this.join() + this.suffix;
      };
      /**
        * Make Property Object's array to String
        * @return {String} Join the elements of an array into a string
        * @example
        //rgba(100, 100, 100, 0.5)
        var obj4 = new PropertyObject([100,100,100,0.5], {
            "separator" : ",",
            "prefix" : "rgba(",
            "suffix" : ")"
        });
        obj4.join();  // =>   "100,100,100,0.5"
         */
      PropertyObject.prototype.join = function () {
          return this.value.map(function (v) { return (isPropertyObject(v) ? v.toValue() : v); }).join(this.separator);
      };
      /**
        * executes a provided function once per array element.
        * @param {Function} callback - Function to execute for each element, taking three arguments
        * @param {All} [callback.currentValue] The current element being processed in the array.
        * @param {Number} [callback.index] The index of the current element being processed in the array.
        * @param {Array} [callback.array] the array.
        * @return {PropertyObject} An instance itself
        * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach|MDN Array.forEach()} reference to MDN document.
        * @example
    //rgba(100, 100, 100, 0.5)
    var obj4 = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")"
    });

    obj4.forEach(t => {
        console.log(t);
    });  // =>   "100,100,100,0.5"
        */
      PropertyObject.prototype.forEach = function (func) {
          this.value.forEach(func);
          return this;
      };
      return PropertyObject;
  }());

  /**
  * @namespace
  * @name Property
  */
  function splitStyle(str) {
      var properties = splitText(str, ";");
      var obj = {};
      var totalLength = properties.length;
      var length = totalLength;
      for (var i = 0; i < totalLength; ++i) {
          var matches = splitText(properties[i], ":");
          if (matches.length < 2 || !matches[1]) {
              --length;
              continue;
          }
          obj[matches[0].trim()] = toPropertyObject(matches[1].trim());
      }
      return { styles: obj, length: length };
  }
  /**
  * convert array to PropertyObject[type=color].
  * default model "rgba"
  * @memberof Property
  * @function arrayToColorObject
  * @param {Array|PropertyObject} value ex) [0, 0, 0, 1]
  * @return {PropertyObject} PropertyObject[type=color]
  * @example
  arrayToColorObject([0, 0, 0])
  // => PropertyObject(type="color", model="rgba", value=[0, 0, 0, 1], separator=",")
  */
  function arrayToColorObject(arr) {
      var model = RGBA;
      if (arr.length === 3) {
          arr[3] = 1;
      }
      return new PropertyObject(arr, {
          model: model,
          separator: ",",
          type: "color",
          prefix: "".concat(model, "("),
          suffix: ")",
      });
  }
  /**
  * convert text with parentheses to object.
  * @memberof Property
  * @function stringToBracketObject
  * @param {String} value ex) "rgba(0,0,0,1)"
  * @return {PropertyObject} PropertyObject
  * @example
  stringToBracketObject("abcde(0, 0, 0,1)")
  // => PropertyObject(model="abcde", value=[0, 0, 0,1], separator=",")
  */
  function stringToBracketObject(text) {
      // [prefix, value, other]
      var _a = splitBracket(text), model = _a.prefix, value = _a.value, afterModel = _a.suffix;
      if (typeof value === "undefined") {
          return text;
      }
      if (COLOR_MODELS.indexOf(model) > -1) {
          return arrayToColorObject(stringToRGBA(text));
      }
      // divide comma(,)
      var obj = toPropertyObject(value, model);
      var arr = [value];
      var separator = ",";
      var prefix = "".concat(model, "(");
      var suffix = ")".concat(afterModel);
      if (isPropertyObject(obj)) {
          separator = obj.separator;
          arr = obj.value;
          prefix += obj.prefix;
          suffix = obj.suffix + suffix;
      }
      return new PropertyObject(arr, {
          separator: separator,
          model: model,
          prefix: prefix,
          suffix: suffix,
      });
  }
  function arrayToPropertyObject(arr, separator) {
      return new PropertyObject(arr, {
          type: "array",
          separator: separator,
      });
  }
  /**
  * convert text with parentheses to PropertyObject[type=color].
  * If the values are not RGBA model, change them RGBA mdoel.
  * @memberof Property
  * @function stringToColorObject
  * @param {String|PropertyObject} value ex) "rgba(0,0,0,1)"
  * @return {PropertyObject} PropertyObject[type=color]
  * @example
  stringToColorObject("rgba(0, 0, 0,1)")
  // => PropertyObject(type="color", model="rgba", value=[0, 0, 0,1], separator=",")
  */
  function stringToColorObject(value) {
      var result = stringToRGBA(value);
      return result ? arrayToColorObject(result) : value;
  }
  function toPropertyObject(value, model) {
      if (!isString(value)) {
          if (isArray(value)) {
              return arrayToPropertyObject(value, ",");
          }
          return value;
      }
      var values = splitComma(value);
      if (values.length > 1) {
          return arrayToPropertyObject(values.map(function (v) { return toPropertyObject(v); }), ",");
      }
      values = splitSpace(value);
      if (values.length > 1) {
          return arrayToPropertyObject(values.map(function (v) { return toPropertyObject(v); }), " ");
      }
      values = /^(['"])([^'"]*)(['"])$/g.exec(value);
      if (values && values[1] === values[3]) {
          // Quotes
          return new PropertyObject([toPropertyObject(values[2])], {
              prefix: values[1],
              suffix: values[1],
          });
      }
      else if (value.indexOf("(") !== -1) {
          // color
          return stringToBracketObject(value);
      }
      else if (value.charAt(0) === "#" && model !== "url") {
          return stringToColorObject(value);
      }
      return value;
  }
  function toObject(object, result) {
      if (result === void 0) { result = {}; }
      var model = object.model;
      if (model) {
          object.setOptions({
              model: "",
              suffix: "",
              prefix: "",
          });
          var value = object.size() > 1 ? object : object.get(0);
          result[model] = value;
      }
      else {
          object.forEach(function (obj) {
              toObject(obj, result);
          });
      }
      return result;
  }
  function getType(value) {
      var type = typeof value;
      if (type === OBJECT) {
          if (isArray(value)) {
              return ARRAY;
          }
          else if (isPropertyObject(value)) {
              return PROPERTY;
          }
      }
      else if (type === STRING || type === NUMBER) {
          return "value";
      }
      return type;
  }
  function isPureObject(obj) {
      return isObject$1(obj) && obj.constructor === Object;
  }
  function getNames(names, stack) {
      var arr = [];
      if (isPureObject(names)) {
          for (var name_1 in names) {
              stack.push(name_1);
              arr = arr.concat(getNames(names[name_1], stack));
              stack.pop();
          }
      }
      else {
          arr.push(stack.slice());
      }
      return arr;
  }
  function updateFrame(names, properties) {
      for (var name_2 in properties) {
          var value = properties[name_2];
          if (!isPureObject(value)) {
              names[name_2] = true;
              continue;
          }
          if (!isObject$1(names[name_2])) {
              names[name_2] = {};
          }
          updateFrame(names[name_2], properties[name_2]);
      }
      return names;
  }
  function toFixed(num) {
      return Math.round(num * MAXIMUM) / MAXIMUM;
  }
  function getValueByNames(names, properties, length) {
      if (length === void 0) { length = names.length; }
      var value = properties;
      for (var i = 0; i < length; ++i) {
          if (!isObject$1(value) || value == null) {
              return undefined;
          }
          value = value[names[i]];
      }
      return value;
  }
  function isInProperties(roles, args, isLast) {
      var length = args.length;
      var role = roles;
      if (length === 0) {
          return false;
      }
      for (var i = 0; i < length; ++i) {
          if (role === true) {
              return false;
          }
          role = role[args[i]];
          if (!role || (!isLast && role === true)) {
              return false;
          }
      }
      return true;
  }
  /**
   * @memberof Scene
   * @param - Property names
   * @param - Whether the property is the last property that cannot be an object (non-partitionable)
   */
  function isRole(args, isLast) {
      return isInProperties(ROLES, args, isLast);
  }
  function isFixed(args) {
      return isInProperties(FIXED, args, true);
  }
  function setPlayCSS(item, isActivate) {
      item.state[PLAY_CSS] = isActivate;
  }
  function isPausedCSS(item) {
      return item.state[PLAY_CSS] && item.isPaused();
  }
  function isEndedCSS(item) {
      return !item.isEnded() && item.state[PLAY_CSS];
  }
  function makeId(selector) {
      for (;;) {
          var id = "".concat(Math.floor(Math.random() * 10000000));
          if (!IS_WINDOW || !selector) {
              return id;
          }
          var checkElement = $("[data-scene-id=\"".concat(id, "\"]"));
          if (!checkElement) {
              return id;
          }
      }
  }
  function getRealId(item) {
      return item.getId() || item.setId(makeId(false)).getId();
  }
  function toId(text) {
      return "".concat(text).match(/[0-9a-zA-Z]+/g).join("");
  }
  function playCSS(item, isExportCSS, playClassName, properties) {
      if (properties === void 0) { properties = {}; }
      if (!ANIMATION || item.getPlayState() === RUNNING) {
          return;
      }
      var className = playClassName || START_ANIMATION;
      if (isPausedCSS(item)) {
          item.addPlayClass(true, className, properties);
      }
      else {
          if (item.isEnded()) {
              item.setTime(0);
          }
          isExportCSS && item.exportCSS({ className: className });
          var el = item.addPlayClass(false, className, properties);
          if (!el) {
              return;
          }
          addAnimationEvent(item, el);
          setPlayCSS(item, true);
      }
      item.setPlayState(RUNNING);
  }
  function addAnimationEvent(item, el) {
      var state = item.state;
      var duration = item.getDuration();
      var isZeroDuration = !duration || !isFinite(duration);
      var animationend = function () {
          setPlayCSS(item, false);
          item.finish();
      };
      var animationstart = function () {
          item.trigger(PLAY);
          addEvent(el, "animationcancel", animationend);
          addEvent(el, "animationend", animationend);
          addEvent(el, "animationiteration", animationiteration);
      };
      item.once(ENDED, function () {
          removeEvent(el, "animationcancel", animationend);
          removeEvent(el, "animationend", animationend);
          removeEvent(el, "animationiteration", animationiteration);
          removeEvent(el, "animationstart", animationstart);
      });
      var animationiteration = function (_a) {
          var elapsedTime = _a.elapsedTime;
          var currentTime = elapsedTime;
          var iterationCount = isZeroDuration ? 0 : (currentTime / duration);
          state[CURRENT_TIME] = currentTime;
          item.setIteration(iterationCount);
      };
      addEvent(el, "animationstart", animationstart);
  }
  function getEasing(curveArray) {
      var easing;
      if (isString(curveArray)) {
          if (curveArray in EASINGS) {
              easing = EASINGS[curveArray];
          }
          else {
              var obj = toPropertyObject(curveArray);
              if (isString(obj)) {
                  return 0;
              }
              else {
                  if (obj.model === "cubic-bezier") {
                      curveArray = obj.value.map(function (v) { return parseFloat(v); });
                      easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
                  }
                  else if (obj.model === "steps") {
                      easing = steps(parseFloat(obj.value[0]), obj.value[1]);
                  }
                  else {
                      return 0;
                  }
              }
          }
      }
      else if (isArray(curveArray)) {
          easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
      }
      else {
          easing = curveArray;
      }
      return easing;
  }
  function isPropertyObject(value) {
      if (!value) {
          return false;
      }
      var prototype = value.constructor.prototype;
      return !!(prototype.clone && prototype.get && prototype.setOptions);
  }
  function isScene(value) {
      return value && !!value.constructor.prototype.getItem;
  }
  function isSceneItem(value) {
      return (value && !!value.constructor.prototype.getFrame);
  }
  function isFrame(value) {
      return value && !!value.constructor.prototype.toCSSText;
  }
  function flatSceneObject(obj, seperator) {
      var newObj = {};
      for (var name_3 in obj) {
          var value = obj[name_3];
          if (isFrame(value)) {
              newObj[name_3] = value;
          }
          else if (isObject$1(value)) {
              var nextObj = flatSceneObject(value, seperator);
              for (var nextName in nextObj) {
                  newObj["".concat(name_3).concat(seperator).concat(nextName)] = nextObj[nextName];
              }
          }
      }
      return newObj;
  }
  function isArrayLike(el) {
      return "length" in el && el.length >= 0;
  }

  function GetterSetter(getter, setter, parent) {
      return function (constructor) {
          var prototype = constructor.prototype;
          getter.forEach(function (name) {
              prototype[camelize("get ".concat(name))] = function () {
                  return this[parent][name];
              };
          });
          setter.forEach(function (name) {
              prototype[camelize("set ".concat(name))] = function (value) {
                  this[parent][name] = value;
                  return this;
              };
          });
      };
  }
  function isDirectionReverse(iteration, iteraiontCount, direction) {
      if (direction === REVERSE) {
          return true;
      }
      else if (iteraiontCount !== INFINITE && iteration === iteraiontCount && iteraiontCount % 1 === 0) {
          return direction === (iteration % 2 >= 1 ? ALTERNATE_REVERSE : ALTERNATE);
      }
      return direction === (iteration % 2 >= 1 ? ALTERNATE : ALTERNATE_REVERSE);
  }
  /**
  * @typedef {Object} AnimatorState The Animator options. Properties used in css animation.
  * @property {number} [duration] The duration property defines how long an animation should take to complete one cycle.
  * @property {"none"|"forwards"|"backwards"|"both"} [fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
  * @property {"infinite"|number} [iterationCount] The iterationCount property specifies the number of times an animation should be played.
  * @property {array|function} [easing] The easing(timing-function) specifies the speed curve of an animation.
  * @property {number} [delay] The delay property specifies a delay for the start of an animation.
  * @property {"normal"|"reverse"|"alternate"|"alternate-reverse"} [direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
  */
  var ANIMATOR_SETTERS = [
      "id", ITERATION_COUNT, DELAY, FILL_MODE,
      DIRECTION, PLAY_SPEED, DURATION,
      PLAY_SPEED, ITERATION_TIME, PLAY_STATE,
  ];
  var ANIMATOR_GETTERS = __spreadArray(__spreadArray([], ANIMATOR_SETTERS, true), [
      EASING, EASING_NAME,
  ], false);
  /**
  * play video, animation, the others
  * @extends EventEmitter
  * @see {@link https://www.w3schools.com/css/css3_animations.asp CSS3 Animation}
  */
  var Animator = /*#__PURE__*/ (function (_super) {
      __extends(Animator, _super);
      /**
       * @param - animator's options
       * @example
    const animator = new Animator({
        delay: 2,
        diretion: "alternate",
        duration: 2,
        fillMode: "forwards",
        iterationCount: 3,
        easing: Scene.easing.EASE,
    });
       */
      function Animator(options) {
          var _this = _super.call(this) || this;
          _this.timerId = 0;
          _this.state = reactive({
              id: "",
              easing: 0,
              easingName: "linear",
              iterationCount: 1,
              delay: 0,
              fillMode: "forwards",
              direction: NORMAL,
              playSpeed: 1,
              currentTime: 0,
              iterationTime: -1,
              iteration: 0,
              tickTime: 0,
              prevTime: 0,
              playState: PAUSED,
              duration: 0,
          });
          _this.setOptions(options);
          return _this;
      }
      /**
        * set animator's easing.
        * @param curverArray - The speed curve of an animation.
        * @return {Animator} An instance itself.
        * @example
    animator.({
        delay: 2,
        diretion: "alternate",
        duration: 2,
        fillMode: "forwards",
        iterationCount: 3,
        easing: Scene.easing.EASE,
    });
        */
      Animator.prototype.setEasing = function (curveArray) {
          var easing = getEasing(curveArray);
          var easingName = easing && easing[EASING_NAME] || "linear";
          var state = this.state;
          state[EASING] = easing;
          state[EASING_NAME] = easingName;
          return this;
      };
      /**
        * set animator's options.
        * @see {@link https://www.w3schools.com/css/css3_animations.asp|CSS3 Animation}
        * @param - animator's options
        * @return {Animator} An instance itself.
        * @example
    animator.({
        delay: 2,
        diretion: "alternate",
        duration: 2,
        fillMode: "forwards",
        iterationCount: 3,
        easing: Scene.eaasing.EASE,
    });
        */
      Animator.prototype.setOptions = function (options) {
          if (options === void 0) { options = {}; }
          for (var name_1 in options) {
              var value = options[name_1];
              if (name_1 === EASING) {
                  this.setEasing(value);
                  continue;
              }
              else if (name_1 === DURATION) {
                  value && this.setDuration(value);
                  continue;
              }
              if (OPTIONS.indexOf(name_1) > -1) {
                  this.state[name_1] = value;
              }
          }
          return this;
      };
      /**
        * Get the animator's total duration including delay
        * @return {number} Total duration
        * @example
    animator.getTotalDuration();
        */
      Animator.prototype.getTotalDuration = function () {
          return this.getActiveDuration(true);
      };
      /**
        * Get the animator's total duration excluding delay
        * @return {number} Total duration excluding delay
        * @example
    animator.getActiveDuration();
        */
      Animator.prototype.getActiveDuration = function (delay) {
          var state = this.state;
          var count = state[ITERATION_COUNT];
          if (count === INFINITE) {
              return Infinity;
          }
          return (delay ? state[DELAY] : 0) + this.getDuration() * count;
      };
      /**
        * Check if the animator has reached the end.
        * @return {boolean} ended
        * @example
    animator.isEnded(); // true or false
        */
      Animator.prototype.isEnded = function () {
          if (this.state[TICK_TIME] === 0 && this.state[PLAY_STATE] === PAUSED) {
              return true;
          }
          else if (this.getTime() < this.getActiveDuration()) {
              return false;
          }
          return true;
      };
      /**
        *Check if the animator is paused:
        * @return {boolean} paused
        * @example
    animator.isPaused(); // true or false
        */
      Animator.prototype.isPaused = function () {
          return this.state[PLAY_STATE] === PAUSED;
      };
      Animator.prototype.start = function (delay) {
          if (delay === void 0) { delay = this.state[DELAY]; }
          var state = this.state;
          state[PLAY_STATE] = RUNNING;
          if (state[TICK_TIME] >= delay) {
              /**
               * This event is fired when play animator.
               * @event Animator#play
               */
              this.trigger(PLAY);
              return true;
          }
          return false;
      };
      /**
        * play animator
        * @return {Animator} An instance itself.
        */
      Animator.prototype.play = function (toTime) {
          var _this = this;
          var state = this.state;
          var delay = state[DELAY];
          var currentTime = this.getTime();
          state[PLAY_STATE] = RUNNING;
          if (this.isEnded() && (currentTime === 0 || currentTime >= this.getActiveDuration())) {
              this.setTime(-delay, true);
          }
          this.timerId = requestAnimationFrame(function (time) {
              state[PREV_TIME] = time;
              _this.tick(time, toTime);
          });
          this.start();
          return this;
      };
      /**
        * pause animator
        * @return {Animator} An instance itself.
        */
      Animator.prototype.pause = function () {
          var state = this.state;
          if (state[PLAY_STATE] !== PAUSED) {
              state[PLAY_STATE] = PAUSED;
              /**
               * This event is fired when animator is paused.
               * @event Animator#paused
               */
              this.trigger(PAUSED);
          }
          cancelAnimationFrame(this.timerId);
          return this;
      };
      /**
         * end animator
         * @return {Animator} An instance itself.
        */
      Animator.prototype.finish = function () {
          this.setTime(0);
          this.state[TICK_TIME] = 0;
          this.end();
          return this;
      };
      /**
       * end animator
       * @return {Animator} An instance itself.
       */
      Animator.prototype.end = function () {
          this.pause();
          /**
           * This event is fired when animator is ended.
           * @event Animator#ended
           */
          this.trigger(ENDED);
          return this;
      };
      /**
       * set currentTime
       * @param {Number|String} time - currentTime
       * @return {Animator} An instance itself.
       * @example
    animator.setTime("from"); // 0
    animator.setTime("to"); // 100%
    animator.setTime("50%");
    animator.setTime(10);
    animator.getTime() // 10
        */
      Animator.prototype.setTime = function (time, isTick, isParent, exec) {
          var activeDuration = this.getActiveDuration();
          var state = this.state;
          var prevTime = state[TICK_TIME];
          var delay = state[DELAY];
          var currentTime = isTick ? time : this.getUnitTime(time);
          state[TICK_TIME] = delay + currentTime;
          if (currentTime < 0) {
              currentTime = 0;
          }
          else if (currentTime > activeDuration) {
              currentTime = activeDuration;
          }
          state[CURRENT_TIME] = currentTime;
          this.calculate();
          var isSelfTick = isTick && !isParent;
          var tickTime = state[TICK_TIME];
          var numericTime = isString(time) ? parseFloat(time) : time;
          if (isSelfTick && prevTime < delay && numericTime >= 0) {
              this.start(0);
          }
          exec === null || exec === void 0 ? void 0 : exec();
          if (isSelfTick && (tickTime < prevTime || this.isEnded())) {
              this.end();
              return this;
          }
          if (this.isDelay()) {
              return this;
          }
          /**
               * This event is fired when the animator updates the time.
               * @event Animator#timeupdate
               * @param {Object} param The object of data to be sent to an event.
               * @param {Number} param.currentTime The total time that the animator is running.
               * @param {Number} param.time The iteration time during duration that the animator is running.
               * @param {Number} param.iterationCount The iteration count that the animator is running.
               */
          this.trigger(TIMEUPDATE, {
              currentTime: currentTime,
              time: this.getIterationTime(),
              iterationCount: state[ITERATION],
          });
          return this;
      };
      /**
        * Get the animator's current time
        * @return {number} current time
        * @example
    animator.getTime();
        */
      Animator.prototype.getTime = function () {
          return this.state[CURRENT_TIME];
      };
      Animator.prototype.getUnitTime = function (time) {
          if (isString(time)) {
              var duration = this.getDuration() || 100;
              if (time === "from") {
                  return 0;
              }
              else if (time === "to") {
                  return duration;
              }
              var _a = splitUnit(time), unit = _a.unit, value = _a.value;
              if (unit === "%") {
                  !this.getDuration() && (this.setDuration(duration));
                  return toFixed(parseFloat(time) / 100 * duration);
              }
              else if (unit === ">") {
                  return value + THRESHOLD;
              }
              else {
                  return value;
              }
          }
          else {
              return toFixed(time);
          }
      };
      /**
         * Check if the current state of animator is delayed.
         * @return {boolean} check delay state
         */
      Animator.prototype.isDelay = function () {
          var state = this.state;
          var delay = state[DELAY];
          var tickTime = state[TICK_TIME];
          return delay > 0 && (tickTime < delay);
      };
      Animator.prototype.setIteration = function (iterationCount) {
          var state = this.state;
          var passIterationCount = Math.floor(iterationCount);
          var maxIterationCount = state[ITERATION_COUNT] === INFINITE ? Infinity : state[ITERATION_COUNT];
          if (state[ITERATION] < passIterationCount && passIterationCount < maxIterationCount) {
              /**
                    * The event is fired when an iteration of an animation ends.
                    * @event Animator#iteration
                    * @param {Object} param The object of data to be sent to an event.
                    * @param {Number} param.currentTime The total time that the animator is running.
                    * @param {Number} param.iterationCount The iteration count that the animator is running.
                    */
              this.trigger(ITERATION, {
                  currentTime: state[CURRENT_TIME],
                  iterationCount: passIterationCount,
              });
          }
          state[ITERATION] = iterationCount;
          return this;
      };
      Animator.prototype.calculate = function () {
          var state = this.state;
          var iterationCount = state[ITERATION_COUNT];
          var fillMode = state[FILL_MODE];
          var direction = state[DIRECTION];
          var duration = this.getDuration();
          var time = this.getTime();
          var iteration = duration === 0 ? 0 : time / duration;
          var currentIterationTime = duration ? time % duration : 0;
          if (!duration) {
              this.setIterationTime(0);
              return this;
          }
          this.setIteration(iteration);
          // direction : normal, reverse, alternate, alternate-reverse
          // fillMode : forwards, backwards, both, none
          var isReverse = isDirectionReverse(iteration, iterationCount, direction);
          var isFiniteDuration = isFinite(duration);
          if (isFiniteDuration && isReverse) {
              currentIterationTime = duration - currentIterationTime;
          }
          if (isFiniteDuration && iterationCount !== INFINITE) {
              var isForwards = fillMode === "both" || fillMode === "forwards";
              // fill forwards
              if (iteration >= iterationCount) {
                  currentIterationTime = duration * (isForwards ? (iterationCount % 1) || 1 : 0);
                  isReverse && (currentIterationTime = duration - currentIterationTime);
              }
          }
          this.setIterationTime(currentIterationTime);
          return this;
      };
      Animator.prototype.tick = function (now, to) {
          var _this = this;
          if (this.isPaused()) {
              return;
          }
          var state = this.state;
          var playSpeed = state[PLAY_SPEED];
          var prevTime = state[PREV_TIME];
          var delay = state[DELAY];
          var tickTime = state[TICK_TIME];
          var currentTime = tickTime + Math.min(1000, now - prevTime) / 1000 * playSpeed;
          state[PREV_TIME] = now;
          if (to && to >= currentTime) {
              this.setTime(to - delay, true);
              this.pause();
          }
          else {
              this.setTime(currentTime - delay, true);
          }
          if (state[PLAY_STATE] === PAUSED) {
              return;
          }
          this.timerId = requestAnimationFrame(function (time) {
              _this.tick(time, to);
          });
      };
      Animator = __decorate([
          GetterSetter(ANIMATOR_GETTERS, ANIMATOR_SETTERS, "state")
      ], Animator);
      return Animator;
  }(EventEmitter$1));

  function toInnerProperties(obj, orders) {
      if (orders === void 0) { orders = []; }
      if (!obj) {
          return "";
      }
      var arrObj = [];
      var keys = getKeys(obj);
      sortOrders(keys, orders);
      keys.forEach(function (name) {
          arrObj.push("".concat(name.replace(/\d$/g, ""), "(").concat(obj[name], ")"));
      });
      return arrObj.join(" ");
  }
  /* eslint-disable */
  function clone(target, toValue) {
      if (toValue === void 0) { toValue = false; }
      return merge({}, target, toValue);
  }
  function merge(to, from, toValue) {
      if (toValue === void 0) { toValue = false; }
      for (var name_1 in from) {
          var value = from[name_1];
          var type = getType(value);
          if (type === PROPERTY) {
              to[name_1] = toValue ? value.toValue() : value.clone();
          }
          else if (type === FUNCTION) {
              to[name_1] = toValue ? getValue([name_1], value) : value;
          }
          else if (type === ARRAY) {
              to[name_1] = value.slice();
          }
          else if (type === OBJECT) {
              if (isObject$1(to[name_1]) && !isPropertyObject(to[name_1])) {
                  merge(to[name_1], value, toValue);
              }
              else {
                  to[name_1] = clone(value, toValue);
              }
          }
          else {
              to[name_1] = from[name_1];
          }
      }
      return to;
  }
  /* eslint-enable */
  function getPropertyName(args) {
      return args[0] in ALIAS ? ALIAS[args[0]] : args;
  }
  function getValue(names, value) {
      var type = getType(value);
      if (type === PROPERTY) {
          return value.toValue();
      }
      else if (type === FUNCTION) {
          if (names[0] !== TIMING_FUNCTION) {
              return getValue(names, value());
          }
      }
      else if (type === OBJECT) {
          return clone(value, true);
      }
      return value;
  }
  /**
  * Animation's Frame
  */
  var Frame = /*#__PURE__*/ (function (_super) {
      __extends(Frame, _super);
      /**
       * @param - properties
       * @example
    const frame = new Scene.Frame({
        display: "none"
        transform: {
            translate: "50px",
            scale: "5, 5",
        }
    });
       */
      function Frame(properties) {
          if (properties === void 0) { properties = {}; }
          var _this = _super.call(this) || this;
          _this.properties = {};
          _this.orderMap = new OrderMap$1(NAME_SEPARATOR);
          _this.properties = {};
          // this.orders = [];
          _this.set(properties);
          return _this;
      }
      /**
        * get property value
        * @param {...Number|String|PropertyObject} args - property name or value
        * @example
        frame.get("display") // => "none", "block", ....
        frame.get("transform", "translate") // => "10px,10px"
        */
      Frame.prototype.get = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var value = this.raw.apply(this, args);
          return getValue(getPropertyName(args), value);
      };
      /**
        * get properties orders
        * @param - property names
        * @example
        frame.getOrders(["display"]) // => []
        frame.getOrders(["transform"]) // => ["translate", "scale"]
        */
      Frame.prototype.getOrders = function (names) {
          return this.orderMap.get(names);
      };
      /**
        * set properties orders
        * @param - property names
        * @param - orders
        * @example
        frame.getOrders(["transform"]) // => ["translate", "scale"]
        frame.setOrders(["transform"], ["scale", "tralsate"])
        */
      Frame.prototype.setOrders = function (names, orders) {
          var result = this.orderMap.set(names, orders);
          this._update();
          return result;
      };
      /**
        * get properties order object
        * @example
        console.log(frame.getOrderObject());
        */
      Frame.prototype.getOrderObject = function () {
          return this.orderMap.getObject();
      };
      /**
        * set properties orders object
        * @param - properties orders object
        * @example
        frame.setOrderObject({
            "": ["transform"],
            "transform": ["scale", "tralsate"],
        });
        */
      Frame.prototype.setOrderObject = function (obj) {
          this.orderMap.setObject(obj);
          this._update();
      };
      /**
        * get property keys
        * @param - property names
        * @example
        frame.gets("display") // => []
        frame.gets("transform") // => ["translate"]
        */
      Frame.prototype.getKeys = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var value = this.raw.apply(this, args);
          var keys = getType(value) === OBJECT ? getKeys(value) : [];
          sortOrders(keys, this.orderMap.get(args));
          return keys;
      };
      /**
        * get properties array
        * @param - property names
        * @example
        frame.gets("display") // => []
        frame.gets("transform") // => [{ key: "translate", value: "10px, 10px", children: [] }]
        */
      Frame.prototype.gets = function () {
          var _this = this;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var values = this.get.apply(this, args);
          var keys = this.getKeys.apply(this, args);
          return keys.map(function (key) {
              var nextValue = values[key];
              return { key: key, value: nextValue, children: _this.gets.apply(_this, __spreadArray(__spreadArray([], args, false), [key], false)) };
          });
      };
      Frame.prototype.raw = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          return getValueByNames(getPropertyName(args), this.properties);
      };
      /**
        * remove property value
        * @param {...String} args - property name
        * @return {Frame} An instance itself
        * @example
        frame.remove("display")
        */
      Frame.prototype.remove = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var params = getPropertyName(args);
          var length = params.length;
          if (!length) {
              return this;
          }
          this.orderMap.remove(params);
          var value = getValueByNames(params, this.properties, length - 1);
          if (isObject$1(value)) {
              delete value[params[length - 1]];
          }
          this._update();
          return this;
      };
      /**
        * set property
        * @param {...Number|String|PropertyObject} args - property names or values
        * @return {Frame} An instance itself
        * @example
    // one parameter
    frame.set({
        display: "none",
        transform: {
            translate: "10px, 10px",
            scale: "1",
        },
        filter: {
            brightness: "50%",
            grayscale: "100%"
        }
    });

    // two parameters
    frame.set("transform", {
        translate: "10px, 10px",
        scale: "1",
    });

    // three parameters
    frame.set("transform", "translate", "50px");
      */
      Frame.prototype.set = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          this._set.apply(this, args);
          this._update();
          return this;
      };
      /**
        * Gets the names of properties.
        * @return the names of properties.
        * @example
    // one parameter
    frame.set({
        display: "none",
        transform: {
            translate: "10px, 10px",
            scale: "1",
        },
    });

    // [["display"], ["transform", "translate"], ["transform", "scale"]]
    console.log(frame.getNames());
      */
      Frame.prototype.getNames = function () {
          return getNames(this.properties, []);
      };
      /**
        * check that has property.
        * @param {...String} args - property name
        * @example
        frame.has("property", "display") // => true or false
        */
      Frame.prototype.has = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var params = getPropertyName(args);
          var length = params.length;
          if (!length) {
              return false;
          }
          return !isUndefined$1(getValueByNames(params, this.properties, length));
      };
      /**
        * clone frame.
        * @return {Frame} An instance of clone
        * @example
        frame.clone();
        */
      Frame.prototype.clone = function () {
          var frame = new Frame();
          frame.setOrderObject(this.orderMap.orderMap);
          return frame.merge(this);
      };
      /**
        * merge one frame to other frame.
        * @param - target frame.
        * @return {Frame} An instance itself
        * @example
        frame.merge(frame2);
        */
      Frame.prototype.merge = function (frame) {
          var properties = this.properties;
          var frameProperties = frame.properties;
          if (frameProperties) {
              merge(properties, frameProperties);
          }
          return this;
      };
      /**
        * Specifies an css object that coverted the frame.
        * @param - If you want to return camel case name like css property or react, use the following parameter
        * @return {object} cssObject
        */
      Frame.prototype.toCSSObject = function (useCamelCase) {
          var properties = this.get();
          var cssObject = {};
          for (var name_2 in properties) {
              if (isRole([name_2], true)) {
                  continue;
              }
              var value = properties[name_2];
              if (name_2 === TIMING_FUNCTION) {
                  name_2 = TIMING_FUNCTION.replace("animation", ANIMATION);
                  value = (isString(value) ? value : value[EASING_NAME]) || "initial";
              }
              if (useCamelCase) {
                  name_2 = camelize(name_2.replace(/^[-]+/g, ""));
              }
              cssObject[name_2] = value;
          }
          var transform = toInnerProperties(properties[TRANSFORM_NAME], this.orderMap.get([TRANSFORM_NAME]));
          var filter = toInnerProperties(properties.filter, this.orderMap.get([FILTER]));
          TRANSFORM && transform && (cssObject[TRANSFORM] = transform);
          FILTER && filter && (cssObject[FILTER] = filter);
          return cssObject;
      };
      /**
        * Specifies an css text that coverted the frame.
        * @return {string} cssText
        */
      Frame.prototype.toCSSText = function () {
          var cssObject = this.toCSSObject();
          var cssArray = [];
          var keys = getKeys(cssObject);
          sortOrders(keys, this.orderMap.get([]));
          keys.forEach(function (name) {
              cssArray.push("".concat(decamelize(name, "-"), ":").concat(cssObject[name], ";"));
          });
          return cssArray.join("");
      };
      /**
        * Specifies an css text that coverted the frame.
        * Use `toCSSText()` method.
        * @deprecated
        * @return {string} cssText
        */
      Frame.prototype.toCSS = function () {
          var cssObject = this.toCSSObject();
          var cssArray = [];
          var keys = getKeys(cssObject);
          sortOrders(keys, this.orderMap.get([]));
          keys.forEach(function (name) {
              cssArray.push("".concat(name, ":").concat(cssObject[name], ";"));
          });
          return cssArray.join("");
      };
      /**
        * Remove All Properties
        * @return {Frame} An instance itself
        */
      Frame.prototype.clear = function () {
          this.properties = {};
          this.orderMap.clear();
          return this;
      };
      Frame.prototype._set = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var self = this;
          var length = args.length;
          var params = args.slice(0, -1);
          var value = args[length - 1];
          var firstParam = params[0];
          if (length === 1 && isFrame(value)) {
              self.merge(value);
          }
          else if (firstParam in ALIAS) {
              self._setByPath(ALIAS[firstParam], value);
          }
          else if (length === 2 && isArray(firstParam)) {
              self._setByPath(firstParam, value);
          }
          else if (isPropertyObject(value)) {
              if (isRole(params)) {
                  self._set.apply(self, __spreadArray(__spreadArray([], params, false), [toObject(value)], false));
              }
              else {
                  self._setByPath(params, value);
              }
          }
          else if (isArray(value)) {
              self._setByPath(params, value);
          }
          else if (isObject$1(value)) {
              if (!self.has.apply(self, params) && isRole(params)) {
                  self._setByPath(params, {});
              }
              for (var name_3 in value) {
                  self._set.apply(self, __spreadArray(__spreadArray([], params, false), [name_3, value[name_3]], false));
              }
          }
          else if (isString(value)) {
              if (isRole(params, true)) {
                  if (isFixed(params) || !isRole(params)) {
                      this._setByPath(params, value);
                  }
                  else {
                      var obj = toPropertyObject(value);
                      if (isObject$1(obj)) {
                          self._set.apply(self, __spreadArray(__spreadArray([], params, false), [obj], false));
                      }
                  }
                  return this;
              }
              else {
                  var _a = splitStyle(value), styles = _a.styles, stylesLength = _a.length;
                  for (var name_4 in styles) {
                      self._set.apply(self, __spreadArray(__spreadArray([], params, false), [name_4, styles[name_4]], false));
                  }
                  if (stylesLength) {
                      return this;
                  }
              }
              self._setByPath(params, value);
          }
          else {
              self._setByPath(params, value);
          }
      };
      Frame.prototype._setByPath = function (path, value) {
          var properties = this.properties;
          var length = path.length;
          for (var i = 0; i < length - 1; ++i) {
              var name_5 = path[i];
              !(name_5 in properties) && (properties[name_5] = {});
              properties = properties[name_5];
          }
          if (!length) {
              return;
          }
          var lastParam = path[length - 1];
          this.orderMap.add(path);
          if (length === 1 && lastParam === TIMING_FUNCTION) {
              properties[lastParam] = getEasing(value);
          }
          else {
              properties[lastParam] = isString(value) && !isFixed(path)
                  ? toPropertyObject(value, lastParam)
                  : value;
          }
      };
      Frame.prototype._update = function () {
          this.emit("update");
      };
      return Frame;
  }(EventEmitter$1));

  function dotArray(a1, a2, b1, b2) {
      var length = a2.length;
      return a1.map(function (v1, i) {
          if (i >= length) {
              return v1;
          }
          else {
              return dot(v1, a2[i], b1, b2);
          }
      });
  }
  function dotColor(color1, color2, b1, b2) {
      // convert array to PropertyObject(type=color)
      var value1 = color1.value;
      var value2 = color2.value;
      // If the model name is not same, the inner product is impossible.
      var model1 = color1.model;
      var model2 = color2.model;
      if (model1 !== model2) {
          // It is recognized as a string.
          return dot(color1.toValue(), color2.toValue(), b1, b2);
      }
      if (value1.length === 3) {
          value1[3] = 1;
      }
      if (value2.length === 3) {
          value2[3] = 1;
      }
      var v = dotArray(value1, value2, b1, b2);
      var colorModel = model1;
      for (var i = 0; i < 3; ++i) {
          v[i] = parseInt(v[i], 10);
      }
      var object = new PropertyObject(v, {
          type: "color",
          model: colorModel,
          prefix: "".concat(colorModel, "("),
          suffix: ")",
      });
      return object;
  }
  function dotObject(a1, a2, b1, b2) {
      var a1Type = a1.type;
      if (a1Type === "color") {
          return dotColor(a1, a2, b1, b2);
      }
      var value1 = a1.value;
      var value2 = a2.value;
      var arr = dotArray(value1, value2, b1, b2);
      return new PropertyObject(arr, {
          type: a1Type,
          separator: a1.separator || a2.separator,
          prefix: a1.prefix || a2.prefix,
          suffix: a1.suffix || a2.suffix,
          model: a1.model || a2.model,
      });
  }
  /**
  * The dot product of a1 and a2 for the b1 and b2.
  * @memberof Dot
  * @function dot
  * @param {String|Number|PropertyObject} a1 value1
  * @param {String|Number|PropertyObject} a2 value2
  * @param {Number} b1 b1 ratio
  * @param {Number} b2 b2 ratio
  * @return {String} Not Array, Not Separator, Only Number & Unit
  * @return {PropertyObject} Array with Separator.
  * @example
  dot(1, 3, 0.3, 0.7);
  // => 1.6
  */
  function dot(a1, a2, b1, b2) {
      if (b2 === 0) {
          return a2;
      }
      else if (b1 === 0 || b1 + b2 === 0) {
          // prevent division by zero.
          return a1;
      }
      // dot Object
      var type1 = getType(a1);
      var type2 = getType(a2);
      var isFunction1 = type1 === FUNCTION;
      var isFunction2 = type2 === FUNCTION;
      if (isFunction1 || isFunction2) {
          return function () {
              return dot(isFunction1 ? toPropertyObject(a1()) : a1, isFunction2 ? toPropertyObject(a2()) : a2, b1, b2);
          };
      }
      else if (type1 === type2) {
          if (type1 === PROPERTY) {
              return dotObject(a1, a2, b1, b2);
          }
          else if (type1 === ARRAY) {
              return dotArray(a1, a2, b1, b2);
          }
          else if (type1 !== "value") {
              return a1;
          }
      }
      else {
          return a1;
      }
      var v1 = splitUnit("".concat(a1));
      var v2 = splitUnit("".concat(a2));
      var v;
      // 숫자가 아닐경우 첫번째 값을 반환 b2가 0일경우 두번째 값을 반환
      if (isNaN(v1.value) || isNaN(v2.value)) {
          return a1;
      }
      else {
          v = dot$1(v1.value, v2.value, b1, b2);
      }
      var prefix = v1.prefix || v2.prefix;
      var unit = v1.unit || v2.unit;
      if (!prefix && !unit) {
          return v;
      }
      return prefix + v + unit;
  }
  function dotValue(time, prevTime, nextTime, prevValue, nextValue, easing) {
      if (time === prevTime) {
          return prevValue;
      }
      else if (time === nextTime) {
          return nextValue;
      }
      else if (!easing) {
          return dot(prevValue, nextValue, time - prevTime, nextTime - time);
      }
      var ratio = easing((time - prevTime) / (nextTime - prevTime));
      var value = dot(prevValue, nextValue, ratio, 1 - ratio);
      return value;
  }

  function getNearTimeIndex(times, time) {
      var length = times.length;
      for (var i = 0; i < length; ++i) {
          if (times[i] === time) {
              return [i, i];
          }
          else if (times[i] > time) {
              return [i > 0 ? i - 1 : 0, i];
          }
      }
      return [length - 1, length - 1];
  }
  function makeAnimationProperties(properties) {
      var cssArray = [];
      for (var name_1 in properties) {
          cssArray.push("".concat(ANIMATION, "-").concat(decamelize(name_1), ":").concat(properties[name_1], ";"));
      }
      return cssArray.join("");
  }
  function addTime(times, time) {
      var length = times.length;
      for (var i = 0; i < length; ++i) {
          if (time < times[i]) {
              times.splice(i, 0, time);
              return;
          }
      }
      times[length] = time;
  }
  function addEntry(entries, time, keytime) {
      var prevEntry = entries[entries.length - 1];
      (!prevEntry || prevEntry[0] !== time || prevEntry[1] !== keytime) &&
          entries.push([toFixed(time), toFixed(keytime)]);
  }
  function getEntries(times, states) {
      var entries = times.map(function (time) { return ([time, time]); });
      var nextEntries = [];
      states.forEach(function (state) {
          var iterationCount = state[ITERATION_COUNT];
          var delay = state[DELAY];
          var playSpeed = state[PLAY_SPEED];
          var direction = state[DIRECTION];
          var intCount = Math.ceil(iterationCount);
          var currentDuration = entries[entries.length - 1][0];
          var length = entries.length;
          var lastTime = currentDuration * iterationCount;
          for (var i = 0; i < intCount; ++i) {
              var isReverse = direction === REVERSE ||
                  direction === ALTERNATE && i % 2 ||
                  direction === ALTERNATE_REVERSE && !(i % 2);
              for (var j = 0; j < length; ++j) {
                  var entry = entries[isReverse ? length - j - 1 : j];
                  var time = entry[1];
                  var currentTime = currentDuration * i + (isReverse ? currentDuration - entry[0] : entry[0]);
                  var prevEntry = entries[isReverse ? length - j : j - 1];
                  if (currentTime > lastTime) {
                      if (j !== 0) {
                          var prevTime = currentDuration * i +
                              (isReverse ? currentDuration - prevEntry[0] : prevEntry[0]);
                          var divideTime = dot$1(prevEntry[1], time, lastTime - prevTime, currentTime - lastTime);
                          addEntry(nextEntries, (delay + currentDuration * iterationCount) / playSpeed, divideTime);
                      }
                      break;
                  }
                  else if (currentTime === lastTime
                      && nextEntries.length
                      && nextEntries[nextEntries.length - 1][0] === lastTime + delay) {
                      break;
                  }
                  addEntry(nextEntries, (delay + currentTime) / playSpeed, time);
              }
          }
          // delay time
          delay && nextEntries.unshift([0, nextEntries[0][1]]);
          entries = nextEntries;
          nextEntries = [];
      });
      return entries;
  }
  /**
  * manage Frame Keyframes and play keyframes.
  * @extends Animator
  * @example
  const item = new SceneItem({
      0: {
          display: "none",
      },
      1: {
          display: "block",
          opacity: 0,
      },
      2: {
          opacity: 1,
      }
  });
  */
  var SceneItem = /*#__PURE__*/ (function (_super) {
      __extends(SceneItem, _super);
      /**
        * @param - properties
        * @param - options
        * @example
        const item = new SceneItem({
            0: {
                display: "none",
            },
            1: {
                display: "block",
                opacity: 0,
            },
            2: {
                opacity: 1,
            }
        });
         */
      function SceneItem(properties, options) {
          var _this = _super.call(this) || this;
          _this.times = [];
          _this.items = {};
          _this.nameMap = new OrderMap$1(NAME_SEPARATOR);
          _this.elements = [];
          _this.needUpdate = true;
          _this.registeredElement = false;
          _this.load(properties, options);
          return _this;
      }
      SceneItem.prototype.getDuration = function () {
          var times = this.times;
          var length = times.length;
          return (length === 0 ? 0 : times[length - 1]) || this.state[DURATION];
      };
      /**
        * get size of list
        * @return {Number} length of list
        */
      SceneItem.prototype.size = function () {
          return this.times.length;
      };
      SceneItem.prototype.setDuration = function (duration) {
          if (!duration) {
              return this;
          }
          var originalDuration = this.getDuration();
          if (originalDuration > 0) {
              var ratio_1 = duration / originalDuration;
              var _a = this, times = _a.times, items_1 = _a.items;
              var obj_1 = {};
              this.times = times.map(function (time) {
                  var time2 = toFixed(time * ratio_1);
                  obj_1[time2] = items_1[time];
                  return time2;
              });
              this.items = obj_1;
          }
          else {
              this.newFrame(duration);
          }
          return this;
      };
      SceneItem.prototype.setId = function (id) {
          var state = this.state;
          var elements = this.elements;
          var length = elements.length;
          state.id = id || makeId(!!length);
          if (length && !state[SELECTOR]) {
              var sceneId_1 = toId(this.getId());
              state[SELECTOR] = "[".concat(DATA_SCENE_ID, "=\"").concat(sceneId_1, "\"]");
              elements.forEach(function (element) {
                  element.setAttribute(DATA_SCENE_ID, sceneId_1);
              });
          }
          return this;
      };
      /**
        * Set properties to the sceneItem at that time
        * @param {Number} time - time
        * @param {...String|Object} [properties] - property names or values
        * @return {SceneItem} An instance itself
        * @example
    item.set(0, "a", "b") // item.getFrame(0).set("a", "b")
    console.log(item.get(0, "a")); // "b"
        */
      SceneItem.prototype.set = function (time) {
          var _this = this;
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          if (isSceneItem(time)) {
              return this.set(0, time);
          }
          else if (isArray(time)) {
              var length_1 = time.length;
              for (var i = 0; i < length_1; ++i) {
                  var t = length_1 === 1 ? 0 : this.getUnitTime("".concat(i / (length_1 - 1) * 100, "%"));
                  this.set(t, time[i]);
              }
          }
          else if (isObject$1(time)) {
              var _loop_1 = function (t) {
                  var value = time[t];
                  splitComma(t).forEach(function (eachTime) {
                      var realTime = _this.getUnitTime(eachTime);
                      if (isNaN(realTime)) {
                          getNames(value, [eachTime]).forEach(function (names) {
                              var _a;
                              var innerValue = getValueByNames(names.slice(1), value);
                              var arr = isArray(innerValue) ?
                                  innerValue : [getValueByNames(names, _this.target), innerValue];
                              var length = arr.length;
                              for (var i = 0; i < length; ++i) {
                                  (_a = _this.newFrame("".concat(i / (length - 1) * 100, "%"))).set.apply(_a, __spreadArray(__spreadArray([], names, false), [arr[i]], false));
                              }
                          });
                      }
                      else {
                          _this.set(realTime, value);
                      }
                  });
              };
              for (var t in time) {
                  _loop_1(t);
              }
          }
          else if (!isUndefined$1(time)) {
              var value_1 = args[0];
              splitComma(time + "").forEach(function (eachTime) {
                  var realTime = _this.getUnitTime(eachTime);
                  if (isSceneItem(value_1)) {
                      var delay = value_1.getDelay();
                      var frames_1 = value_1.toObject(!_this.hasFrame(realTime + delay));
                      var duration = value_1.getDuration();
                      var direction = value_1.getDirection();
                      var isReverse = direction.indexOf("reverse") > -1;
                      for (var frameTime in frames_1) {
                          var nextTime = isReverse ? duration - parseFloat(frameTime) : parseFloat(frameTime);
                          _this.set(realTime + nextTime, frames_1[frameTime]);
                      }
                  }
                  else if (args.length === 1 && isArray(value_1)) {
                      value_1.forEach(function (item) {
                          _this.set(realTime, item);
                      });
                  }
                  else {
                      var frame = _this.newFrame(realTime);
                      frame.set.apply(frame, args);
                  }
              });
          }
          this.needUpdate = true;
          return this;
      };
      /**
        * Get properties of the sceneItem at that time
        * @param {Number} time - time
        * @param {...String|Object} args property's name or properties
        * @return {Number|String|PropertyObejct} property value
        * @example
    item.get(0, "a"); // item.getFrame(0).get("a");
    item.get(0, "transform", "translate"); // item.getFrame(0).get("transform", "translate");
        */
      SceneItem.prototype.get = function (time) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          var frame = this.getFrame(time);
          return frame && frame.get.apply(frame, args);
      };
      /**
        * get properties orders
        * @param - property names
        * @example
        item.getOrders(["display"]) // => []
        item.getOrders(["transform"]) // => ["translate", "scale"]
        */
      SceneItem.prototype.getOrders = function (names) {
          this.needUpdate && this.update();
          return this.nameMap.get(names);
      };
      /**
        * set properties orders
        * @param - property names
        * @param - orders
        * @example
        item.getOrders(["transform"]) // => ["translate", "scale"]
        item.setOrders(["transform"], ["scale", "tralsate"])
        */
      SceneItem.prototype.setOrders = function (names, orders) {
          this.needUpdate && this.update();
          var result = this.nameMap.set(names, orders);
          this.updateFrameOrders();
          return result;
      };
      /**
        * get properties order object
        * @example
        console.log(item.getOrderObject());
        */
      SceneItem.prototype.getOrderObject = function () {
          return this.nameMap.getObject();
      };
      /**
        * set properties orders object
        * @param - properties orders object
        * @example
        item.setOrderObject({
            "": ["transform"],
            "transform": ["scale", "tralsate"],
        });
        */
      SceneItem.prototype.setOrderObject = function (obj) {
          this.nameMap.setObject(obj);
          this.updateFrameOrders();
      };
      /**
        * remove properties to the sceneItem at that time
        * @param {Number} time - time
        * @param {...String|Object} [properties] - property names or values
        * @return {SceneItem} An instance itself
        * @example
    item.remove(0, "a");
        */
      SceneItem.prototype.remove = function (time) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          if (args.length) {
              var frame = this.getFrame(time);
              frame && frame.remove.apply(frame, args);
          }
          else {
              this.removeFrame(time);
          }
          this.needUpdate = true;
          return this;
      };
      /**
        * Append the item or object at the last time.
        * @param - the scene item or item object
        * @return An instance itself
        * @example
    item.append(new SceneItem({
        0: {
            opacity: 0,
        },
        1: {
            opacity: 1,
        }
    }));
    item.append({
        0: {
            opacity: 0,
        },
        1: {
            opacity: 1,
        }
    });
    item.set(item.getDuration(), {
        0: {
            opacity: 0,
        },
        1: {
            opacity: 1,
        }
    });
        */
      SceneItem.prototype.append = function (item) {
          if (isSceneItem(item)) {
              this.set(this.getDuration(), item);
          }
          else {
              this.append(new SceneItem(item));
          }
          return this;
      };
      /**
        * Push the front frames for the time and prepend the scene item or item object.
        * @param - the scene item or item object
        * @return An instance itself
        */
      SceneItem.prototype.prepend = function (item) {
          if (isSceneItem(item)) {
              var unshiftTime = item.getDuration() + item.getDelay();
              var firstFrame = this.getFrame(0);
              // remove first frame
              this.removeFrame(0);
              this.unshift(unshiftTime);
              this.set(0, item);
              this.set(unshiftTime + THRESHOLD, firstFrame);
          }
          else {
              this.prepend(new SceneItem(item));
          }
          return this;
      };
      /**
       * Push out the amount of time.
       * @param - time to push
       * @example
     item.get(0); // frame 0
     item.unshift(3);
     item.get(3) // frame 0
       */
      SceneItem.prototype.unshift = function (time) {
          var _a = this, times = _a.times, items = _a.items;
          var obj = {};
          this.times = times.map(function (t) {
              var time2 = toFixed(time + t);
              obj[time2] = items[t];
              return time2;
          });
          this.items = obj;
          return this;
      };
      /**
       * Get the frames in the item in object form.
       * @return {}
       * @example
   item.toObject();
   // {0: {display: "none"}, 1: {display: "block"}}
       */
      SceneItem.prototype.toObject = function (isStartZero) {
          if (isStartZero === void 0) { isStartZero = true; }
          var obj = {};
          var delay = this.getDelay();
          this.forEach(function (frame, time) {
              obj[(!time && !isStartZero ? THRESHOLD : 0) + delay + time] = frame.clone();
          });
          return obj;
      };
      /**
       * Specifies an element to synchronize items' keyframes.
       * @param {string} selectors - Selectors to find elements in items.
       * @return {SceneItem} An instance itself
       * @example
  item.setSelector("#id.class");
       */
      SceneItem.prototype.setSelector = function (target) {
          this.setElement(target);
          return this;
      };
      /**
       * Get the elements connected to SceneItem.
       */
      SceneItem.prototype.getElements = function () {
          return this.elements;
      };
      /**
       * Specifies an element to synchronize item's keyframes.
       * @param - elements to synchronize item's keyframes.
       * @param - Make sure that you have peusdo.
       * @return {SceneItem} An instance itself
       * @example
  item.setElement(document.querySelector("#id.class"));
  item.setElement(document.querySelectorAll(".class"));
       */
      SceneItem.prototype.setElements = function (target) {
          return this.setElement(target);
      };
      /**
       * Specifies an element to synchronize item's keyframes.
       * @param - elements to synchronize item's keyframes.
       * @param - Make sure that you have peusdo.
       * @return {SceneItem} An instance itself
       * @example
  item.setElement(document.querySelector("#id.class"));
  item.setElement(document.querySelectorAll(".class"));
       */
      SceneItem.prototype.setElement = function (target) {
          if (target !== true && this.registeredElement !== target) {
              this.registeredElement = target;
          }
          var state = this.state;
          var selectorTarget = this.registeredElement;
          var elements = [];
          if (isFunction$1(selectorTarget)) {
              selectorTarget(this.getId(), 0);
          }
          if (!target) {
              return this;
          }
          else if (target === true || isString(target)) {
              var prevSelector = (isString(state[SELECTOR]) && state[SELECTOR]) || "".concat(state.id);
              var selector = target === true ? prevSelector : target;
              var matches = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(selector);
              try {
                  elements = toArray($(matches ? matches[1] : selector, true));
              }
              catch (e) {
                  elements = [];
              }
              state[SELECTOR] = selector;
          }
          else if (isArrayLike(target)) {
              elements = toArray(target);
          }
          else if (target instanceof Element) {
              elements = [target];
          }
          else if ("current" in target || "value" in target) {
              var currentTarget = target.current || target.value;
              if (currentTarget) {
                  elements = [currentTarget];
              }
              else {
                  elements = [];
              }
          }
          if (!elements.length) {
              return this;
          }
          this.elements = elements;
          this.setId(this.getId());
          this.target = elements[0].style;
          this.targetFunc = function (frame) {
              var attributes = frame.get("attribute");
              if (attributes) {
                  var _loop_2 = function (name_2) {
                      elements.forEach(function (el) {
                          el.setAttribute(name_2, attributes[name_2]);
                      });
                  };
                  for (var name_2 in attributes) {
                      _loop_2(name_2);
                  }
              }
              if (frame.has("html")) {
                  var html_1 = frame.get("html");
                  elements.forEach(function (el) {
                      el.innerHTML = html_1;
                  });
              }
              var cssText = frame.toCSSText();
              if (state.cssText !== cssText) {
                  state.cssText = cssText;
                  elements.forEach(function (el) {
                      el.style.cssText += cssText;
                  });
                  return frame;
              }
          };
          return this;
      };
      SceneItem.prototype.setTarget = function (target) {
          this.target = target;
          this.targetFunc = function (frame) {
              var obj = frame.get();
              for (var name_3 in obj) {
                  target[name_3] = obj[name_3];
              }
          };
          return this;
      };
      /**
        * add css styles of items's element to the frame at that time.
        * @param - Time to synchronize and set css
        * @param - elements to synchronize item's keyframes.
        * @return {SceneItem} An instance itself
        * @example
    item.setElement(document.querySelector("#id.class"));
    item.setCSS(0, ["opacity"]);
    item.setCSS(0, ["opacity", "width", "height"]);
        */
      SceneItem.prototype.setCSS = function (time, properties) {
          if (properties === void 0) { properties = []; }
          this.set(time, fromCSS(this.elements, properties));
          return this;
      };
      SceneItem.prototype.setTime = function (time, isTick, isParent, parentEasing) {
          var _this = this;
          _super.prototype.setTime.call(this, time, isTick, isParent, function () {
              var iterationTime = _this.getIterationTime();
              var easing = _this.getEasing() || parentEasing;
              var frame = _this.getNowFrame(iterationTime, easing);
              var currentTime = _this.getTime();
              _this.temp = frame;
              /**
               * This event is fired when timeupdate and animate.
               * @event SceneItem#animate
               * @param {Number} param.currentTime The total time that the animator is running.
               * @param {Number} param.time The iteration time during duration that the animator is running.
               * @param {Frame} param.frame frame of that time.
               */
              _this.trigger("animate", {
                  frame: frame,
                  currentTime: currentTime,
                  time: iterationTime,
              });
              _this.targetFunc && _this.targetFunc(frame);
          });
          return this;
      };
      /**
        * update property names used in frames.
        * @return {SceneItem} An instance itself
        * @example
    item.update();
        */
      SceneItem.prototype.update = function () {
          var prevNameMap = this.nameMap;
          var names = {};
          this.forEach(function (frame) {
              updateFrame(names, frame.properties);
          });
          var nameMap = new OrderMap$1(NAME_SEPARATOR);
          function pushKeys(map, stack) {
              var keys = getKeys(map);
              sortOrders(keys, prevNameMap.get(stack));
              nameMap.set(stack, keys);
              keys.forEach(function (key) {
                  var nextMap = map[key];
                  if (isObject$1(nextMap)) {
                      pushKeys(nextMap, __spreadArray(__spreadArray([], stack, true), [key], false));
                  }
              });
          }
          pushKeys(names, []);
          this.nameMap = nameMap;
          this.forEach(function (frame) {
              frame.setOrderObject(nameMap.orderMap);
          });
          this.needUpdate = false;
          return this;
      };
      /**
        * Create and add a frame to the sceneItem at that time
        * @param {Number} time - frame's time
        * @return {Frame} Created frame.
        * @example
    item.newFrame(time);
        */
      SceneItem.prototype.newFrame = function (time) {
          var frame = this.getFrame(time);
          if (frame) {
              return frame;
          }
          frame = new Frame();
          this.setFrame(time, frame);
          return frame;
      };
      /**
        * Add a frame to the sceneItem at that time
        * @param {Number} time - frame's time
        * @return {SceneItem} An instance itself
        * @example
    item.setFrame(time, frame);
        */
      SceneItem.prototype.setFrame = function (time, frame) {
          var realTime = this.getUnitTime(time);
          this.items[realTime] = frame;
          addTime(this.times, realTime);
          this.needUpdate = true;
          return this;
      };
      /**
        * get sceneItem's frame at that time
        * @param {Number} time - frame's time
        * @return {Frame} sceneItem's frame at that time
        * @example
    const frame = item.getFrame(time);
        */
      SceneItem.prototype.getFrame = function (time) {
          return this.items[this.getUnitTime(time)];
      };
      /**
        * remove sceneItem's frame at that time
        * @param - frame's time
        * @return {SceneItem} An instance itself
        * @example
    item.removeFrame(time);
        */
      SceneItem.prototype.removeFrame = function (time) {
          var realTime = this.getUnitTime(time);
          var items = this.items;
          var index = this.times.indexOf(realTime);
          delete items[realTime];
          // remove time
          if (index > -1) {
              this.times.splice(index, 1);
          }
          this.needUpdate = true;
          return this;
      };
      /**
        * check if the item has a frame at that time
        * @param {Number} time - frame's time
        * @return {Boolean} true: the item has a frame // false: not
        * @example
    if (item.hasFrame(10)) {
        // has
    } else {
        // not
    }
        */
      SceneItem.prototype.hasFrame = function (time) {
          return this.getUnitTime(time) in this.items;
      };
      /**
        * Check if keyframes has propery's name
        * @param - property's time
        * @return {boolean} true: if has property, false: not
        * @example
      item.hasName(["transform", "translate"]); // true or not
        */
      SceneItem.prototype.hasName = function (args) {
          this.needUpdate && this.update();
          return !!this.nameMap.get(args);
      };
      /**
        * merge frame of the previous time at the next time.
      * @param - The time of the frame to merge
      * @param - The target frame
        * @return {SceneItem} An instance itself
        * @example
    // getFrame(1) contains getFrame(0)
    item.merge(0, 1);
        */
      SceneItem.prototype.mergeFrame = function (time, frame) {
          if (frame) {
              var toFrame = this.newFrame(time);
              toFrame.merge(frame);
          }
          return this;
      };
      /**
        * Get frame of the current time
        * @param {Number} time - the current time
        * @param {function} easing - the speed curve of an animation
        * @return {Frame} frame of the current time
        * @example
    let item = new SceneItem({
        0: {
            display: "none",
        },
        1: {
            display: "block",
            opacity: 0,
        },
        2: {
            opacity: 1,
        }
    });
    // opacity: 0.7; display:"block";
    const frame = item.getNowFrame(1.7);
        */
      SceneItem.prototype.getNowFrame = function (time, parentEasing, isAccurate) {
          var _this = this;
          this.needUpdate && this.update();
          var frame = new Frame();
          var _a = getNearTimeIndex(this.times, time), left = _a[0], right = _a[1];
          var realEasing = this.getEasing() || parentEasing;
          var nameMap = this.nameMap;
          if (this.hasName([TIMING_FUNCTION])) {
              var nowEasing = this.getNowValue(time, [TIMING_FUNCTION], left, right, false, 0, true);
              isFunction$1(nowEasing) && (realEasing = nowEasing);
          }
          if (isAccurate) {
              var prevFrame_1 = this.getFrame(time);
              var prevOrderMap = prevFrame_1.orderMap.filter([], function (orders) {
                  return prevFrame_1.has.apply(prevFrame_1, orders);
              });
              for (var name_4 in ROLES) {
                  var orders = nameMap.get([name_4]);
                  if (prevOrderMap.get([name_4]) && orders) {
                      prevOrderMap.set([name_4], orders);
                  }
              }
              nameMap = prevOrderMap;
          }
          var names = nameMap.gets([]);
          frame.setOrderObject(nameMap.orderMap);
          names.forEach(function (properties) {
              var value = _this.getNowValue(time, properties, left, right, isAccurate, realEasing, isFixed(properties));
              if (isUndefined$1(value)) {
                  return;
              }
              frame.set(properties, value);
          });
          return frame;
      };
      /**
       * Get the current computed frame.
       * (If needUpdate is true, get a new computed frame, not the temp that has already been saved.)
       */
      SceneItem.prototype.getCurrentFrame = function (needUpdate, parentEasing) {
          var iterationTime = this.getIterationTime();
          var frame = needUpdate || this.needUpdate || !this.temp
              ? this.getComputedFrame(iterationTime, parentEasing)
              : this.temp;
          this.temp = frame;
          return frame;
      };
      /**
       * Get the computed frame corresponding to the time.
       */
      SceneItem.prototype.getComputedFrame = function (time, parentEasing, isAccurate) {
          return this.getNowFrame(time, parentEasing, isAccurate);
      };
      SceneItem.prototype.load = function (properties, options) {
          var _a;
          if (properties === void 0) { properties = {}; }
          if (options === void 0) { options = properties.options; }
          options && this.setOptions(options);
          if (isArray(properties)) {
              this.set(properties);
          }
          else if (properties.keyframes) {
              this.set(properties.keyframes);
          }
          else {
              for (var time in properties) {
                  if (time !== "options") {
                      this.set((_a = {},
                          _a[time] = properties[time],
                          _a));
                  }
              }
          }
          if (options && options[DURATION]) {
              this.setDuration(options[DURATION]);
          }
          return this;
      };
      /**
         * clone SceneItem.
         * @return {SceneItem} An instance of clone
         * @example
         * item.clone();
         */
      SceneItem.prototype.clone = function () {
          var item = new SceneItem();
          item.setOptions(this.state);
          item.setOrderObject(this.nameMap.orderMap);
          this.forEach(function (frame, time) {
              item.setFrame(time, frame.clone());
          });
          return item;
      };
      /**
         * executes a provided function once for each scene item.
         * @param - Function to execute for each element, taking three arguments
         * @return {Keyframes} An instance itself
         */
      SceneItem.prototype.forEach = function (callback) {
          var times = this.times;
          var items = this.items;
          times.forEach(function (time) {
              callback(items[time], time, items);
          });
          return this;
      };
      SceneItem.prototype.setOptions = function (options) {
          if (options === void 0) { options = {}; }
          _super.prototype.setOptions.call(this, options);
          var id = options.id, selector = options.selector, elements = options.elements, element = options.element, target = options.target;
          id && this.setId(id);
          if (target) {
              this.setTarget(target);
          }
          else if (selector && !this.state.noRegisterElement) {
              this.setSelector(selector);
          }
          else if (elements || element) {
              this.setElement(elements || element);
          }
          return this;
      };
      SceneItem.prototype.toCSS = function (playCondition, parentDuration, states) {
          if (playCondition === void 0) { playCondition = { className: START_ANIMATION }; }
          if (parentDuration === void 0) { parentDuration = this.getDuration(); }
          if (states === void 0) { states = []; }
          var itemState = this.state;
          var selector = itemState[SELECTOR];
          if (!selector) {
              return "";
          }
          var originalDuration = this.getDuration();
          itemState[DURATION] = originalDuration;
          states.push(itemState);
          var reversedStates = toArray(states).reverse();
          var id = toId(getRealId(this));
          var superParent = states[0];
          var infiniteIndex = findIndex(reversedStates, function (state) {
              return state[ITERATION_COUNT] === INFINITE || !isFinite(state[DURATION]);
          }, states.length - 1);
          var finiteStates = reversedStates.slice(0, infiniteIndex);
          var duration = parentDuration || finiteStates.reduce(function (prev, cur) {
              return (cur[DELAY] + prev * cur[ITERATION_COUNT]) / cur[PLAY_SPEED];
          }, originalDuration);
          var delay = reversedStates.slice(infiniteIndex).reduce(function (prev, cur) {
              return (prev + cur[DELAY]) / cur[PLAY_SPEED];
          }, 0);
          var easingName = find(reversedStates, function (state) { return (state[EASING] && state[EASING_NAME]); }, itemState)[EASING_NAME];
          var iterationCount = reversedStates[infiniteIndex][ITERATION_COUNT];
          var fillMode = superParent[FILL_MODE];
          var direction = reversedStates[infiniteIndex][DIRECTION];
          var cssText = makeAnimationProperties({
              fillMode: fillMode,
              direction: direction,
              iterationCount: iterationCount,
              delay: "".concat(delay, "s"),
              name: "".concat(PREFIX, "KEYFRAMES_").concat(id),
              duration: "".concat(duration / superParent[PLAY_SPEED], "s"),
              timingFunction: easingName,
          });
          var selectors = splitComma(selector).map(function (sel) {
              var matches = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(sel);
              if (matches) {
                  return [matches[1], matches[2]];
              }
              else {
                  return [sel, ""];
              }
          });
          var className = playCondition.className;
          var selectorCallback = playCondition.selector;
          var preselector = isFunction$1(selectorCallback) ? selectorCallback(this, selector) : selectorCallback;
          return "\n    ".concat(preselector || selectors.map(function (_a) {
              var sel = _a[0], peusdo = _a[1];
              return "".concat(sel, ".").concat(className).concat(peusdo);
          }), " {").concat(cssText, "}\n    ").concat(selectors.map(function (_a) {
              var sel = _a[0], peusdo = _a[1];
              return "".concat(sel, ".").concat(PAUSE_ANIMATION).concat(peusdo);
          }), " {").concat(ANIMATION, "-play-state: paused;}\n    @").concat(KEYFRAMES, " ").concat(PREFIX, "KEYFRAMES_").concat(id, "{").concat(this._toKeyframes(duration, finiteStates, direction), "}");
      };
      /**
       * Export the CSS of the items to the style.
       * @param - Add a selector or className to play.
       * @return {SceneItem} An instance itself
       */
      SceneItem.prototype.exportCSS = function (playCondition, duration, options) {
          if (!this.elements.length) {
              return "";
          }
          var css = this.toCSS(playCondition, duration, options);
          var isParent = options && !isUndefined$1(options[ITERATION_COUNT]);
          if (!isParent) {
              if (this.styledInjector) {
                  this.styledInjector.destroy();
                  this.styledInjector = null;
              }
              this.styled = styled(css);
              this.styledInjector = this.styled.inject(this.getAnimationElement(), { original: true });
          }
          return this;
      };
      SceneItem.prototype.pause = function () {
          _super.prototype.pause.call(this);
          isPausedCSS(this) && this.pauseCSS();
          return this;
      };
      SceneItem.prototype.pauseCSS = function () {
          this.elements.forEach(function (element) {
              addClass(element, PAUSE_ANIMATION);
          });
          return this;
      };
      SceneItem.prototype.endCSS = function () {
          this.elements.forEach(function (element) {
              removeClass(element, PAUSE_ANIMATION);
              removeClass(element, START_ANIMATION);
          });
          setPlayCSS(this, false);
          return this;
      };
      SceneItem.prototype.end = function () {
          isEndedCSS(this) && this.endCSS();
          _super.prototype.end.call(this);
          return this;
      };
      /**
        * Play using the css animation and keyframes.
        * @param - Check if you want to export css.
        * @param [playClassName="startAnimation"] - Add a class name to play.
        * @param - The shorthand properties for six of the animation properties.
        * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
        * @example
    item.playCSS();
    item.playCSS(false, "startAnimation", {
        direction: "reverse",
        fillMode: "forwards",
    });
        */
      SceneItem.prototype.playCSS = function (isExportCSS, playClassName, properties) {
          if (isExportCSS === void 0) { isExportCSS = true; }
          if (properties === void 0) { properties = {}; }
          playCSS(this, isExportCSS, playClassName, properties);
          return this;
      };
      SceneItem.prototype.getAnimationElement = function () {
          return this.elements[0];
      };
      SceneItem.prototype.addPlayClass = function (isPaused, playClassName, properties) {
          if (properties === void 0) { properties = {}; }
          var elements = this.elements;
          var length = elements.length;
          var cssText = makeAnimationProperties(properties);
          if (!length) {
              return;
          }
          if (isPaused) {
              elements.forEach(function (element) {
                  removeClass(element, PAUSE_ANIMATION);
              });
          }
          else {
              elements.forEach(function (element) {
                  element.style.cssText += cssText;
                  if (hasClass(element, START_ANIMATION)) {
                      removeClass(element, START_ANIMATION);
                  }
              });
              elements.forEach(function (element) {
                  element.clientWidth;
              });
              elements.forEach(function (element) {
                  addClass(element, START_ANIMATION);
              });
          }
          return elements[0];
      };
      /**
        * Clear All Frames
        * @return {SceneItem} An instance itself
        */
      SceneItem.prototype.clear = function () {
          this.times = [];
          this.items = {};
          this.nameMap = new OrderMap$1(NAME_SEPARATOR);
          if (this.styledInjector) {
              this.styledInjector.destroy();
          }
          this.styled = null;
          this.styledInjector = null;
          this.temp = null;
          this.needUpdate = true;
          return this;
      };
      SceneItem.prototype.getNowValue = function (time, properties, left, right, isAccurate, easing, usePrevValue) {
          var times = this.times;
          var length = times.length;
          var prevTime;
          var nextTime;
          var prevFrame;
          var nextFrame;
          var isUndefinedLeft = isUndefined$1(left);
          var isUndefinedRight = isUndefined$1(right);
          if (isUndefinedLeft || isUndefinedRight) {
              var indicies = getNearTimeIndex(times, time);
              isUndefinedLeft && (left = indicies[0]);
              isUndefinedRight && (right = indicies[1]);
          }
          for (var i = left; i >= 0; --i) {
              var frame = this.getFrame(times[i]);
              if (frame.has.apply(frame, properties)) {
                  prevTime = times[i];
                  prevFrame = frame;
                  break;
              }
          }
          var prevValue = prevFrame && prevFrame.raw.apply(prevFrame, properties);
          if (isAccurate && !isRole([properties[0]])) {
              return prevTime === time ? prevValue : undefined;
          }
          if (usePrevValue) {
              return prevValue;
          }
          for (var i = right; i < length; ++i) {
              var frame = this.getFrame(times[i]);
              if (frame.has.apply(frame, properties)) {
                  nextTime = times[i];
                  nextFrame = frame;
                  break;
              }
          }
          var nextValue = nextFrame && nextFrame.raw.apply(nextFrame, properties);
          if (!prevFrame || isUndefined$1(prevValue)) {
              return nextValue;
          }
          if (!nextFrame || isUndefined$1(nextValue) || prevValue === nextValue) {
              return prevValue;
          }
          return dotValue(time, Math.max(prevTime, 0), nextTime, prevValue, nextValue, easing);
      };
      SceneItem.prototype._toKeyframes = function (duration, states, direction) {
          var _this = this;
          var frames = {};
          var times = this.times.slice();
          if (!times.length) {
              return "";
          }
          var originalDuration = this.getDuration();
          (!this.getFrame(0)) && times.unshift(0);
          (!this.getFrame(originalDuration)) && times.push(originalDuration);
          var entries = getEntries(times, states);
          var lastEntry = entries[entries.length - 1];
          // end delay time
          lastEntry[0] < duration && addEntry(entries, duration, lastEntry[1]);
          var prevTime = -1;
          return entries.map(function (_a) {
              var time = _a[0], keytime = _a[1];
              if (!frames[keytime]) {
                  frames[keytime] =
                      (!_this.hasFrame(keytime) || keytime === 0 || keytime === originalDuration ?
                          _this.getNowFrame(keytime) : _this.getNowFrame(keytime, 0, true)).toCSSText();
              }
              var frameTime = time / duration * 100;
              if (frameTime - prevTime < THRESHOLD) {
                  frameTime += THRESHOLD;
              }
              prevTime = frameTime;
              return "".concat(Math.min(frameTime, 100), "%{\n                ").concat(time === 0 && !isDirectionReverse(0, 1, direction) ? "" : frames[keytime], "\n            }");
          }).join("");
      };
      SceneItem.prototype.updateFrameOrders = function () {
          var nameMap = this.nameMap.orderMap;
          this.forEach(function (frame) {
              frame.setOrderObject(nameMap);
          });
      };
      return SceneItem;
  }(Animator));

  /**
   * manage sceneItems and play Scene.
   * @extends Animator
   * @sort 1
   */
  var Scene = /*#__PURE__*/ (function (_super) {
      __extends(Scene, _super);
      /**
      * @param - properties
      * @param - options
      * @example
      const scene = new Scene({
        item1: {
          0: {
            display: "none",
          },
          1: {
            display: "block",
            opacity: 0,
          },
          2: {
            opacity: 1,
          },
        },
        item2: {
          2: {
            opacity: 1,
          },
        }
      });
        */
      function Scene(properties, options) {
          var _this = _super.call(this) || this;
          _this.items = {};
          _this.orderMap = new OrderMap$1(NAME_SEPARATOR);
          _this.load(properties, options);
          return _this;
      }
      Scene.prototype.getDuration = function () {
          var time = 0;
          this.forEach(function (item) {
              time = Math.max(time, item.getTotalDuration() / item.getPlaySpeed());
          });
          return time || this.state[DURATION];
      };
      Scene.prototype.setDuration = function (duration) {
          this.items;
          var sceneDuration = this.getDuration();
          if (duration === 0 || !isFinite(sceneDuration)) {
              return this;
          }
          if (sceneDuration === 0) {
              this.forEach(function (item) {
                  item.setDuration(duration);
              });
          }
          else {
              var ratio_1 = duration / sceneDuration;
              this.forEach(function (item) {
                  item.setDelay(item.getDelay() * ratio_1);
                  item.setDuration(item.getDuration() * ratio_1);
              });
          }
          _super.prototype.setDuration.call(this, duration);
          return this;
      };
      /**
      * get item in scene by name
      * @param - The item's name
      * @return {Scene | SceneItem} item
      * @example
      const item = scene.getItem("item1")
      */
      Scene.prototype.getItem = function (name) {
          return this.items[name];
      };
      /**
      * create item in scene
      * @param {} name - name of item to create
      * @param {} options - The option object of SceneItem
      * @return {} Newly created item
      * @example
      const item = scene.newItem("item1")
      */
      Scene.prototype.newItem = function (name, options) {
          if (options === void 0) { options = {}; }
          if (this.items[name]) {
              return this.items[name];
          }
          var item = new SceneItem();
          this.setItem(name, item);
          item.setOptions(options);
          return item;
      };
      /**
      * remove item in scene
      * @param - name of item to remove
      * @return  An instance itself
      * @example
      const item = scene.newItem("item1")

      scene.removeItem("item1");
      */
      Scene.prototype.removeItem = function (name) {
          delete this.items[name];
          this.orderMap.remove([name]);
          return this;
      };
      /**
      * add a sceneItem to the scene
      * @param - name of item to create
      * @param - sceneItem
      * @example
      const item = scene.newItem("item1")
      */
      Scene.prototype.setItem = function (name, item) {
          item.setId(name);
          this.items[name] = item;
          this.orderMap.add([name]);
          return this;
      };
      /**
      * Get the current computed frames.
      * (If needUpdate is true, get a new computed frames, not the temp that has already been saved.)
      */
      Scene.prototype.getCurrentFrames = function (needUpdate, parentEasing) {
          var easing = this.getEasing() || parentEasing;
          var frames = {};
          this.forEach(function (item) {
              var id = item.getId();
              if (isScene(item)) {
                  frames[id] = item.getCurrentFrames(needUpdate, easing);
              }
              else {
                  frames[id] = item.getCurrentFrame(needUpdate, easing);
              }
          });
          this.temp = frames;
          return frames;
      };
      /**
     * Get the current flatted computed frames.
     * (If needUpdate is true, get a new computed frames, not the temp that has already been saved.)
     * If there is a scene in the scene, you can get a flatted frame map.
     * @example
     * import Scene, { NAME_SEPARATOR } from "scenejs";
     *
     * {
     *   "a": Frame,
     *   "b": {
     *     "b1": Frame,
     *     "b2": Frame,
     *   },
     * }
     * const frames = scene.getCurrentFrames();
     * {
     *   "a": Frame,
     *   "b_///_b1": Frame,
     *   "b_///_b2": Frame,
     * }
     * const frames = scene.getCurrentFlattedFrames();
     *
     */
      Scene.prototype.getCurrentFlattedFrames = function (needUpdate, parentEasing) {
          var frames = this.getCurrentFrames(needUpdate, parentEasing);
          return flatSceneObject(frames, NAME_SEPARATOR);
      };
      Scene.prototype.setTime = function (time, isTick, isParent, parentEasing) {
          var _this = this;
          _super.prototype.setTime.call(this, time, isTick, isParent, function () {
              var iterationTime = _this.getIterationTime();
              var easing = _this.getEasing() || parentEasing;
              _this.forEach(function (item) {
                  item.setTime(iterationTime * item.getPlaySpeed() - item.getDelay(), isTick, true, easing);
              });
              var frames = _this.getCurrentFrames(false, parentEasing);
              /**
               * This event is fired when timeupdate and animate.
               * @event Scene#animate
               * @param {object} param The object of data to be sent to an event.
               * @param {number} param.currentTime The total time that the animator is running.
               * @param {number} param.time The iteration time during duration that the animator is running.
               * @param {object} param.frames frames of that time.
               * @example
  const scene = new Scene({
      a: {
          0: {
              opacity: 0,
          },
          1: {
              opacity: 1,
          }
      },
      b: {
          0: {
              opacity: 0,
          },
          1: {
              opacity: 1,
          }
      }
  }).on("animate", e => {
      console.log(e.frames);
      // {a: Frame, b: Frame}
      console.log(e.frames.a.get("opacity"));
  });
                   */
              _this.trigger("animate", {
                  frames: frames,
                  currentTime: _this.getTime(),
                  time: iterationTime,
              });
          });
          return this;
      };
      /**
       * executes a provided function once for each scene item.
       * @param - Function to execute for each element, taking three arguments
       * @return {Scene} An instance itself
       */
      Scene.prototype.forEach = function (func) {
          var items = this.items;
          this.getOrders().forEach(function (id, index) {
              func(items[id], id, index, items);
          });
          return this;
      };
      Scene.prototype.toCSS = function (playCondition, duration, parentStates) {
          if (duration === void 0) { duration = this.getDuration(); }
          if (parentStates === void 0) { parentStates = []; }
          var totalDuration = !duration || !isFinite(duration) ? 0 : duration;
          var styles = [];
          var state = this.state;
          state[DURATION] = this.getDuration();
          this.forEach(function (item) {
              styles.push(item.toCSS(playCondition, totalDuration, parentStates.concat(state)));
          });
          return styles.join("");
      };
      /**
       * Export the CSS of the items to the style.
       * @param - Add a selector or className to play.
       * @return {Scene} An instance itself
       */
      Scene.prototype.exportCSS = function (playCondition, duration, parentStates) {
          var css = this.toCSS(playCondition, duration, parentStates);
          if (!parentStates || !parentStates.length) {
              if (this.styledInjector) {
                  this.styledInjector.destroy();
                  this.styledInjector = null;
              }
              this.styled = styled(css);
              this.styledInjector = this.styled.inject(this.getAnimationElement(), { original: true });
              // && exportCSS(getRealId(this), css);
          }
          return this;
      };
      Scene.prototype.append = function (item) {
          item.setDelay(item.getDelay() + this.getDuration());
          this.setItem(getRealId(item), item);
      };
      Scene.prototype.pauseCSS = function () {
          return this.forEach(function (item) {
              item.pauseCSS();
          });
      };
      Scene.prototype.pause = function () {
          _super.prototype.pause.call(this);
          isPausedCSS(this) && this.pauseCSS();
          this.forEach(function (item) {
              item.pause();
          });
          return this;
      };
      Scene.prototype.endCSS = function () {
          this.forEach(function (item) {
              item.endCSS();
          });
          setPlayCSS(this, false);
      };
      Scene.prototype.end = function () {
          isEndedCSS(this) && this.endCSS();
          _super.prototype.end.call(this);
          return this;
      };
      /**
    * get item orders
    * @example
    scene.getOrders() // => ["item1", "item2"]
    */
      Scene.prototype.getOrders = function () {
          return this.orderMap.get([]) || [];
      };
      /**
        * set item orders
        * @param - orders
        * @example
        frame.setOrders(["item2", "item1"]) // => ["item2", "item1"]
        */
      Scene.prototype.setOrders = function (orders) {
          return this.orderMap.set([], orders);
      };
      Scene.prototype.getAnimationElement = function () {
          var animtionElement;
          this.forEach(function (item) {
              var el = item.getAnimationElement();
              !animtionElement && (animtionElement = el);
          });
          return animtionElement;
      };
      Scene.prototype.addPlayClass = function (isPaused, playClassName, properties) {
          if (properties === void 0) { properties = {}; }
          var animtionElement;
          this.forEach(function (item) {
              var el = item.addPlayClass(isPaused, playClassName, properties);
              !animtionElement && (animtionElement = el);
          });
          return animtionElement;
      };
      /**
      * Play using the css animation and keyframes.
      * @param - Check if you want to export css.
      * @param [playClassName="startAnimation"] - Add a class name to play.
      * @param - The shorthand properties for six of the animation properties.
      * @return {Scene} An instance itself
      * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
      * @example
      scene.playCSS();
      scene.playCSS(false, {
      direction: "reverse",
      fillMode: "forwards",
      });
      */
      Scene.prototype.playCSS = function (isExportCSS, playClassName, properties) {
          if (isExportCSS === void 0) { isExportCSS = true; }
          if (properties === void 0) { properties = {}; }
          playCSS(this, isExportCSS, playClassName, properties);
          return this;
      };
      /**
        * Set properties to the Scene.
        * @param - properties
        * @return An instance itself
        * @example
  scene.set({
      ".a": {
          0: {
              opacity: 0,
          },
          1: {
              opacity: 1,
          },
      },
  });
  // 0
  console.log(scene.getItem(".a").get(0, "opacity"));
  // 1
  console.log(scene.getItem(".a").get(1, "opacity"));
        */
      Scene.prototype.set = function (properties) {
          this.load(properties);
          return this;
      };
      /**
        * Clear All Items
        * @return {Scene} An instance itself
        */
      Scene.prototype.clear = function () {
          this.finish();
          this.items = {};
          this.orderMap = new OrderMap$1(NAME_SEPARATOR);
          if (this.styledInjector) {
              this.styledInjector.destroy();
          }
          this.styled = null;
          this.styledInjector = null;
      };
      Scene.prototype.load = function (properties, options) {
          if (properties === void 0) { properties = {}; }
          if (options === void 0) { options = properties.options; }
          if (!properties) {
              return this;
          }
          this.setOptions(options);
          var selector = options && options[SELECTOR] || this.state[SELECTOR];
          var _loop_1 = function (name_1) {
              if (name_1 === "options") {
                  return "continue";
              }
              var object = properties[name_1];
              var item = void 0;
              if (isScene(object) || isSceneItem(object)) {
                  this_1.setItem(name_1, object);
                  item = object;
              }
              else if (isFunction$1(object)) {
                  var elements = [];
                  if (selector && IS_WINDOW) {
                      if (!this_1.state.noRegisterElement) {
                          elements = $("".concat(isFunction$1(selector) ? selector(name_1) : name_1), true);
                      }
                  }
                  var elementsLength = elements.length;
                  var length_1 = elementsLength || object.defaultCount || 0;
                  var scene = new Scene();
                  var ids_1 = [];
                  for (var i = 0; i < length_1; ++i) {
                      var element = elements[i];
                      var subItem = scene.newItem(i);
                      subItem.setId().load(object(i, elements[i]));
                      ids_1.push(subItem.getId());
                      if (element) {
                          subItem.setElement(element);
                      }
                  }
                  if (!elementsLength) {
                      var subElements_1 = [];
                      scene.state[SELECTOR] = function (id) {
                          if (!subElements_1.length) {
                              subElements_1 = $("".concat(isFunction$1(selector) ? selector(name_1) : name_1), true);
                          }
                          return subElements_1[ids_1.indexOf(id)];
                      };
                  }
                  this_1.setItem(name_1, scene);
                  return "continue";
              }
              else {
                  item = this_1.newItem(name_1, {
                      noRegisterElement: true,
                  });
                  item.load(object);
              }
              if (!this_1.state.noRegisterElement) {
                  selector && item.setSelector(selector);
              }
          };
          var this_1 = this;
          for (var name_1 in properties) {
              _loop_1(name_1);
          }
      };
      Scene.prototype.setOptions = function (options) {
          if (options === void 0) { options = {}; }
          _super.prototype.setOptions.call(this, options);
          var selector = options.selector;
          if (selector) {
              this.state[SELECTOR] = selector;
          }
          return this;
      };
      Scene.prototype.setSelector = function (target) {
          var state = this.state;
          var selector = target === true ? state[SELECTOR] || true : target;
          state[SELECTOR] = selector;
          var isItFunction = isFunction$1(target);
          if (selector) {
              this.forEach(function (item, name) {
                  item.setSelector(isItFunction ? target(name) : selector);
              });
          }
          return this;
      };
      Scene.prototype.start = function (delay) {
          if (delay === void 0) { delay = this.state[DELAY]; }
          var result = _super.prototype.start.call(this, delay);
          if (result) {
              this.forEach(function (item) {
                  item.start(0);
              });
          }
          else {
              this.forEach(function (item) {
                  item.setPlayState(RUNNING);
              });
          }
          return result;
      };
      /**
      * version info
      * @type {string}
      * @example
      * Scene.VERSION // 1.10.0
      */
      Scene.VERSION = "1.10.0";
      return Scene;
  }(Animator));

  function getMethodNames(classConstructor) {
      var prototype = classConstructor.prototype;
      return getKeys(prototype).filter(function (name) {
          var descriptor = Object.getOwnPropertyDescriptor(prototype, name);
          if (name === "constructor") {
              return false;
          }
          return !descriptor.get && !descriptor.set && isFunction$1(descriptor.value || prototype[name]);
      });
  }
  var EMITTER_METHODS = getMethodNames(EventEmitter$1);
  var ANIMATOR_METHODS = __spreadArray(__spreadArray([], EMITTER_METHODS, true), getMethodNames(Animator), true);

  __spreadArray(__spreadArray([], ANIMATOR_METHODS, true), getMethodNames(Scene), true);

  __spreadArray(__spreadArray([], ANIMATOR_METHODS, true), getMethodNames(Scene), true);

  var FRAME_METHODS = __spreadArray(__spreadArray([], ANIMATOR_METHODS, true), getMethodNames(Frame), true);
  var FRAME_REACTIVE = {
      methods: FRAME_METHODS,
      created: function (data) {
          var nextObject = isFunction$1(data) ? data() : data;
          var updateCount = observe(0);
          var frame;
          if (isObserver(nextObject)) {
              frame = nextObject;
          }
          else {
              frame = observe(isFrame(nextObject) ? nextObject : new Frame(nextObject));
          }
          var cssText = computed(function () {
              frame.current;
              updateCount.current;
              return frame.current.toCSSText();
          });
          var cssObject = computed(function () {
              frame.current;
              cssText.current;
              return frame.current.toCSSObject();
          });
          var camelCasedCSSObject = computed(function () {
              frame.current;
              cssText.current;
              return frame.current.toCSSObject(true);
          });
          var onUpdate = function () {
              ++updateCount.current;
          };
          frame.subscribe(function (currentFrame, prevFrame) {
              prevFrame.off("update", onUpdate);
              currentFrame.on("update", onUpdate);
          });
          var nextReactiveObject = partialReactive(__assign({ cssText: cssText, cssObject: cssObject, camelCasedCSSObject: camelCasedCSSObject, onUpdate: onUpdate }, FRAME_METHODS.reduce(function (obj, cur) {
              obj[cur] = function () {
                  var _a;
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                  }
                  var currentFrame = frame.current;
                  return currentFrame === null || currentFrame === void 0 ? void 0 : (_a = currentFrame[cur]).call.apply(_a, __spreadArray([currentFrame], args, false));
              };
              return obj;
          }, {})));
          return nextReactiveObject;
      },
      destroy: function (inst) {
          inst.off("update", inst.onUpdate);
      },
  };

  __assign(__assign({}, FRAME_REACTIVE), { created: function (data) {
          var nextObject = isFunction$1(data) ? data() : data;
          var frame = observe(new Frame());
          nextObject.on("animate", function (e) {
              frame.current = e.frame;
          });
          return FRAME_REACTIVE.created(frame);
      } });

  var hasCSSRule = typeof CSSRule !== "undefined";
  var KEYFRAMES_RULE = hasCSSRule ? CSSRule.KEYFRAMES_RULE || CSSRule.WEBKIT_KEYFRAMES_RULE : 7;
  var KEYFRAME_RULE = hasCSSRule ? CSSRule.KEYFRAME_RULE || CSSRule.WEBKIT_KEYFRAME_RULE : 8;

  /**
   * Make the CSS Keyframes the keyframes object.
   * @namespace Keyframer
   */
  /**
  * Make the CSS Keyframes the keyframes deep object.
   * @memberof Keyframer
   * @param - The name of the keyframes(`CSSKeyframes​Rule`) in the stylesheet(`CSSStyleSheet`).
   * @returns the keyframes deep object
   * @example
  // @keyframes keyframes {
  //     0% {
  //         opacity: 1;
  //         transform: translate(0px, 0px) rotate(0deg);
  //     }
  //     50% {
  //         opacity: 0;
  //         transform: translate(50px, 0px) rotate(0deg);
  //     }
  //     100% {
  //         opacity: 1;
  //         transform: translate(100px, 0px) rotate(50deg);
  //     }
  // }

  import { getKeyframesObject } from "keyframer";

  const obj = getKeyframesObject("keyframes");
  // {
  //     "0%": {
  //         opacity: 1,
  //         transform: { translate: "0px,0px", rotate: "0deg" },
  //     }
  //     "50%": {
  //         opacity: 0,
  //         transform: { translate: "50px,0px", rotate: "0deg" },
  //     },
  //     "100%": {
  //         opacity: 1,
  //         transform: { translate: "100px,0px", rotate: "50deg" },
  //     },
  // }
   */
  function getKeyframesObject(name) {
      var keyframes = isObject$1(name) ? name : getKeyframes(name);
      var keyframesObject = {};
      for (var time in keyframes) {
          keyframesObject[time] = new Frame(keyframes[time]).get();
      }
      return keyframesObject;
  }
  /**
   * Make the CSS Keyframes the keyframes object.
   * @memberof Keyframer
   * @param - The name of the keyframes(`CSSKeyframes​Rule`) in the stylesheet(`CSSStyleSheet`).
   * @returns the keyframes object
   * @example
  // @keyframes keyframes {
  //     0% {
  //         opacity: 1;
  //         transform: translate(0px, 0px) rotate(0deg);
  //     }
  //     50% {
  //         opacity: 0;
  //         transform: translate(50px, 0px) rotate(0deg);
  //     }
  //     100% {
  //         opacity: 1;
  //         transform: translate(100px, 0px) rotate(50deg);
  //     }
  // }

  import { getKeyframes } from "keyframer";

  // {
  //     "0%": "opacity: 1; transform: translate(0px, 0px) rotate(0deg)",
  //     "50%": "opacity: 0; transform: translate(50px, 0px) rotate(0deg)",
  //     "100%": "opacity: 1; transform: translate(100px, 0px) rotate(50deg)",
  // }
  const obj = getKeyframes("keyframes");
   */
  function getKeyframes(name) {
      var styleSheets = toArray(document.styleSheets);
      var sheets = styleSheets.filter(function (sheet) {
          try {
              var length_1 = sheet.cssRules.length;
              return length_1 > 0;
          }
          catch (e) {
              return false;
          }
      });
      var sheetsLength = sheets.length;
      var _loop_1 = function (i) {
          var sheet = sheets[i];
          var keyframesRules = toArray(sheet.cssRules);
          var keyframesRule = keyframesRules.filter(function (rule) {
              return rule.name === name && rule.type === KEYFRAMES_RULE;
          })[0];
          if (keyframesRule) {
              var keyframeRules = toArray(keyframesRule.cssRules);
              var obj_1 = {};
              keyframeRules.forEach(function (rule) {
                  if (rule.type === KEYFRAME_RULE) {
                      var keyText = rule.keyText;
                      var cssText_1 = rule.style.cssText;
                      splitComma(keyText).forEach(function (time) {
                          obj_1[time] = cssText_1;
                      });
                  }
              });
              return { value: obj_1 };
          }
      };
      for (var i = 0; i < sheetsLength; ++i) {
          var state_1 = _loop_1(i);
          if (typeof state_1 === "object")
              return state_1.value;
      }
      return {};
  }

  exports.getKeyframes = getKeyframes;
  exports.getKeyframesObject = getKeyframesObject;

}));
//# sourceMappingURL=keyframer.pkgd.js.map
