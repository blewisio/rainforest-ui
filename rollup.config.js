import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const plugins = [
  nodeResolve({
    extensions: ['.js'],
  }),
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-react'],
  }),
  commonjs(),
];

const external = [
  'prop-types',
  'react',
  'react-dom',
];

export default [{
  input: [
    './src/Alert.js',
    './src/Badge.js',
    './src/Button.js',
    './src/Checkbox.js',
    './src/Dropdown.js',
    './src/Heading.js',
    './src/Label.js',
    './src/Link.js',
    './src/List.js',
    './src/ListItem.js',
    './src/RadioButton.js',
    './src/StarRating.js',
    './src/TextField.js',
  ],
  output: [{
    dir: 'dist',
    format: 'esm',
  }],
  plugins,
  external,
}, {
  input: './src/index.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'esm',
  }],
  plugins,
  external,
}];
