<script>
  import Menu from '$lib/components/Menu.svelte';
  import Burger from './Burger.svelte';

  let isOpen = false;
</script>

<header class="flex py-6 m:py-12 justify-between items-center">
  <h3 class="text-2xl m:text-3xl z-10 ml-8">Dave136</h3>
  <!-- <nav>
      <a href="/" class="mr-2">Home</a>
      <button class="px-3 py-2 bg-black rounded-full">🌙</button>
    </nav> -->
  <Burger on:click={() => (isOpen = !isOpen)} />
  <Menu {isOpen} />
</header>
