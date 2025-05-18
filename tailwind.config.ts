import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-in-out",
      },
      colors: {
        primary: "#ff6a00",
        secondary: "#ffbb00",
        dark: "#000000",
        accent: "#3e563b",
        overlay: "#111111",
      },
    },
  },
  plugins: [],
};

export default config;
