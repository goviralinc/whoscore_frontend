import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#67E59A",
        },
        dark: {
          DEFAULT: "#212121",
          "200": "#777777",
        },
        green: {
          "20": "#67E59A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
