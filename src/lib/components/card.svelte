<script lang="ts">
  export let link: string;
  export let image: string;
  export let name: string;
  export let content: string;
  export let tags: string[];
</script>

<a href={link}>
  <div class="inline-block px-3">
    <div
      class="w-96 h-96 sm:w-[26rem] sm:h-[26rem] lg:w-96 lg:h-96 max-w-xs overflow-hidden flex flex-col justify-start rounded-lg shadow-md bg-secondary dark:bg-secondary-alt hover:shadow-xl transition-shadow duration-300 ease-in-out relative"
    >
      <div style="background-image: url({image});" class="w-full h-40 bg-cover bg-left" />
      <h4 class="text-center text-xl mt-4 underline relative z-[1]">{name}</h4>
      <p class="p-4 text-center relative z-[1]">{content}</p>
      <div class="absolute bottom-4 w-full z-[1]">
        {#each tags as tag}
          <span
            class="p-2 inline-flex text-xs flex-wrap ml-4 mb-2 rounded-md text-secondary-alt dark:text-primary-alt bg-third dark:bg-third-alt gap-4"
            >{tag}</span
          >
        {/each}
      </div>
    </div>
  </div>
</a>
