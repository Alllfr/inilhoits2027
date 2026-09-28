import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cartoon: ["'Baloo 2'", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
