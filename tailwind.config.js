/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      iranSans: [
        "iranSans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        " Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      iranSansBold: ["iranSansBold"],
    },
    colors: {
      "bg-gray": "#eee",
      gray: "#707070",
      white: "#fff",
      ligthGray: "#f5f5f5",
      purple: "#b500af",
    },
    extend: {},
  },
  plugins: [],
  important: true,
};
