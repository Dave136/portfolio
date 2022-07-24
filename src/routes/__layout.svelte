<script lang="ts">
  import Footer from '$lib/footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { onMount } from 'svelte';
  import '../app.css';

  onMount(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<div class="w-full ml-auto mr-auto min-h-screen relative overflow-hidden m:w-2/3">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
