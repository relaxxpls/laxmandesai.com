// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
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
    prerender: {
      default: true,
    },
  },
};

export default config;
