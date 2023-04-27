<script lang="ts">
  import { getLocaleFromNavigator, t } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import Home from 'svelte-icons/io/IoIosHome.svelte';
  import PaperPlane from 'svelte-icons/io/IoIosPaperPlane.svelte';
  import Information from 'svelte-icons/io/IoIosInformationCircle.svelte';
  import Instagram from 'svelte-icons/io/IoLogoInstagram.svelte';
  import Github from 'svelte-icons/io/IoLogoGithub.svelte';
  import Twitter from 'svelte-icons/io/IoLogoTwitter.svelte';
  import Moon from 'svelte-icons/io/IoIosMoon.svelte';
  import Sun from 'svelte-icons/io/IoIosSunny.svelte';
  import { page } from '$app/stores';

  export let isOpen: boolean;
  export let isDark: boolean;
  export let lang = getLocaleFromNavigator();

  $: isEnLang = lang?.includes('en') as boolean;

  const dispatch = createEventDispatcher();

  type WithTarget<Event, Target> = Event & { currentTarget: Target };

  function handleLocaleChange(event: WithTarget<Event, HTMLButtonElement>, newValue: string) {
    event.preventDefault();

    lang = newValue;
    dispatch('locale-changed', newValue);
  }
</script>

<div
  class="absolute w-full min-h-full top-0 bg-zinc-200 dark:bg-zinc-900 p-8 transition-transform z-[5] lg:hidden"
  class:-translate-x-full={!isOpen}
>
  <ul class="flex flex-col justify-center mt-20">
    <a href="/" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 ${
          $page.url.pathname === '/'
            ? 'bg-zinc-300 rounded-lg border border-gray-400 font-bold dark:border-gray-700 dark:bg-zinc-800'
            : 'text-gray-500 hover:text-black hover:dark:text-white'
        }`}
      >
        <span class="block w-4 h-4">
          <Home />
        </span>
        {$t('common.menu.home')}
      </li></a
    >
    <a href="/projects" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 ${
          $page.url.pathname === '/projects'
            ? 'bg-zinc-300 rounded-lg border border-gray-400 font-bold dark:border-gray-700 dark:bg-zinc-800'
            : 'text-gray-500 hover:text-black hover:dark:text-white'
        }`}
      >
        <span class="block w-4 h-4">
          <PaperPlane />
        </span>
        {$t('common.menu.projects')}
      </li></a
    >
    <a href="/about" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 ${
          $page.url.pathname === '/about'
            ? 'bg-zinc-300  rounded-lg border border-gray-400 font-bold dark:border-gray-700 dark:bg-zinc-800'
            : 'text-gray-500 hover:text-black hover:dark:text-white'
        }`}
      >
        <span class="block w-4 h-4">
          <Information />
        </span>
        {$t('common.menu.about')}
      </li></a
    >
  </ul>
  <p class="ml-3 mt-8 text-gray-600 dark:text-gray-500">Follow</p>
  <ul class="flex flex-col justify-center mt-2">
    <a href="/" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black hover:dark:text-white`}
      >
        <span class="block w-4 h-4">
          <Instagram />
        </span>
        Instagram
      </li></a
    >
    <a href="/projects" target="_blank" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black hover:dark:text-white`}
      >
        <span class="block w-4 h-4">
          <Github />
        </span>
        Github
      </li></a
    >
    <a href="/about" on:click
      ><li
        class={`p-3 text-sm transition flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black hover:dark:text-white`}
      >
        <span class="block w-4 h-4">
          <Twitter />
        </span>
        Twitter
      </li></a
    >
  </ul>
  <p class="ml-3 mt-8 text-gray-600 dark:text-gray-500">Actions</p>
  <ul class="flex flex-col justify-center mt-2 rounded-xl p-2 bg-zinc-300 dark:bg-zinc-800">
    <li
      class={`p-3 text-sm transition flex justify-between gap-2 text-gray-600 dark:text-gray-400`}
    >
      <p>Appearance</p>
      <button
        class="relative bg-zinc-100 bg-opacity-80 rounded-xl block w-10 h-6 border border-gray-400 dark:border-gray-500 dark:bg-zinc-800"
        on:click={() => dispatch('toggleDark')}
      >
        <span
          class="absolute bg-white dark:bg-zinc-900 top-[1px] left-[1px] w-[18px] h-[18px] rounded-full translate-x-[18px] transition"
          class:translate-x-[18px]={isDark}
        >
          <span class="relative block w-[18] h-[18] rounded-full overflow-hidden">
            {#if isDark}
              <Moon />
            {:else}
              <Sun />
            {/if}
          </span>
        </span>
      </button>
    </li>
    <li
      class={`p-3 text-sm transition flex items-center justify-between gap-2 text-gray-600 dark:text-gray-400 `}
    >
      <p>Lang</p>
      <div class="flex border rounded-md border-zinc-400 dark:border-zinc-600">
        <button
          class={`rounded-l-md px-3 py-1 ${
            isEnLang && 'font-bold bg-zinc-400 text-white dark:bg-zinc-900'
          }`}
          on:click={(e) => handleLocaleChange(e, 'en')}
        >
          en
        </button>
        <button
          class={`rounded-r-md px-3 py-1 ${
            !isEnLang && 'font-bold bg-zinc-400 text-white dark:bg-zinc-900'
          }`}
          on:click={(e) => handleLocaleChange(e, 'es')}
        >
          es
        </button>
      </div>
    </li>
  </ul>
</div>
