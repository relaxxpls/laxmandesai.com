<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import '../app.css';
</script>

<div class="relative min-h-screen">
  <Header />

  <main class="max-w-[1024px]">
    <slot />
  </main>

  <Footer />
</div>
