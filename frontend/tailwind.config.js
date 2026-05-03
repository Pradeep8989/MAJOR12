/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        dark: "#0f172a",
        card: "#111827",
        border: "#1e293b"
      }
    },
  },
  plugins: [],
}