<script lang="ts">
  export let isOpen: boolean;
</script>

<div
  class="absolute w-full min-h-full top-0 bg-zinc-900 p-8 transition-transform"
  class:-translate-x-full={!isOpen}
>
  <ul class="flex flex-col items-center justify-center min-h-screen">
    <li class="p-6 text-2xl">Home</li>
    <li class="p-6 text-2xl">Projects</li>
    <li class="p-6 text-2xl">About</li>
    <li class="p-6 text-2xl">Contact</li>
  </ul>
</div>
