module.exports = {
  purge: [
    '../**.php',
    '../**/**.php',
    '../**/**.js',
    '../**/**/**.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens')
  ],
}
