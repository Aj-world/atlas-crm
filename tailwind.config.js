/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#0B1120",
        neonPurple: "#7C3AED",
        neonBlue: "#3B82F6",
      },
      boxShadow: {
        neon: "0 0 25px rgba(59,130,246,0.6)",
      },
    },
  },
  plugins: [],
};