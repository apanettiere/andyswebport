/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        modak: ["Modak", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url('/images/hero-background.svg')",
        "architecture-background": "url('/images/hero-image.svg')",
        "beauty-background": "url('/images/beauty.svg')",
        "cosplay-background": "url('/images/cosplay.svg')",
        "hero-mobile": "url('/images/hero-mobile.svg')",
        "architecture-mobile": "url('/images/architecture-mobile.svg')",
        "beauty-mobile": "url('/images/beauty-mobile.svg')",
        "cosplay-mobile": "url('/images/cosplay-mobile.svg')",
      },
      colors: {
        ...colors,
        primary: "#c197d2",
        secondary: "#382a40",
        pastel: "#a69281",
        light: "#d2c4c4",
        accent: "#9f9a7f",
      },
    },
  },
  plugins: [],
};
