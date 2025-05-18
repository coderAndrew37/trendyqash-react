import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
