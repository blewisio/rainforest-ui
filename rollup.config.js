import path from 'path';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [{
  input: [
    './src/Alert.js',
    './src/Badge.js',
    './src/Button.js',
    './src/Card.js',
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
  plugins: [
    nodeResolve({
      extensions: ['.js'],
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    postcss({
      extract: path.resolve('dist/bundle.css'),
    }),
    terser(),
  ],
  external: [
    'prop-types',
    'react',
    'react-dom',
  ],
}];
