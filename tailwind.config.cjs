/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          light: '#211d35',
          DEFAULT: '#191627',
          dark: '#0f0a1b',
        },
      },
    },
  },
  plugins: [],
};
