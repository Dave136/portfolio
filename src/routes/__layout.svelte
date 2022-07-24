<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<div class="w-full ml-auto mr-auto min-h-screen relative overflow-hidden m:w-2/3">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style scoped>
  :global(body) {
    @apply bg-zinc-800 text-white;
  }
</style>
