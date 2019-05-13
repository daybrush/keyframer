
import builder from "@daybrush/builder";

export default builder([
    {
        name: "Keyframer",
        input: "src/index.umd.ts",
        output: "./dist/keyframer.js",
    },
    {
        name: "Keyframer",
        input: "src/index.umd.ts",
        output: "./dist/keyframer.js",
        uglify: true,

    },
    {
        name: "Keyframer",
        input: "src/index.umd.ts",
        output: "./dist/keyframer.pkgd.js",
        resolve: true,
    },
    {
        name: "Keyframer",
        input: "src/index.umd.ts",
        output: "./dist/keyframer.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/index.ts",
        output: "./dist/keyframer.esm.js",
        exports: "named",
        format: "es",
    },
]);
