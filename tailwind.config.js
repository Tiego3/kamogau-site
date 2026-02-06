/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1a2332",
          dark: "#0f1419",
          cream: "#f7f5f2",
          steel: "#e8eaed",
          red: "#8b1a1a",
          redSoft: "#c94545",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 16, 24, 0.35)",
        lift: "0 16px 45px rgba(10, 16, 24, 0.45)",
      },
    },
  },
  plugins: [],
};
