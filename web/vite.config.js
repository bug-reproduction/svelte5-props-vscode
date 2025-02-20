import {resolve} from 'path';
import {sri} from 'vite-plugin-sri3';
import {defineConfig} from 'vite';
import {nodePolyfills} from 'vite-plugin-node-polyfills'; // required by oauth login (google) due to error: `Buffer is not defined`
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte(), nodePolyfills(), sri()],
	build: {
		emptyOutDir: true,
		minify: false,
		sourcemap: true,
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				test: resolve(__dirname, 'test/index.html'),
			},
		},
	},
});
