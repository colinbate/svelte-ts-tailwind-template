module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
      },
    },
  },
  variants: {},
  plugins: [],
}
