/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      zIndex: {
        1000: '1000', // Adiciona z-index personalizado
      }
    },
  },
  plugins: [],
}
