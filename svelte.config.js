import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ? Reference: https://github.com/sveltejs/svelte-preprocess
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter(),
    trailingSlash: 'ignore',
  },
};

export default config;
