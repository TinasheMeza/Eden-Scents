import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F3",
        sand: "#E8E3D5",
        "muted-green": "#9CAF88",
        "warm-gray": "#6B6B6B",
        "soft-gold": "#D4AF37",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 25px 80px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
