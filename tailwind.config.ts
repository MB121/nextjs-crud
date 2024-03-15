import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: Object.fromEntries(
        Array(100)
          .fill(0)
          .map((_, i) => [i + 1, `${i + 1}px`])
      ),
      height: Object.fromEntries(
        Array(100)
          .fill(0)
          .map((_, i) => [i + 1, `${i + 1}px`])
      ),
      spacing: Object.fromEntries(
        Array(100)
          .fill(0)
          .map((_, i) => [i + 1, `${i + 1}px`])
      ),
      colors: {
        primary: "#226ed5",
        sky: "#00dff4",
        lightgreen: "#48bbb4",
        darkgreen: "#31a39b",
      },
    },
  },
  plugins: [],
};
export default config;
