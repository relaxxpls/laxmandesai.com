<script>
  import Icon from '$lib/Icon.svelte';
  import socials from '../data/socials.json';
</script>

<footer
  class="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-midnight-dark px-2 py-6 text-center text-white"
>
  <div class="container flex justify-center gap-8">
    {#each socials as social}
      <a
        href={social.link}
        target="_blank"
        class="text-white transition hover:text-indigo-300"
      >
        <Icon name={social.icon} />
      </a>
    {/each}
  </div>

  <p>© 2022 Laxman Desai. All Rights Reserved.</p>
</footer>
