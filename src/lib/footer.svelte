<script lang="ts">
  import { t } from 'svelte-i18n';
  import { fly } from 'svelte/transition';

  let showInfo = false;
</script>

{#if showInfo}
  <div class="flex justify-center">
    <div
      class="bg-secondary dark:bg-secondary-alt p-4 absolute block bottom-24 w-auto ml-auto mr-auto rounded-md"
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

<footer class="py-8 bottom-8 flex w-full justify-center border-t border-t-zinc-700">
  <div class="flex flex-col">
    <p class="py-2 text-sm text-center text-gray-500">
      <span class="font-bold text-white text-opacity-90">Built with</span> Sveltekit and ❤️
    </p>
    <p class="py-2 text-sm text-center text-gray-500">
      <span class="font-bold text-white text-opacity-90">Made by</span> David Arenas
    </p>
    <p class="py-2 text-sm text-center text-gray-500">&copy; {new Date().getFullYear()}</p>
  </div>
</footer>
