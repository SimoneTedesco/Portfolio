module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      focus: "0 0 2pt 3pt var(--tiffany-blue)",
    },
    extend: {
      colors: {
        primary: "var(--rich-black-2)",
        secondary: "var(--platinum)",
        accent: "var(--tiffany-blue)",
        accent1: "var(--middle-blue-green)",
        accent2: "var(--viridian-green)",
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ["hover"],
    },
  },
  plugins: [],
};
