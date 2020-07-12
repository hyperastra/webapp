const defaultTheme = require("tailwindcss/defaultTheme");

const primaryColor = {
  ...defaultTheme.colors.teal,
};

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  purge: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: primaryColor
      },
      boxShadow: {
        "outline-primary": `0 0 0 3px ${primaryColor[500]}73`,
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
