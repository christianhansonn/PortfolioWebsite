import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./public/image/bannerpicture.jpeg')",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: { DEFAULT: "#050814", 900: "#080d1a", 800: "#0f172a", 700: "#1e293b" },
      },
      boxShadow: {
        "glow-cyan":    "0 0 20px rgba(34, 211, 238, 0.4)",
        "glow-cyan-lg": "0 0 40px rgba(34, 211, 238, 0.6)",
        "glow-violet":  "0 0 20px rgba(167, 139, 250, 0.4)",
        "glow-card":    "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      screens: { sm: "640px", md: "1050px", lg: "1170px", xl: "1260px" },
    },
  },
  plugins: [],
} satisfies Config;
