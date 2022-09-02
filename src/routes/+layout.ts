import { initializate } from '../i18n';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
  await initializate();

  return {
    key: url,
  };
};
