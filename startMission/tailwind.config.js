/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c74b3c',
        ink: '#0b0b0b',
      },
      fontFamily: {
        national: ["'National2Compressed'", "'National2Condensed'", "'Helvetica Neue'", 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
