# keyframer [![npm version](https://badge.fury.io/js/keyframer.svg)](https://badge.fury.io/js/keyframer)

Make the CSS Keyframes the keyframes object.

## Installation
### npm
```bash
$ npm install keyframer
```

### scripts
* Unpackaged (dependency in [**scenejs**](https://github.com/daybrush/scenejs))

```html
<script src="//daybrush.com/keyframer/release/latest/dist/keyframer.min.js"></script>
```

* Packaged
```html
<script src="//daybrush.com/keyframer/release/latest/dist/keyframer.pkgd.min.js"></script>
```

## Getting Started
```html
<style>
@keyframes keyframes {
    0% {
        opacity: 1;
        transform: translate(0px, 0px) rotate(0deg);
    }
    50% {
        opacity: 0;
        transform: translate(50px, 0px) rotate(0deg);
    }
    100% {
        opacity: 1;
        transform: translate(100px, 0px) rotate(50deg);
    }
}
</style>
```

### Get the keyframes object
```js
import { getKeyframes, getKeyframesObject } from "keyframer";

/*
{
    "0%": "opacity: 1; transform: translate(0px, 0px) rotate(0deg)",
    "50%": "opacity: 0; transform: translate(50px, 0px) rotate(0deg)",
    "100%": "opacity: 1; transform: translate(100px, 0px) rotate(50deg)",
}
*/
// Keyframer.getKeyframes("keyframes")
const obj = getKeyframes("keyframes");

/*
{
    "0%": {
        opacity: 1,
        transform: { translate: "0px,0px", rotate: "0deg" },
    }
    "50%": {
        opacity: 0,
        transform: { translate: "50px,0px", rotate: "0deg" },
    },
    "100%": {
        opacity: 1,
        transform: { translate: "100px,0px", rotate: "50deg" },
    },
}
*/
// Keyframer.getKeyframesObject("keyframes")
const obj = getKeyframesObject("keyframes");
```

### Play the CSS Keyframes with [scenejs](https://github.com/daybrush/scenejs)
```js
import { SceneItem } from "scenejs";
import { getKeyframes, getKeyframesObject } from "keyframer";

new SceneItem(getKeyframes("keyframes"))
  .setDuration(1)
  .setSelector("[data-keyframer] .rect")
  .play();
```
## API Documents
* [API Documentation](https://daybrush.com/keyframer/release/latest/doc/)
* [API Features Documentation](https://daybrush.com/scenejs/features.html#keyframer)
```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```