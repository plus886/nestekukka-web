const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        display: "Cormorant Garamond",
      },
      fontSize: {
        xxs: ".6rem",
      },
      letterSpacing: {
        extreme: ".3em",
      },
      colors: {
        primary: "#2c3228",
        secondary: "#ba735d",
        beige: "#d9cec6",
      },
      minHeight: {
        "300": "300px",
        "500": "500px",
      },
    },
  },
  variants: {},
  plugins: [],
}
