import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { wasm } from '@rollup/plugin-wasm';

/** @type {import('rollup').RollupOptions} */
export const options = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    nodePolyfills(),
    typescript({ declaration: true }),
    commonjs(),
    json(),
    nodeResolve({ browser: true }),
    wasm(),
  ],
  onwarn: (warning, defaultHandler) => {
    if (
      warning.code === 'THIS_IS_UNDEFINED' &&
      warning.loc.file.includes('/node_modules/')
    )
      return;
    defaultHandler(warning);
  },
};

export default options;
