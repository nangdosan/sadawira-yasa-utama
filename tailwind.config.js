/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        vintage: "#EDE0D4",
        "vintage-dark": "#DDB892",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
