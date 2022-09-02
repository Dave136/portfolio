import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

export const initializate = async () => {
  register('en', () => import('./locales/en.json'));
  register('es', () => import('./locales/es.json'));

  await init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
};
