<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getLocaleFromNavigator, t } from 'svelte-i18n';

  export let value = getLocaleFromNavigator();

  let showMenu = '';
  let display = false;
  let isEnglishLang: boolean | null = null;

  $: isEnglishLang = value?.includes('en') as boolean;
  $: showMenu = display ? 'flex' : 'hidden';

  const dispatch = createEventDispatcher();

  type WithTarget<Event, Target> = Event & { currentTarget: Target };

  function handleLocaleChange(event: WithTarget<Event, HTMLSelectElement>, newValue: string) {
    event.preventDefault();

    value = newValue;
    dispatch('locale-changed', newValue);
  }
</script>

<div class="z-10 lg:inline-block lg:mx-2">
  <div
    tabindex="0"
    class="inline-flex items-center w-12 h-12 lg:inline-flex relative text-left cursor-default"
    on:mouseover={() => (display = true)}
    on:focus={() => (display = true)}
    on:mouseleave={() => (display = false)}
    on:click={() => (display = !display)}
  >
    <div class="flex items-center w-full">
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        class="d-icon w-6 h-6 m-auto text-dark-300 hover:text-dark-600"
        ><path
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        /></svg
      >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 text-dark-300"
        ><g transform="rotate(90 12 12)"><path d="M9 5l7 7-7 7" /></g></svg
      >
    </div>
    <div
      class="z-30 rounded-md shadow-lg w-auto pt-2 {showMenu}"
      style="position: absolute; left: -28px; top: 48px; margin: 0px;"
      data-popper-placement="bottom"
    >
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        class="overflow-y-auto rounded-md divide-y py-1 max-h-56 divide-gray-700 bg-secondary-darkest"
      >
        <div class="divide-y divide-gray-700">
          <div class="py-1">
            <div role="menuitem" on:click={(e) => handleLocaleChange(e, 'en')}>
              <a
                href="#"
                aria-current="page"
                class="px-4 py-1 flex items-center whitespace-no-wrap text-dark-200"
                class:font-semibold={isEnglishLang}
                class:cursor-default={isEnglishLang}
              >
                {$t('common.lang.en')}
              </a>
            </div>
            <div role="menuitem" on:click={(e) => handleLocaleChange(e, 'es')}>
              <a
                href="#"
                class="px-4 py-1 flex items-center whitespace-no-wrap"
                class:font-semibold={!isEnglishLang}
                class:cursor-default={!isEnglishLang}
              >
                {$t('common.lang.es')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
