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
        sans: ['Caveat', 'cursive', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
