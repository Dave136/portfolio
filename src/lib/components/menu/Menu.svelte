<script lang="ts">
  import { page } from '$app/stores';
  import { blur, fade } from 'svelte/transition';

  $: pathname = $page.url.pathname;

  let isMenuOpen = false;

  const menuItems = [
    {
      name: 'Home',
      icon: 'i-ph-house-light',
      link: '/',
    },
    {
      name: 'Projects',
      icon: 'i-ph-folder-notch-light',
      link: '/projects',
    },
    {
      name: 'Annotations',
      icon: 'i-ph-bookmark-simple-light',
      link: '/annotations',
    },
    {
      name: 'Settings',
      icon: 'i-ph-gear-light',
      link: '/settings',
    },
    {
      name: 'About',
      icon: 'i-ph-info-light',
      link: '/about',
    },
  ];
</script>

<div class="fixed min-h-screen letf-0 bottom-6 w-full flex justify-center items-end">
  <nav class="flex gap-4 bg-zinc-800/60 border border-zinc-700 p-3 rounded-2xl backdrop-blur-sm">
    <div class="flex w-full gap-3 justify-evenly">
      {#each menuItems as item (item.name)}
        <a
          class="w-9 h-9 flex justify-center items-center rounded-lg transition-[background] ease-in relative {pathname ===
            item.link && 'null'}"
          href={item.link}
        >
          <div class="{item.icon} text-2xl"></div>

          {#if pathname === item.link}
            <div class="absolute -bottom-0 flex w-full justify-center" transition:blur>
              <span class="relative flex h-1 w-1">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
              </span>
            </div>
          {/if}
        </a>
      {/each}

      <a
        class="w-9 h-9 flex justify-center items-center rounded-lg transition ease {pathname ===
          '/about' && 'bg-zinc-600'}"
        href="/about"
      >
        <!-- <div class="i-ph-info-light text-2xl"></div> -->
        <picture>
          <source srcset="me.jpg" media="(min-width: 150px)" />
          <img
            class="rounded-full w-8 h-8 sm:w-16 sm:h-16 object-cover transition ease"
            src="me.jpg"
            alt="Me"
          />
        </picture>
      </a>
    </div>

    <div class="">
      <a
        class="w-9 h-9 flex justify-center items-center rounded-lg transition ease {isMenuOpen &&
          'bg-zinc-600'}"
        href="/"
      >
        <div class="i-ph-dots-nine-light text-2xl"></div>
      </a>
    </div>
  </nav>
</div>
