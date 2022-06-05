import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import sass from 'sass';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ? Reference: https://github.com/sveltejs/svelte-preprocess
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer],
    },
    scss: {
      renderSync: true,
      implementation: sass,
      prependData: '@use "src/variables.scss" as *;',
    },
  }),

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
