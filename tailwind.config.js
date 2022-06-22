const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        primary: "#57ca85",
        secondary: "#f38181",
        tertiary: "#ffbb41",
      },
    },
  },
  plugins: [],
};
