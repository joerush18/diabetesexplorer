module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#EE6C4D",
        backgroundLight: "#EEF0F2",
        backgroundDark: "#20252D",
        secondaryColor: "#4A4A4A",
        statusYes: "#4DEE8D",
        statusNo: "#e63946",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
