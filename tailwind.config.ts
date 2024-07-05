import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["var(--font-fira)"]
      },
      colors: {
        'curious-blue': {
          '50': '#f1f9fe',
          '100': '#e2f1fc',
          '200': '#bee3f9',
          '300': '#84cef5',
          '400': '#42b4ee',
          '500': '#1997d7',
          '600': '#0d7cbc',
          '700': '#0b6399',
          '800': '#0e547e',
          '900': '#114769',
          '950': '#0b2c46',
        },
      }
    },
  },
  plugins: [],
};
export default config;
