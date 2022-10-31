<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import socials from '../data/socials.json';
</script>

<svelte:head>
  <title>Laxman Desai</title>
  <meta name="description" content="Laxman Desai - Home" />
</svelte:head>

<section
  id="home"
  class="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left lg:gap-20"
>
  <div class="hidden sm:flex sm:flex-col sm:gap-4">
    {#each socials as social}
      <a
        href={social.link}
        target="_blank"
        class="text-indigo-500 transition hover:text-indigo-300"
        rel="noopener noreferrer"
      >
        <Icon name={social.icon} strokeWidth="1.5" />
      </a>
    {/each}
  </div>

  <div class="sm:order-1">
    <svg
      class="w-44 sm:w-64 lg:w-80"
      viewBox="0 0 200 187"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <mask id="mask0">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
        <image class="w-52 opacity-75" x="0" y="-16" href="/image.jpg" />
      </g>
    </svg>
  </div>

  <div class="text-white">
    <h1
      class="mb-3 bg-gradient-to-tr from-indigo-500 to-indigo-700 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl"
    >
      Hi, I am Laxman
    </h1>
    <h3 class="mb-3 font-mono text-lg font-normal">Student // Developer</h3>
    <p class="mb-8 text-gray-300">
      High level experience in web design and development knowledge, producing
      quality work.
    </p>

    <a
      href="/contact"
      class="inline-flex items-center rounded-lg bg-indigo-500 p-4 hover:bg-indigo-600"
    >
      Hire Me
      <Icon name="message-circle" size="20" strokeWidth="2" class="ml-2" />
    </a>
  </div>
</section>
