<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import socials from '../data/socials.json';
</script>

<svelte:head>
  <title>Laxman Desai</title>
  <meta name="description" content="Laxman's Portfolio" />
  <!-- <link rel="stylesheet" href="/styles.css" /> -->
</svelte:head>

<section id="home">
  <div class="grid gap-4 sm:gap-y-20">
    <div class="home_content grid">
      <div class="grid gap-y-4 lg:-translate-x-24">
        {#each socials as social}
          <a
            href={social.link}
            target="_blank"
            class="text-indigo-500 transition hover:text-indigo-300"
          >
            <Icon name={social.icon} strokeWidth="1.5" class="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        {/each}
      </div>

      <div class="sm:order-1 sm:justify-self-center">
        <svg
          class="w-44 fill-indigo-500 sm:w-64 lg:w-80"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image class="w-48 opacity-90" x="12" y="0" href="/image.png" />
          </g>
        </svg>
      </div>

      <div class="col-start-1 col-end-3 text-gray-300 sm:col-auto">
        <h1
          class="mb-3 bg-gradient-to-tr from-indigo-500 to-indigo-700 bg-clip-text text-7xl font-bold text-transparent"
        >
          Hi, I am Laxman
        </h1>
        <h3 class="mb-3 font-mono text-lg font-normal text-white">
          Student // Developer
        </h3>
        <p class="mb-8">
          High level experience in web design and development knowledge,
          producing quality work.
        </p>

        <a
          href="/contact"
          class="inline-flex items-center rounded-lg bg-indigo-500 p-4 text-white hover:bg-indigo-600"
        >
          Hire Me
          <Icon name="message-circle" size="20" strokeWidth="2" class="ml-2" />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .home_content {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .home_content {
      grid-template-columns: 0.25fr 3fr;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 567px) {
    .home_content {
      grid-template-columns: max-content 1fr 1fr;
    }
  }

  @media screen and (min-width: 769px) {
    .home_content {
      padding-top: 5.5rem;
      column-gap: 2rem;
    }
  }
</style>
