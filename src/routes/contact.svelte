<script context="module">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>Contact - Laxman Desai</title>
  <meta name="description" content="Contact Laxman Desai" />
</svelte:head>

<section class="flex w-full items-center justify-center">
  <h1 class="font-mono text-3xl text-gray-300">Coming Soon!</h1>
</section>
