import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'text': '#040b2f',
      'background': 'hsl(216, 38%, 95%)',
      'primary': 'hsl(229, 93%, 24%)',
      'secondary': 'hsl(229, 55%, 55%)',  
      'accent': '#b4c4f8',
      'white':'#fff'
    }
  },
  plugins: [],
};
export default config;
