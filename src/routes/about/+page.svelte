<script lang="ts">
  import { t } from 'svelte-i18n';
  const logos = [
    {
      src: 'typescript.svg',
      alt: 'Typescript Logo',
    },
    {
      src: 'nodejs.svg',
      alt: 'Nodejs Logo',
    },
    {
      src: 'react-logo.svg',
      alt: 'React Logo',
    },
    {
      src: 'vuejs.svg',
      alt: 'Vuejs Logo',
    },
    {
      src: 'svelte-logo.svg',
      alt: 'Svelte Logo',
    },
    {
      src: 'rust.svg',
      alt: 'Rust Logo',
    },
  ];
</script>

<svelte:head>
  <title>{$t('about.head')}</title>
  <meta name="description" content="About me" />
</svelte:head>

<section class="px-2 flex flex-col items-center">
  <h2 class="text-3xl self-start mt-8 mb-4 font-bold">{$t('about.title')}</h2>
  <picture class="mt-2 sm:mt-10 lg:mt-2">
    <source srcset="me2.jpg" media="(min-width: 800px)" />
    <img class="rounded-md w-full h-48 sm:w-64 sm:h-64 object-cover" src="me2.jpg" alt="Me" />
  </picture>
  <p class="w-full text-base mt-8 px-2 sm:mt-8 lg:mt-4 lg:w-9/12">
    <span class="text-xl">{$t('about.greating')}</span>
    {$t('about.description')}
  </p>
  <div
    class="w-full min-h-full grid grid-cols-3 gap-4 my-8 sm:grid-cols-4 sm:mt-14 lg:mt-8 lg:grid-cols-6 lg:w-[70%]"
  >
    {#each logos as logo}
      <div class="flex justify-center">
        <picture>
          <img
            class="w-20 h-20 p-4 bg-secondary dark:bg-secondary-alt shadow-2xl rounded-lg sm:w-28 sm:h-28 lg:w-20 lg:h-20 lg:p-2"
            src={logo.src}
            alt={logo.alt}
          />
        </picture>
      </div>
    {/each}
  </div>
</section>
