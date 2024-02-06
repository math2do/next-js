import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fluid-5": "repeat(auto-fit, minmax(5rem, 1fr))",
        "fluid-10": "repeat(auto-fit, minmax(10rem, 1fr))",
        "fluid-15": "repeat(auto-fit, minmax(15rem, 1fr))",
        "fluid-20": "repeat(auto-fit, minmax(20rem, 1fr))",
        "fluid-25": "repeat(auto-fit, minmax(25rem, 1fr))",
        "fluid-30": "repeat(auto-fit, minmax(30rem, 1fr))",
        "fluid-35": "repeat(auto-fit, minmax(35rem, 1fr))",
        "fluid-40": "repeat(auto-fit, minmax(40rem, 1fr))",
        "fluid-45": "repeat(auto-fit, minmax(45rem, 1fr))",
        "fluid-50": "repeat(auto-fit, minmax(50rem, 1fr))",
      },
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
      },
    },
  },
  plugins: [],
};
export default config;
