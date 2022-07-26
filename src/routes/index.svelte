<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Dave136 | Home</title>
  <meta name="description" content="My personal portfolio" />
</svelte:head>

<section class="flex flex-col justify-center items-center mt-20 lg:mt-10">
  <picture>
    <source srcset="me.jpg" media="(min-width: 800px)" />
    <img class="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover" src="me.jpg" alt="Me" />
  </picture>
  <h3 class="text-5xl mt-10">Hi! I'm David</h3>
  <p class="mt-8 text-xl text-center break-words">Fullstack developer 💻 Using Typescript 😃</p>
</section>
