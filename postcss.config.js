export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.svelte',
      ],
      safelist: [/^svelte-/],
    },
  },
}
