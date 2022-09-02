<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getLocaleFromNavigator } from 'svelte-i18n';

  export let value = getLocaleFromNavigator();

  const dispatch = createEventDispatcher();

  type WithTarget<Event, Target> = Event & { currentTarget: Target };

  function handleLocaleChange(event: WithTarget<Event, HTMLSelectElement>) {
    event.preventDefault();

    dispatch('locale-changed', event?.currentTarget.value);
  }
</script>

<div class="z-10 lg:inline-block lg:mr-2">
  <select
    value={value?.split('-')[0]}
    on:change={handleLocaleChange}
    class="p-1 rounded-xs dark:bg-zinc-800"
  >
    <option value="en" selected>EN</option>
    <option value="es">ES</option>
  </select>
</div>
