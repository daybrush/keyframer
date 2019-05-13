import { toArray, IObject, isObject } from "@daybrush/utils";
import { Frame } from "scenejs";
import { KEYFRAMES_RULE, KEYFRAME_RULE } from "./consts";
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
//         transform: {
//             translate: "0px,0px",
//             rotate: "0deg",
//         },
//     }
//     "50%": {
//         opacity: 0,
//         transform: {
//             translate: "50px,0px",
//             rotate: "0deg",
//         },
//     },
//     "100%": {
//         opacity: 1,
//         transform: {
//             translate: "100px,0px",
//             rotate: "50deg",
//         },
//     },
// }
 */
export function getKeyframesObject(name: string | IObject<string>): IObject<any> {
    const keyframes = isObject(name) ? name : getKeyframes(name);
    const keyframesObject: IObject<any> = {};

    for (const time in keyframes) {
        keyframesObject[time] = new Frame(keyframes[time]).get();
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

const obj = getKeyframes("keyframes");
// {
//     "0%": "opacity: 1; transform: translate(0px, 0px) rotate(0deg)",
//     "50%": "opacity: 0; transform: translate(50px, 0px) rotate(0deg)",
//     "100%": "opacity: 1; transform: translate(100px, 0px) rotate(50deg)",
// }
 */
export function getKeyframes(name: string): IObject<string> {
    const styleSheets = toArray(document.styleSheets) as CSSStyleSheet[];

    const sheets = styleSheets.filter(sheet => {
        try {
            const length = sheet.cssRules.length;

            return length > 0;
        } catch (e) {
            return false;
        }
    });
    const sheetsLength = sheets.length;

    for (let i = 0; i < sheetsLength; ++i) {
        const sheet = sheets[i];
        const keyframesRules = toArray(sheet.cssRules) as CSSKeyframesRule[];
        const keyframesRule = keyframesRules.filter(rule => {
            return rule.name === name && rule.type === KEYFRAMES_RULE;
        })[0];

        if (keyframesRule) {
            const keyframeRules = toArray(keyframesRule.cssRules) as CSSKeyframeRule[];
            const obj: IObject<string> = {};

            keyframeRules.forEach(rule => {
                if (rule.type === KEYFRAME_RULE) {
                    const keyText = rule.keyText;
                    const cssText = rule.style.cssText;

                    obj[keyText] = cssText;
                }
            });
            return obj;
        }
    }
    return {};
}
