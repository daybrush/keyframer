/*
Copyright (c) 2019 Daybrush
name: keyframer
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keyframer.git
version: 0.0.1
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Keyframer = {}));
}(this, function (exports) { 'use strict';

  /*
  Copyright (c) 2018 Daybrush
  @name: @daybrush/utils
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/utils
  @version 0.7.1
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
  * @name document
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */

  var doc = typeof document !== UNDEFINED && document;
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

  var getCrossBrowserProperty =
  /*#__PURE__*/
  function (property) {
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


  var TRANSFORM =
  /*#__PURE__*/
  getCrossBrowserProperty("transform");
  /**
  * get string "filter" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {FILTER} from "@daybrush/utils";

  console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
  */

  var FILTER =
  /*#__PURE__*/
  getCrossBrowserProperty("filter");
  /**
  * get string "animation" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {ANIMATION} from "@daybrush/utils";

  console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
  */

  var ANIMATION =
  /*#__PURE__*/
  getCrossBrowserProperty("animation");
  /**
  * @namespace
  * @name Utils
  */

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

  function isUndefined(value) {
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


  function isObject(value) {
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
    // divide comma(,)
    var matches = text.match(/("[^"]*")|('[^']*')|([^\s()]*(?:\((?:[^()]*|\([^()]*\))*\))[^\s()]*)|\S+/g);
    return matches || [];
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
    var matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);
    return matches ? matches.map(function (str) {
      return str.trim();
    }) : [];
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
    }

    var result = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), hsl.length > 3 ? hsl[3] : 1];
    return result;
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
        return;
      }

      var arr = splitComma(value);
      var colorArr = [];
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
          } // hsl, hsla to rgba


          return hslToRGBA(colorArr);
      }
    }

    return;
  }

  /*
  Copyright (c) 2019 Daybrush
  name: scenejs
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/scenejs.git
  version: 1.0.0-rc8
  */
  var TIMING_FUNCTION = "animation-timing-function";
  var ROLES = {
    transform: {},
    filter: {},
    attribute: {}
  };
  var ALIAS = {
    easing: [TIMING_FUNCTION]
  };
  var FIXED = (_a = {}, _a[TIMING_FUNCTION] = true, _a.contents = true, _a);
  var EASING_NAME = "easingName";
  var TRANSFORM_NAME = "transform";

  var _a;
  /**
  * Make string, array to PropertyObject for the dot product
  */


  var PropertyObject =
  /*#__PURE__*/
  function () {
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

    var __proto = PropertyObject.prototype;

    __proto.setOptions = function (newOptions) {
      for (var name in newOptions) {
        this[name] = newOptions[name];
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


    __proto.size = function () {
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


    __proto.get = function (index) {
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


    __proto.set = function (index, value) {
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


    __proto.clone = function () {
      var _a = this,
          separator = _a.separator,
          prefix = _a.prefix,
          suffix = _a.suffix,
          model = _a.model,
          type = _a.type;

      var arr = this.value.map(function (v) {
        return v instanceof PropertyObject ? v.clone() : v;
      });
      return new PropertyObject(arr, {
        separator: separator,
        prefix: prefix,
        suffix: suffix,
        model: model,
        type: type
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


    __proto.toValue = function () {
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


    __proto.join = function () {
      return this.value.map(function (v) {
        return v instanceof PropertyObject ? v.toValue() : v;
      }).join(this.separator);
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


    __proto.forEach = function (func) {
      this.value.forEach(func);
      return this;
    };

    return PropertyObject;
  }();

  function isPropertyObject(value) {
    return value instanceof PropertyObject;
  }

  function getType(value) {
    var type = typeof value;

    if (type === OBJECT) {
      if (isArray(value)) {
        return ARRAY;
      } else if (isPropertyObject(value)) {
        return PROPERTY;
      }
    } else if (type === STRING || type === NUMBER) {
      return "value";
    }

    return type;
  }

  function getValueByNames(names, properties, length) {
    if (length === void 0) {
      length = names.length;
    }

    var value = properties;

    for (var i = 0; i < length; ++i) {
      if (!isObject(value)) {
        return undefined;
      }

      value = value[names[i]];
    }

    return value;
  }

  function isInProperties(roles, args, isCheckTrue) {
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

      if (!role || !isCheckTrue && role === true) {
        return false;
      }
    }

    return true;
  }

  function isRole(args, isCheckTrue) {
    return isInProperties(ROLES, args, isCheckTrue);
  }

  function isFixed(args) {
    return isInProperties(FIXED, args, true);
  }
  /**
  * @namespace
  * @name Property
  */


  function splitStyle(str) {
    var properties = str.split(";");
    var obj = {};
    var length = properties.length;

    for (var i = 0; i < length; ++i) {
      var matches = /([^:]*):([\S\s]*)/g.exec(properties[i]);

      if (!matches || matches.length < 3 || !matches[1]) {
        --length;
        continue;
      }

      obj[matches[1].trim()] = toPropertyObject(matches[2].trim());
    }

    return {
      styles: obj,
      length: length
    };
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
      prefix: model + "(",
      suffix: ")"
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
    var _a = splitBracket(text),
        model = _a.prefix,
        value = _a.value,
        afterModel = _a.suffix;

    if (typeof value === "undefined") {
      return text;
    }

    if (COLOR_MODELS.indexOf(model) !== -1) {
      return arrayToColorObject(stringToRGBA(text));
    } // divide comma(,)


    var obj = toPropertyObject(value);
    var arr = [value];
    var separator = ",";
    var prefix = model + "(";
    var suffix = ")" + afterModel;

    if (obj instanceof PropertyObject) {
      separator = obj.separator;
      arr = obj.value;
      prefix += obj.prefix;
      suffix = obj.suffix + suffix;
    }

    return new PropertyObject(arr, {
      separator: separator,
      model: model,
      prefix: prefix,
      suffix: suffix
    });
  }

  function arrayToPropertyObject(arr, separator) {
    return new PropertyObject(arr, {
      type: "array",
      separator: separator
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

  function toPropertyObject(value) {
    if (!isString(value)) {
      if (isArray(value)) {
        return arrayToPropertyObject(value, ",");
      }

      return value;
    }

    var values = splitComma(value);

    if (values.length > 1) {
      return arrayToPropertyObject(values.map(function (v) {
        return toPropertyObject(v);
      }), ",");
    }

    values = splitSpace(value);

    if (values.length > 1) {
      return arrayToPropertyObject(values.map(function (v) {
        return toPropertyObject(v);
      }), " ");
    }

    values = /^(['"])([^'"]*)(['"])$/g.exec(value);

    if (values && values[1] === values[3]) {
      // Quotes
      return new PropertyObject([toPropertyObject(values[2])], {
        prefix: values[1],
        suffix: values[1]
      });
    } else if (value.indexOf("(") !== -1) {
      // color
      return stringToBracketObject(value);
    } else if (value.charAt(0) === "#") {
      return stringToColorObject(value);
    }

    return value;
  }

  function toObject(object, result) {
    if (result === void 0) {
      result = {};
    }

    var model = object.model;

    if (model) {
      object.setOptions({
        model: "",
        suffix: "",
        prefix: ""
      });
      var value = object.size() > 1 ? object : object.get(0);
      result[model] = value;
    } else {
      object.forEach(function (obj) {
        toObject(obj, result);
      });
    }

    return result;
  }

  function toInnerProperties(obj) {
    if (!obj) {
      return "";
    }

    var arrObj = [];

    for (var name in obj) {
      arrObj.push(name.replace(/\d/g, "") + "(" + obj[name] + ")");
    }

    return arrObj.join(" ");
  }
  /* eslint-disable */


  function clone(target, toValue) {
    if (toValue === void 0) {
      toValue = false;
    }

    return merge({}, target, toValue);
  }

  function merge(to, from, toValue) {
    if (toValue === void 0) {
      toValue = false;
    }

    for (var name in from) {
      var value = from[name];
      var type = getType(value);

      if (type === PROPERTY) {
        to[name] = toValue ? value.toValue() : value.clone();
      } else if (type === FUNCTION) {
        to[name] = toValue ? getValue([name], value) : value;
      } else if (type === ARRAY) {
        to[name] = value.slice();
      } else if (type === OBJECT) {
        if (isObject(to[name]) && !isPropertyObject(to[name])) {
          merge(to[name], value, toValue);
        } else {
          to[name] = clone(value, toValue);
        }
      } else {
        to[name] = from[name];
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
    } else if (type === FUNCTION) {
      if (names[0] !== TIMING_FUNCTION) {
        return getValue(names, value());
      }
    } else if (type === OBJECT) {
      return clone(value, true);
    }

    return value;
  }
  /**
  * Animation's Frame
  */


  var Frame =
  /*#__PURE__*/
  function () {
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
      if (properties === void 0) {
        properties = {};
      }

      this.properties = {};
      this.set(properties);
    }
    /**
      * get property value
      * @param {...Number|String|PropertyObject} args - property name or value
      * @example
      frame.get("display") // => "none", "block", ....
      frame.get("transform", "translate") // => "10px,10px"
      */


    var __proto = Frame.prototype;

    __proto.get = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var value = this.raw.apply(this, args);
      return getValue(getPropertyName(args), value);
    };

    __proto.raw = function () {
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


    __proto.remove = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var params = getPropertyName(args);
      var length = params.length;

      if (!length) {
        return this;
      }

      var value = getValueByNames(params, this.properties, length - 1);

      if (isObject(value)) {
        delete value[params[length - 1]];
      }

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


    __proto.set = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var self = this;
      var length = args.length;
      var params = args.slice(0, -1);
      var value = args[length - 1];

      if (params[0] in ALIAS) {
        self._set(ALIAS[params[0]], value);
      } else if (length === 2 && isArray(params[0])) {
        self._set(params[0], value);
      } else if (isArray(value)) {
        self._set(params, value);
      } else if (isPropertyObject(value)) {
        if (isRole(params)) {
          self.set.apply(self, params.concat([toObject(value)]));
        } else {
          self._set(params, value);
        }
      } else if (isObject(value)) {
        for (var name in value) {
          self.set.apply(self, params.concat([name, value[name]]));
        }
      } else if (isString(value)) {
        if (isRole(params, true)) {
          if (isFixed(params) || !isRole(params)) {
            this._set(params, value);
          } else {
            var obj = toPropertyObject(value);

            if (isObject(obj)) {
              self.set.apply(self, params.concat([obj]));
            }
          }

          return this;
        } else {
          var _a = splitStyle(value),
              styles = _a.styles,
              stylesLength = _a.length;

          for (var name in styles) {
            self.set.apply(self, params.concat([name, styles[name]]));
          }

          if (stylesLength) {
            return this;
          }
        }

        self._set(params, value);
      } else {
        self._set(params, value);
      }

      return self;
    };
    /**
      * check that has property.
      * @param {...String} args - property name
      * @example
      frame.has("property", "display") // => true or false
      */


    __proto.has = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var params = getPropertyName(args);
      var length = params.length;

      if (!length) {
        return false;
      }

      return !isUndefined(getValueByNames(params, this.properties, length));
    };
    /**
      * clone frame.
      * @return {Frame} An instance of clone
      * @example
      frame.clone();
      */


    __proto.clone = function () {
      var frame = new Frame();
      return frame.merge(this);
    };
    /**
      * merge one frame to other frame.
      * @param - target frame.
      * @return {Frame} An instance itself
      * @example
      frame.merge(frame2);
      */


    __proto.merge = function (frame) {
      var properties = this.properties;
      var frameProperties = frame.properties;

      if (!frameProperties) {
        return this;
      }

      merge(properties, frameProperties);
      return this;
    };
    /**
      * Specifies an css object that coverted the frame.
      * @return {object} cssObject
      */


    __proto.toCSSObject = function () {
      var properties = this.get();
      var cssObject = {};

      for (var name in properties) {
        if (isRole([name], true)) {
          continue;
        }

        var value = properties[name];

        if (name === TIMING_FUNCTION) {
          cssObject[TIMING_FUNCTION.replace("animation", ANIMATION)] = (isString(value) ? value : value[EASING_NAME]) || "initial";
          continue;
        }

        cssObject[name] = value;
      }

      var transform = toInnerProperties(properties[TRANSFORM_NAME]);
      var filter = toInnerProperties(properties.filter);
      TRANSFORM && transform && (cssObject[TRANSFORM] = transform);
      FILTER && filter && (cssObject[FILTER] = filter);
      return cssObject;
    };
    /**
      * Specifies an css text that coverted the frame.
      * @return {string} cssText
      */


    __proto.toCSS = function () {
      var cssObject = this.toCSSObject();
      var cssArray = [];

      for (var name in cssObject) {
        cssArray.push(name + ":" + cssObject[name] + ";");
      }

      return cssArray.join("");
    };

    __proto._set = function (args, value) {
      var properties = this.properties;
      var length = args.length;

      for (var i = 0; i < length - 1; ++i) {
        var name = args[i];
        !(name in properties) && (properties[name] = {});
        properties = properties[name];
      }

      if (!length) {
        return;
      }

      properties[args[length - 1]] = isString(value) ? toPropertyObject(value) : value;
    };

    return Frame;
  }();

  var KEYFRAMES_RULE = CSSRule.KEYFRAMES_RULE || CSSRule.WEBKIT_KEYFRAMES_RULE;
  var KEYFRAME_RULE = CSSRule.KEYFRAME_RULE || CSSRule.WEBKIT_KEYFRAME_RULE;

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
    var keyframes = isObject(name) ? name : getKeyframes(name);
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
        var length = sheet.cssRules.length;
        return length > 0;
      } catch (e) {
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
            var cssText = rule.style.cssText;
            obj_1[keyText] = cssText;
          }
        });
        return {
          value: obj_1
        };
      }
    };

    for (var i = 0; i < sheetsLength; ++i) {
      var state_1 = _loop_1(i);

      if (typeof state_1 === "object") return state_1.value;
    }

    return {};
  }

  exports.getKeyframes = getKeyframes;
  exports.getKeyframesObject = getKeyframesObject;

}));
//# sourceMappingURL=keyframer.pkgd.js.map
