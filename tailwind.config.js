/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/background.jpeg')"
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
}
