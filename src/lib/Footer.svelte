<script>
  import Icon from '$lib/Icon.svelte';
  import socials from '../data/socials.json';
</script>

<footer class="bg-midnight-dark/90 mt-6">
  <div class="container my-6 flex flex-col gap-4 text-center text-white">
    <div class="flex justify-center gap-8">
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
  </div>
</footer>
