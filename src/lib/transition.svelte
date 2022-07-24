<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let refresh = '';

  let animations = false;

  onMount(
    () => (animations = window.matchMedia('(prefers-reduced-motion: reduce)').matches !== true),
  );
</script>

{#key refresh}
  {#if !!animations}
    <div in:fly={{ delay: 100, duration: 200, y: -10 }} out:fly={{ duration: 100, y: 10 }}>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
{/key}
