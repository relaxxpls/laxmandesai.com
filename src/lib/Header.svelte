<script lang="ts">
  import { page } from '$app/stores';
  import routes from '../data/routes.json';
</script>

<header class="container sticky top-0 z-10 py-4">
  <nav
    class="flex flex-col items-center rounded-2xl border-2 border-white/10 bg-midnight/40 backdrop-blur-3xl sm:flex-row sm:justify-between sm:px-8"
  >
    <a
      href="/"
      class="my-2 whitespace-nowrap text-2xl font-semibold tracking-widest text-white hover:text-indigo-300 sm:my-0 sm:text-lg"
    >
      Laxman Desai
    </a>

    <ul class="flex w-full max-w-min gap-x-4 overflow-x-auto px-4 sm:px-0">
      {#each routes as route}
        <li
          class="relative flex"
          class:active={$page.url.pathname === route.href}
        >
          <a
            sveltekit:prefetch
            href={route.href}
            class="flex h-12 items-center text-sm font-bold uppercase tracking-widest text-white/60 transition hover:text-white sm:h-16"
          >
            {route.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .active a {
    color: #ffffff;
  }

  .active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid #ffffff;
  }
</style>
