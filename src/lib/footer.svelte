<script lang="ts">
  import { fly } from 'svelte/transition';
  import Github from 'svelte-icons/io/IoLogoGithub.svelte';
  import LinkedIn from 'svelte-icons/io/IoLogoLinkedin.svelte';
  // import Twitter from 'svelte-icons/io/IoLogoTwitter.svelte';
  import Info from 'svelte-icons/io/IoIosInformationCircle.svelte';
  import AddCircle from 'svelte-icons/io/IoIosAddCircle.svelte';

  import Email from 'svelte-icons/io/IoIosMail.svelte';
  import Whatsapp from 'svelte-icons/io/IoLogoWhatsapp.svelte';

  let showInfo = false;
  let showMore = false;

  const toggleInfo = () => {
    if (showMore) showMore = false;
    showInfo = !showInfo;
  };

  const toggleMore = (e: MouseEvent) => {
    if (showInfo) showInfo = false;
    showMore = !showMore;
  };
</script>

{#if showInfo}
  <div class="flex justify-center">
    <div
      class="bg-zinc-300 dark:bg-zinc-700 p-4 absolute block bottom-28 w-auto ml-auto mr-auto rounded-md"
      in:fly={{ delay: 100, duration: 200, y: -10 }}
      out:fly={{ duration: 100, y: 10 }}
    >
      <p class="text-sm">
        Made with Sveltekit and ❤️ by David Arenas &copy; {new Date().getFullYear()}
      </p>
    </div>
  </div>
{/if}

{#if showMore}
  <div class="flex justify-center">
    <div
      class="bg-zinc-300 dark:bg-zinc-700 p-4 absolute flex bottom-28 w-auto ml-auto mr-auto rounded-md"
      in:fly={{ delay: 100, duration: 200, y: -10 }}
      out:fly={{ duration: 100, y: 10 }}
    >
      <a href="_" target="_blank" class="w-8 h-8 mr-6"><Email /></a>
      <a href="_" target="_blank" class="w-8 h-8"><Whatsapp /></a>
    </div>
  </div>
{/if}

<footer class="absolute bottom-12 flex w-full justify-evenly px-10 ">
  <a href="https://github.com/Dave136" target="_blank" class="w-8 h-8"><Github /></a>
  <a href="https://www.linkedin.com/in/david-arenas-72761b170/" target="_blank" class="w-8 h-8"
    ><LinkedIn /></a
  >
  <!-- <a href="https://twitter.com/davejs4" target="_blank" class="w-8 h-8"><Twitter /></a> -->
  <a href="_" class="w-8 h-8" on:click|preventDefault={toggleInfo}><Info /></a>
  <a href="_" class="w-8 h-8" on:click|preventDefault={toggleMore}><AddCircle /></a>
</footer>
