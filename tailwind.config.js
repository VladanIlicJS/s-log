/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'hero': "url('../public/assets/hero.png')",
      'planner':"url('../public/assets/planner.png')"
    }},
  },
  plugins: [],
}
