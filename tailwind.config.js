/** @type {import('tailwindcss').Config} */
export default {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}