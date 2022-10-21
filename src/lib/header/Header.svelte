<script lang="ts">
  import { locale, t } from 'svelte-i18n';
  import MobileMenu from '$lib/components/mobile-menu.svelte';
  import Burger from './Burger.svelte';
  import SelectLocale from './select-locale.svelte';
  import Sun from 'svelte-icons/io/IoIosSunny.svelte';
  import Moon from 'svelte-icons/io/IoIosMoon.svelte';
  import { page } from '$app/stores';

  export let isDark = false;
  export let currentLocale = '';
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

  const changeLocale = (e: { detail: string }) => {
    localStorage.setItem('locale', e.detail);
    locale.set(e.detail);
  };
</script>

<header class="flex py-6 m:py-12 justify-between items-center">
  <a href="/" class="z-10"><h3 class="text-2xl m:text-3xl ml-8">Dave136</h3></a>
  <nav class="hidden mr-20 lg:flex items-center">
    <a href="/" class="mr-4" class:underline={$page.url.pathname === '/'}>
      {$t('common.menu.home')}
    </a>
    <a href="/projects" class="mr-4" class:underline={$page.url.pathname === '/projects'}>
      {$t('common.menu.projects')}
    </a>
    <a href="/about" class="mr-4" class:underline={$page.url.pathname === '/about'}>
      {$t('common.menu.about')}
    </a>
    <SelectLocale on:locale-changed={changeLocale} value={currentLocale} />
  </nav>
  <div
    class="w-30 h-20 rounded-full flex justify-center items-center absolute right-16 lg:w-20 lg:right-6 lg:top-2 transition-colors active:bg-light-300 z-10"
  >
    <div class="mr-2 lg:hidden lg:mr-0">
      <SelectLocale on:locale-changed={changeLocale} value={currentLocale} />
    </div>
    <div class="w-8 h-8 mr-4 lg:mr-0" on:click={toogleDark}>
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
