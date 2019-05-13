/*
Copyright (c) 2019 Daybrush
name: keyframer
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keyframer.git
version: 0.0.1
*/
'use strict';

var utils = require('@daybrush/utils');
var scenejs = require('scenejs');

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
  var keyframes = utils.isObject(name) ? name : getKeyframes(name);
  var keyframesObject = {};

  for (var time in keyframes) {
    keyframesObject[time] = new scenejs.Frame(keyframes[time]).get();
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
  var styleSheets = utils.toArray(document.styleSheets);
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
    var keyframesRules = utils.toArray(sheet.cssRules);
    var keyframesRule = keyframesRules.filter(function (rule) {
      return rule.name === name && rule.type === KEYFRAMES_RULE;
    })[0];

    if (keyframesRule) {
      var keyframeRules = utils.toArray(keyframesRule.cssRules);
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
//# sourceMappingURL=keyframer.cjs.js.map
