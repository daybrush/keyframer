/*
Copyright (c) 2019 Daybrush
name: keyframer
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keyframer.git
version: 0.0.1
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("scenejs")):"function"==typeof define&&define.amd?define(["exports","scenejs"],t):t((e=e||self).Keyframer={},e.Scene)}(this,function(e,u){"use strict";var f="object";function c(e){return[].slice.call(e)}var s=CSSRule.KEYFRAMES_RULE||CSSRule.WEBKIT_KEYFRAMES_RULE,o=CSSRule.KEYFRAME_RULE||CSSRule.WEBKIT_KEYFRAME_RULE;function i(u){for(var f=c(document.styleSheets).filter(function(e){try{return 0<e.cssRules.length}catch(e){return!1}}),e=f.length,t=function(e){var t=c(f[e].cssRules).filter(function(e){return e.name===u&&e.type===s})[0];if(t){var n=c(t.cssRules),r={};return n.forEach(function(e){if(e.type===o){var t=e.keyText,n=e.style.cssText;r[t]=n}}),{value:r}}},n=0;n<e;++n){var r=t(n);if("object"==typeof r)return r.value}return{}}e.getKeyframes=i,e.getKeyframesObject=function(e){var t=function(e){return e&&typeof e===f}(e)?e:i(e),n={};for(var r in t)n[r]=new u.Frame(t[r]).get();return n}});
//# sourceMappingURL=keyframer.js.map
