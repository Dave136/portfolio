<script lang="ts">
  import CardWrapper from '$lib/components/card-wrapper.svelte';
  import Card from '$lib/components/card.svelte';

  // TODO: integrate with github
  let projects = [
    {
      name: 'Connectable',
      content: 'GUI client for postgresSQL',
      tags: ['Rust', 'Tauri', 'Svelte', 'DaisyUI'],
      image: 'connectable-app.png',
      link: 'https://github.com/Dave136/connectable',
    },
    {
      name: 'Compr',
      content: 'Post app made with Nestjs, Sveltekit and monorepo pnpm system',
      tags: ['Nestjs', 'Backend', 'SvelteKit', 'UnoCSS'],
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
  <section class="px-8 mt-8 sm:mt-16 lg:mt-4">
    <h3 class="text-3xl text-center">My projects</h3>
    <CardWrapper>
      {#each projects as project}
        <Card {...project} />
      {/each}
    </CardWrapper>
  </section>
</template>
