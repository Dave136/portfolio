<script lang="ts">
  let projects = [
    {
      name: 'Connectable',
      content: 'GUI client for postgresSQL',
      tags: ['Rust', 'Tauri', 'Svelte', 'WindiCSS'],
    },
    {
      name: 'Compr',
      content: 'Post app made with Nestjs, Sveltekit and monorepo pnpm system',
      tags: ['Nestjs', 'Nodejs', 'Backend', 'SvelteKit', 'UnoCSS'],
    },
    {
      name: 'Switch-env',
      content: 'Simple CLI for switch between environments',
      tags: ['Rust', 'Clap'],
    },
  ];
</script>

<template>
  <section class="px-8 mt-8">
    <h3 class="text-3xl">My projects</h3>
    <div class="flex flex-col bg-primary dark:bg-primary-alt m-auto p-auto mt-16 z-0">
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-proximity">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {#each projects as project}
            <div class="inline-block px-3">
              <div
                class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-secondary dark:bg-secondary-alt hover:shadow-xl transition-shadow duration-300 ease-in-out relative"
              >
                <p class="p-4 text-center">{project.content}</p>
                <div class="absolute bottom-4 w-full">
                  {#each project.tags as tag}
                    <span
                      class="p-2 inline-flex text-xs flex-wrap ml-4 mb-2 rounded-md bg-third dark:bg-third-alt gap-4"
                      >{tag}</span
                    >
                  {/each}
                </div>
              </div>
              <h4 class="text-center text-xl mt-8">{project.name}</h4>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
</style>
