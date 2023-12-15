import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',
        secondary: '#e4e6e6',
        third: '#d0d0d0',
        'primary-alt': '#19171a',
        'secondary-alt': '#201e21',
        'third-alt': '#3e3e3e',
      },
      textColor: {
        primary: '#3a3a3a',
        'primary-alt': '#d8dee9',
      },
    },
  },
  plugins: [iconsPlugin({
    collections: getIconCollections(['heroicons', 'ph'])
  })],
};
