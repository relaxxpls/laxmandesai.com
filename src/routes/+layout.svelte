<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import './styles.css';
</script>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="container flex flex-grow py-8">
    <slot />
  </main>

  <Footer />
</div>
