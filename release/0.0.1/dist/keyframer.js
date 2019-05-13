/*
Copyright (c) 2019 Daybrush
name: keyframer
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keyframer.git
version: 0.0.1
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('scenejs')) :
  typeof define === 'function' && define.amd ? define(['exports', 'scenejs'], factory) :
  (global = global || self, factory(global.Keyframer = {}, global.Scene));
}(this, function (exports, scenejs) { 'use strict';

  /*
  Copyright (c) 2018 Daybrush
  @name: @daybrush/utils
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/utils
  @version 0.7.1
  */
  /**
  * get string "object"
  * @memberof Consts
  * @example
  import {OBJECT} from "@daybrush/utils";

  console.log(OBJECT); // "object"
  */

  var OBJECT = "object";
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

  var KEYFRAMES_RULE = CSSRule.KEYFRAMES_RULE || CSSRule.WEBKIT_KEYFRAMES_RULE;
  var KEYFRAME_RULE = CSSRule.KEYFRAME_RULE || CSSRule.WEBKIT_KEYFRAME_RULE;

  /**
   * Make the keyframes the keyframes object.
   * @namespace Keyframer
   */

  /**
  * Make the keyframes the keyframes deep object.
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
      keyframesObject[time] = new scenejs.Frame(keyframes[time]).get();
    }

    return keyframesObject;
  }
  /**
   * Make the keyframes the keyframes object.
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
//# sourceMappingURL=keyframer.js.map
