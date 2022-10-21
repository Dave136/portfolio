<script lang="ts" context="module">
  // import type { Load } from '@sveltejs/kit';

  // export const load: Load = ({ error, status }) => ({
  //   props: {
  //     title: `${status}: ${error?.message}`,
  //   },
  // });
</script>

<script lang="ts">
  import Sad from 'svelte-icons/io/IoIosSad.svelte';
  // export let title: string;
</script>

<section class="w-full p-8 flex flex-col justify-center items-center">
  <div class="w-48 h-44 animate-pulse">
    <Sad />
  </div>
  <h1 class="text-3xl mt-4">Oops! Page not found!</h1>
  <p class="mt-4">Please go to <a href="/" class="text-cyan-500">home page</a></p>
</section>
