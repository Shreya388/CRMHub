const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Enable dark mode support if needed
  plugins: [nextui()],
};
