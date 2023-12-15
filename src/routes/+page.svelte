<script lang="ts">
  import { t } from 'svelte-i18n';
  import projects from '../projects.json';
  import stacks from '../stacks.json';
</script>

<svelte:head>
  <title>{$t('home.head')}</title>
  <meta name="description" content="My personal portfolio" />
</svelte:head>

<section class="flex flex-col mx-4 mt-8 lg:mt-6 mb-12">
  <h3 class="text-5xl lg:mt-8">{$t('home.title')}</h3>
  <p class="mt-8 text-lg break-words sm:text-xl">
    {$t('home.subtitle')}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error neque nostrum nihil sit delectus
    in sint mollitia nesciunt est? Eligendi dicta atque amet ullam perspiciatis ipsum. Asperiores, minus
    nemo!
  </p>

  <p class="mt-12 mb-6 font-bold">Experience</p>
  <ul class="grid gap-12">
    {#each projects.slice(0, 4) as project}
      <li>
        <a class="flex flex-col gap-4" href={project.link} target="_blank">
          <img class="rounded-lg w-full" src={project.image} alt="" />
          <div>
            <h3 class="font-bold mb-2">{project.name}</h3>
            <p class="text-gray-400 text-xs mb-3">{$t(project.content)}</p>
            {#each project.tags as tag}
              <span class="px-3 mr-1 border border-gray-700 rounded-md text-gray-500 text-xs"
                >{tag}</span
              >
            {/each}
          </div>
        </a>
      </li>
    {/each}
    <li>
      <a href="/projects" class="underline">All projects</a>
    </li>
  </ul>

  <p class="mt-12 mb-6 font-bold">Tech Stacks</p>

  <ul class="grid gap-12">
    {#each stacks.slice(0, 4) as stack}
      <li class="flex gap-6">
        <img class="w-10" src={stack.src} alt={stack.alt} />
        <div>
          <h4 class="font-bold">{stack.name}</h4>
          <p class="text-xs text-gray-400">{stack.description}</p>
        </div>
      </li>
    {/each}
    <li>
      <button class="block bg-zinc-800 w-full rounded-md py-2 border border-zinc-700"
        >All tools</button
      >
    </li>
  </ul>
</section>
