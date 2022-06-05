<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <!-- <div class="brand">
    <a href="https://laxmandesai.com">Laxman Desai</a>
  </div> -->
  <h1>Laxman Desai</h1>

  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === '/todos'}>
        <a sveltekit:prefetch href="/todos">Todos</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 960px;
    margin: auto;
    background: linear-gradient(
      45deg,
      var(--secondary-color),
      var(--tertiary-color)
    );
  }

  h1 {
    color: var(--heading-color);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
