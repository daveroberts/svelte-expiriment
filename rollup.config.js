// rollup.config.js
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    svelte()
  ]
}
