/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primer: "#E4F9F5",
        second: "#30E3CA",
        muted: "#11999E",
        accent: "#40514E",
      },
    },
  },
  plugins: [],
};
