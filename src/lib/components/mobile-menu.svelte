<script lang="ts">
  import { t } from 'svelte-i18n';
  import { page } from '$app/stores';

  export let isOpen: boolean;
</script>

<div
  class="absolute w-full min-h-full top-0 bg-zinc-200 dark:bg-zinc-900 p-8 transition-transform z-[5] lg:hidden"
  class:-translate-x-full={!isOpen}
>
  <ul class="flex flex-col items-center justify-center mt-52 sm:mt-60">
    <a href="/" on:click
      ><li class="p-6 text-xl" class:underline={$page.url.pathname === '/'}>
        {$t('common.menu.home')}
      </li></a
    >
    <a href="/projects" on:click
      ><li class="p-6 text-xl" class:underline={$page.url.pathname === '/projects'}>
        {$t('common.menu.projects')}
      </li></a
    >
    <a href="/about" on:click
      ><li class="p-6 text-xl" class:underline={$page.url.pathname === '/about'}>
        {$t('common.menu.about')}
      </li></a
    >
  </ul>
</div>
