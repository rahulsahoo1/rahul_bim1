const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B3F69",
        secondary: "#D9D9D9",
        tertiary: "#1E88E5",
      },
    },
  },
  plugins: [],
});
