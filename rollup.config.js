
const builder = require("@daybrush/builder");

const external = {
    "scenejs": "Scene",
};
module.exports = builder([
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.js",
        exports: "named",
        resolve: true,
    },
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.min.js",
        exports: "named",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/index.ts",
        output: "./dist/keyframer.esm.js",
        exports: "named",
        format: "es",
        external: {
            "scenejs": "Scene",
            "@daybrush/utils": "utils",
        },
    },
    {
        input: "src/index.ts",
        output: "./dist/keyframer.cjs.js",
        exports: "named",
        format: "cjs",
        external: {
            "scenejs": "Scene",
            "@daybrush/utils": "utils",
        },
    },
]);
