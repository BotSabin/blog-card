/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fig: ['Figtree']
      },
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        gray: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)'
      }
    },
  },
  plugins: [],
}