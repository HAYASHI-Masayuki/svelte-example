export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.svelte',
      ],
      safelist: [/^svelte-/, /^s-[0-9A-Za-z_-]{12}$/],
    },
  },
}
