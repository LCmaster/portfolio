import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		setupFiles: ['./src/vitest/cleanupDom.js', '/src/vitest/registerMatchers.js'],
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		reporters: 'verbose',
		restoreMocks: true
	},
	ssr: {
		noExternal: ['three']
	}
});
