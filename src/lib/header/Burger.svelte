<script lang="ts">
  export let isOpen: boolean = false;
</script>

<button
  class="flex flex-col justify-between w-6 h-4 z-10 mr-8 overflow-hidden group lg:hidden"
  on:click
>
  <div
    class={`w-full bg-black dark:bg-white h-[2px] transition ease  ${
      isOpen
        ? 'translate-x-1 rotate-[45deg] translate-y-[10px] group-hover:bg-zinc-400'
        : 'group-hover:translate-x-1'
    }`}
  />
  <div
    class={`w-full bg-black dark:bg-white h-[2px] -translate-x-2 transition ease ${
      isOpen ? 'translate-x-8' : 'group-hover:translate-x-3'
    }`}
  />
  <div
    class={`w-full bg-black dark:bg-white h-[2px] -translate-x-1 transition ease ${
      isOpen
        ? 'translate-x-0 -rotate-[45deg] -translate-y-1 group-hover:bg-zinc-400'
        : 'group-hover:translate-x-2'
    }`}
  />
</button>
