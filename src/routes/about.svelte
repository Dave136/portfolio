<script context="module">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

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
  <title>About</title>
  <meta name="description" content="About me" />
</svelte:head>

<section class="px-8 flex flex-col items-center">
  <picture class="mt-2 sm:mt-10 lg:mt-2">
    <source srcset="me2.jpg" media="(min-width: 800px)" />
    <img class="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover" src="me2.jpg" alt="Me" />
  </picture>
  <p class="text-sm mt-4 px-6 sm:w-11/12 sm:text-base sm:mt-8 lg:mt-4 lg:w-9/12">
    <span class="text-xl">Hi!</span> My name is David, i am 22 years old, full stack programmer, passionate
    about the world of technology, lover of music and programming. I love Linux, i script with python
    or bash and i'm learning Rust.
  </p>
  <div
    class="w-[85%] min-h-full grid grid-cols-3 gap-4 mt-8 sm:grid-cols-4 sm:mt-14 lg:mt-8 lg:grid-cols-6 lg:w-[70%]"
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
