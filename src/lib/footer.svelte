<script lang="ts">
  import { t } from 'svelte-i18n';
  import { fly } from 'svelte/transition';
  import Github from 'svelte-icons/io/IoLogoGithub.svelte';
  import LinkedIn from 'svelte-icons/io/IoLogoLinkedin.svelte';
  // import Twitter from 'svelte-icons/io/IoLogoTwitter.svelte';
  import Info from 'svelte-icons/io/IoIosInformationCircle.svelte';

  import Email from 'svelte-icons/io/IoIosMail.svelte';
  import Whatsapp from 'svelte-icons/io/IoLogoWhatsapp.svelte';

  let showInfo = false;

  const toggleInfo = () => {
    showInfo = !showInfo;
  };
</script>

{#if showInfo}
  <div class="flex justify-center">
    <div
      class="bg-secondary dark:bg-secondary-alt p-4 absolute block bottom-28 w-auto ml-auto mr-auto rounded-md"
      in:fly={{ delay: 100, duration: 200, y: -10 }}
      out:fly={{ duration: 100, y: 10 }}
    >
      <p class="text-sm">
        <!-- Made with Sveltekit and ❤️ by David Arenas &copy; {new Date().getFullYear()} -->
        {$t('common.footer', { values: { date: new Date().getFullYear() } })}
      </p>
    </div>
  </div>
{/if}

<footer class="absolute bottom-8 flex w-full justify-center">
  <div class="flex justify-between items-center w-full px-12 sm:w-4/5 lg:w-1/2">
    <a href="https://github.com/Dave136" target="_blank" class="w-8 h-8"><Github /></a>
    <a href="https://www.linkedin.com/in/david-arenas-72761b170/" target="_blank" class="w-8 h-8"
      ><LinkedIn /></a
    >
    <!-- <a href="https://twitter.com/davejs4" target="_blank" class="w-8 h-8"><Twitter /></a> -->
    <span class="w-8 h-8"><Email /></span>
    <span class="w-8 h-8"><Whatsapp /></span>
    <span class="w-8 h-8" on:click|preventDefault={toggleInfo}><Info /></span>
  </div>
</footer>
