/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        gold: '#C9A34E',
        cream: '#F8F1E5',
        brown: '#3D2B1F',
      },
    },
  },
  plugins: [],
}
