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
  <picture class="mt-8">
    <source srcset="me2.jpg" media="(min-width: 800px)" />
    <img class="rounded-full w-48 h-48 object-cover" src="me2.jpg" alt="Me" />
  </picture>
  <p class="text-lg mt-12">
    <span class="text-2xl font-semibold">Hi!</span> My name is David, I am 22 years old, full stack programmer,
    passionate about the world of technology, lover of music and programming. I love Linux, I script
    in python and I'm learning Rust.
  </p>
  <div class="w-[80%] min-h-full ml-auto mr-auto grid grid-cols-3 gap-8 mt-20">
    {#each logos as logo}
      <div class="flex justify-center">
        <picture>
          <img
            class="w-20 h-20 p-4 bg-secondary shadow-lg dark:bg-third-alt rounded-lg"
            src={logo.src}
            alt={logo.alt}
          />
        </picture>
      </div>
    {/each}
  </div>
</section>
