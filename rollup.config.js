import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import visualizer from "rollup-plugin-visualizer";
import pkg from "./package.json";
import json from "@rollup/plugin-json";
import auto from "@rollup/plugin-auto-install";
import inject from "@rollup/plugin-inject";
import "whatwg-fetch";

export default {
  input: "source/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    postcss(),
    inject({
      Promise: ["es6-promise", "Promise"],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer(),
    json(),
    auto(),
  ],
  moduleContext: {
    [require.resolve("whatwg-fetch")]: "window",
  },
};
