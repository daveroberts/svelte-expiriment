// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    svelte(),
    buble(),
    uglify()
  ]
}
