module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--rich-black)",
        secondary: "var(--baby-powder)",
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
