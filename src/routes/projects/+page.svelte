<script lang="ts">
  import { t } from 'svelte-i18n';
  import CardWrapper from '$lib/components/card-wrapper.svelte';
  import Card from '$lib/components/card.svelte';

  // TODO: integrate with github
  let projects = [
    {
      name: 'Connectable 🚧',
      // content: 'GUI client for postgresSQL',
      content: 'projects.list.connectable.content',
      tags: ['Rust', 'Tauri', 'Svelte', 'DaisyUI'],
      image: 'connectable-app.png',
      link: 'https://github.com/Dave136/connectable',
    },
    {
      name: 'Compr 🚧',
      // content: 'Post app made with Nestjs, Sveltekit and monorepo pnpm system',
      content: 'projects.list.compr.content',
      tags: ['Nestjs', 'Backend', 'SvelteKit', 'UnoCSS'],
      image: 'compr-app.png',
      link: 'https://github.com/Dave136/compr',
    },
    {
      name: 'Switch-env 🚀',
      // content: 'Simple CLI for switch between environments',
      content: 'projects.list.switch-env.content',
      tags: ['Rust', 'Clap'],
      image: 'switch-app.png',
      link: 'https://github.com/Dave136/switch-env',
    },
    {
      name: 'v-notes 🚀',
      // content: 'Simple and minimalist notes app',
      content: 'projects.list.notes.content',
      tags: ['Vue3', 'TailwindCSS', 'Pinia', 'Vite'],
      image: 'v-notes.png',
      link: 'https://github.com/Dave136/v-notes',
    },
  ];
</script>

<template>
  <section class="px-8 mt-4 sm:mt-10 lg:mt-4">
    <h3 class="text-2xl text-center sm:text-3xl">
      {$t('projects.title')}
    </h3>
    <CardWrapper>
      {#each projects as project}
        <Card {...project} />
      {/each}
    </CardWrapper>
  </section>
</template>
