/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
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
      background: "#eee",
      gray: "#707070",
      white: "#fff",
      purple: "#b500af",
      ligth_gray: "#f5f5f5",
      devider_gray: "#e2e2e2",
      circle_gray: "#616161",
    },
    extend: {},
  },
  plugins: [],
  important: true,
};
