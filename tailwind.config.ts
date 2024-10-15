import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
        // "archivo-semi-bold": ["var(--font-archivo-semi-bold)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#191A23",
        primary: "#00A0EA",
      },
      maxWidth: {
        desktop: "1240px",
      },
      boxShadow: {
        box: "0px 5px 0px 0px #191A23",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
};
export default config;
