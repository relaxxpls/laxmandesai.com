<script>
  import Icon from '$lib/Icon.svelte';
  import socials from '../data/socials.json';
</script>

<footer class="mt-4 bg-midnight-dark/90">
  <div class="container my-8 flex flex-col gap-2 text-center text-white">
    <div class="my-2 flex justify-center gap-8">
      {#each socials as social}
        <a
          href={social.link}
          target="_blank"
          class="text-white transition hover:text-indigo-300"
        >
          <Icon size="20" name={social.icon} />
        </a>
      {/each}
    </div>

    <p>
      Built using
      <a
        href="https://kit.svelte.dev"
        class="font-semibold hover:text-indigo-300 hover:underline"
      >
        SvelteKit
      </a>
      and
      <a
        href="https://tailwindcss.com"
        class="font-semibold hover:text-indigo-300 hover:underline"
      >
        TailwindCSS
      </a>
    </p>

    <p>© 2022 Laxman Desai, All Rights Reserved</p>
  </div>
</footer>
