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
      colors: {
        richblue: {
          5: "#ECF5FF",
          25: "#C6D6E1",
          50: "#A0B7C3",
          100: "#7A98A6",
          200: "#537988",
          300: "#2D5A6A",
          400: "#073B4C",
          500: "#063544",
          600: "#042E3B",
          700: "#032833",
          800: "#01212A",
          900: "#1e375f",
          950: "#142341",
        },
      }
    },
    
  },
  plugins: [],
};
export default config;
