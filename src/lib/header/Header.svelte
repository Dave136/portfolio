<script>
  import Menu from '$lib/components/Menu.svelte';
  import Burger from './Burger.svelte';
  import Sun from 'svelte-icons/io/IoIosSunny.svelte';
  import Moon from 'svelte-icons/io/IoIosMoon.svelte';

  let isDark = true;
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
  <h3 class="text-2xl m:text-3xl z-10 ml-8">Dave136</h3>
  <!-- <nav>
      <a href="/" class="mr-2">Home</a>
      <button class="px-3 py-2 bg-black rounded-full">🌙</button>
    </nav> -->
  <div
    class="w-20 h-20 rounded-full flex justify-center items-center absolute right-16 top-0 transition-colors active:bg-zinc-700"
    on:click={toogleDark}
  >
    <div class="w-10 h-10">
      {#if isDark}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </div>
  </div>
  <Burger on:click={() => (isOpen = !isOpen)} />
  <Menu {isOpen} />
</header>
