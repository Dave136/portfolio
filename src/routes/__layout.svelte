<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url }) => ({
    props: {
      key: url,
    },
  });
</script>

<script lang="ts">
  import Footer from '$lib/footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import Transition from '$lib/transition.svelte';
  import { onMount } from 'svelte';
  import '../app.css';

  let isDark = false;
  export let key: string;

  onMount(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      isDark = false;
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<div class="w-full ml-auto mr-auto min-h-screen relative overflow-hidden m:w-2/3 lg:w-3/4">
  <Header {isDark} />
  <Transition refresh={key}>
    <main>
      <slot />
    </main>
  </Transition>
  <Footer />
</div>
