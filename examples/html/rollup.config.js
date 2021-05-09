// import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export const options = {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};

export default options;
