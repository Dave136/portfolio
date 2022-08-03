<div class="flex flex-col bg-primary dark:bg-primary-alt m-auto p-auto mt-12 sm:mt-16 z-0 lg:mt-8">
  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-proximity">
    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 first:ml-0">
      <slot />
    </div>
  </div>
</div>

<style scoped>
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
</style>
