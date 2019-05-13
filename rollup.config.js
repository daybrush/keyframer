
import builder from "@daybrush/builder";

const external = {
    "scenejs": "Scene",
};
export default builder([
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.js",
        exports: "named",
        resolve: true,
        external,
    },
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.js",
        exports: "named",
        resolve: true,
        uglify: true,
        external,
    },
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.pkgd.js",
        exports: "named",
        resolve: true,
    },
    {
        name: "Keyframer",
        input: "src/index.ts",
        output: "./dist/keyframer.pkgd.min.js",
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
