<script lang="ts">
  import Footer from '$lib/footer.svelte';
  import Header from '$lib/header/index.svelte';
  import Aside from '$lib/aside.svelte';
  import Transition from '$lib/transition.svelte';
  import { onMount } from 'svelte';
  import { getLocaleFromNavigator, locale } from 'svelte-i18n';
  import '../app.css';

  let isDark = false;
  let currentLocale = '';
  export let key: string;

  const getTheme = () => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      isDark = false;
      document.documentElement.classList.remove('dark');
    }
  };

  const getLocale = () => {
    const localeFromStorage = localStorage.getItem('locale');
    if (localeFromStorage) {
      locale.set(localeFromStorage);
    }

    currentLocale = localeFromStorage || getLocaleFromNavigator() || 'en-US';
  };

  onMount(() => {
    getTheme();
    getLocale();
  });
</script>

<div class="w-full mx-auto min-h-screen relative overflow-hidden m:w-2/3 lg:w-3/4">
  <Header {isDark} {currentLocale} />
  <!-- <Aside /> -->
  <Transition refresh={key}>
    <main>
      <slot />
    </main>
  </Transition>
  <Footer />
</div>
