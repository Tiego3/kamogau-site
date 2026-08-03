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
          navyLight: "#253249",
        },
        // Redesign palette — reads from CSS custom properties in index.css so
        // light/dark mode just swaps the variable values, no class changes needed.
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        ember: {
          DEFAULT: "var(--ember)",
          glow: "var(--ember-glow)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        display: ["Archivo", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 16, 24, 0.35)",
        lift: "0 16px 45px rgba(10, 16, 24, 0.45)",
        card: "0 10px 25px rgba(16, 24, 40, 0.10)",
        cardHover: "0 16px 35px rgba(16, 24, 40, 0.14)",
        ember: "0 20px 50px -20px rgba(139, 26, 26, 0.45)",
        elevated: "0 30px 80px -30px rgba(0, 0, 0, 0.5)",
        "card-luxe": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ember-pulse": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "ember-pulse": "ember-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
