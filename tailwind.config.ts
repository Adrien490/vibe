import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#262A56',
        'secondary': '#B8621B',
        "contrast":'#E3CCAE',
        "background":'#000000'
      },
    }
  },
  plugins: [],
} satisfies Config;
