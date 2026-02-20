/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        card: "var(--bg-card)",
        main: "var(--text-main)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
      }
    },
  },
  plugins: [],
}

