<script lang="ts">
  // TODO: integrate with github
  let projects = [
    {
      name: 'Connectable',
      content: 'GUI client for postgresSQL',
      tags: ['Rust', 'Tauri', 'Svelte', 'WindiCSS'],
      image: 'connectable-app.png',
      link: 'https://github.com/Dave136/connectable',
    },
    {
      name: 'Compr',
      content: 'Post app made with Nestjs, Sveltekit and monorepo pnpm system',
      tags: ['Nestjs', 'Nodejs', 'Backend', 'SvelteKit', 'UnoCSS'],
      image: 'compr-app.png',
      link: 'https://github.com/Dave136/compr',
    },
    {
      name: 'Switch-env',
      content: 'Simple CLI for switch between environments',
      tags: ['Rust', 'Clap'],
      image: 'switch-app.png',
      link: 'https://github.com/Dave136/switch-env',
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
            <a href={project.link}>
              <div class="inline-block px-3">
                <div
                  style="background-image: url({project.image});"
                  class="w-96 h-96 max-w-xs overflow-hidden flex flex-col justify-center rounded-lg shadow-md bg-secondary dark:bg-secondary-alt hover:shadow-xl transition-shadow duration-300 ease-in-out relative bg-center bg-contain bg-no-repeat after:content-[''] after:absolute after:block after:w-full after:h-full after:bg- after:top-0 after:left-0 after:bg-black after:bg-opacity-60"
                >
                  <h4 class="text-center text-xl mt-4 underline relative z-[1]">{project.name}</h4>
                  <p class="p-4 text-center relative z-[1]">{project.content}</p>
                  <div class="absolute bottom-4 w-full z-[1]">
                    {#each project.tags as tag}
                      <span
                        class="p-2 inline-flex text-xs flex-wrap ml-4 mb-2 rounded-md bg-third dark:bg-third-alt gap-4"
                        >{tag}</span
                      >
                    {/each}
                  </div>
                </div>
              </div>
            </a>
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
