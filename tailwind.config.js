module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        skin: {
          white: "var(--white-color)",
          gray: "var(--gray-color)",
          primaryDark: "var(--dark-color)",
          accent: "var(--accent-color)",
          black: "var(--black-color)",
          darkGray: "var(--dark-gray-color)",
        },
      },
    },
    fontFamily: {
      times: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
