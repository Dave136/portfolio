<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$t('home.head')}</title>
  <meta name="description" content="My personal portfolio" />
</svelte:head>

<section class="flex flex-col justify-center items-center mt-20 lg:mt-6">
  <picture>
    <source srcset="me.jpg" media="(min-width: 800px)" />
    <img class="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover" src="me.jpg" alt="Me" />
  </picture>
  <h3 class="text-5xl mt-10 lg:mt-8">{$t('home.title')}</h3>
  <p class="mt-8 text-lg text-center break-words px-8 sm:text-xl">
    {$t('home.subtitle')}
  </p>
</section>
