/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "bg-body": "#25262b",
        "bg-elements": "#1f2025",
      },
      screens: {
        md: { max: "768px" },
      },
    },
  },
  plugins: [],
};
