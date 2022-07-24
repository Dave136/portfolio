<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Dave136 | Home</title>
  <meta name="description" content="My personal portfolio" />
</svelte:head>

<section class="flex flex-col justify-center items-center mt-4">
  <picture>
    <source srcset="me.jpg" media="(min-width: 800px)" />
    <img class="rounded-full w-48 h-48 object-cover" src="me.jpg" alt="Me" />
  </picture>
  <h3 class="text-4xl mt-10">Hi! I'm David</h3>
  <p class="mt-6 text-xl text-center">
    Fullstack developer 💻 <br /> Using Typescript 😃
  </p>
</section>
