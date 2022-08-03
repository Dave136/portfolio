<script>
  import MobileMenu from '$lib/components/mobile-menu.svelte';
  import Burger from './Burger.svelte';
  import Sun from 'svelte-icons/io/IoIosSunny.svelte';
  import Moon from 'svelte-icons/io/IoIosMoon.svelte';
  import { page } from '$app/stores';

  export let isDark = false;
  let isOpen = false;

  const toogleDark = () => {
    isDark = !isDark;

    if (isDark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
</script>

<header class="flex py-6 m:py-12 justify-between items-center">
  <a href="/"><h3 class="text-2xl m:text-3xl z-10 ml-8">Dave136</h3></a>
  <nav class="hidden mr-20 lg:block">
    <a href="/" class="mr-4" class:underline={$page.url.pathname === '/'}>Home</a>
    <a href="/projects" class="mr-4" class:underline={$page.url.pathname === '/projects'}
      >Projects</a
    >
    <a href="/about" class="mr-4" class:underline={$page.url.pathname === '/about'}>About</a>
  </nav>
  <div
    class="w-20 h-20 rounded-full flex justify-center items-center absolute right-16 lg:right-4 top-0 transition-colors active:bg-zinc-700 z-10"
    on:click={toogleDark}
  >
    <div class="w-8 h-8">
      {#if isDark}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </div>
  </div>
  <Burger on:click={() => (isOpen = !isOpen)} />
  <MobileMenu {isOpen} on:click={() => (isOpen = !isOpen)} />
</header>
