/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Merienda', 'cursive'],
        title: ['Playfair Display', 'serif'],
        title: ['Merienda', 'cursive'],
        title: ['Poppins', 'sans-serif'],
        title: ['Silkscreen', 'cursive'],
      },
    },
  },
  plugins: [],
}