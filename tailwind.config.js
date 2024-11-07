/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: `#FF0000`,
        description: `rgba(255, 255, 255, 0.1)`
      }
    },
  },
  plugins: [],
}