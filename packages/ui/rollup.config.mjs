import typescript from '@rollup/plugin-typescript';
import { sync } from 'glob';

/** @type {import('rollup').RollupOptions} */
const options = {
  external: ['react/jsx-runtime'],
  input: sync(['src/*/index.ts', 'src/*/index.tsx']),
  output: {
    dir: 'dist',
    preserveModules: true,
    sourcemap: true
  },
  plugins: [
    typescript(),
  ],
};

export default options;
