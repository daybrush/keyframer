
const hasCSSRule = typeof CSSRule !== "undefined";
export const KEYFRAMES_RULE = hasCSSRule ? CSSRule.KEYFRAMES_RULE || (CSSRule as any).WEBKIT_KEYFRAMES_RULE : 7;
export const KEYFRAME_RULE = hasCSSRule ? CSSRule.KEYFRAME_RULE || (CSSRule as any).WEBKIT_KEYFRAME_RULE : 8;
