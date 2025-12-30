/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
      },
      fontFamily: {
        sans: ['Turret Road', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        turret: ['Turret Road', 'system-ui'],
      },
    },
  },
  plugins: [],
}
