import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
  input: './src/index.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'esm',
  }],
  plugins: [
    nodeResolve({
      extensions: ['.js'],
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
  ],
  external: [
    'react',
    'react-dom',
  ],
};