module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        mainBg: "#1E1E1E",
      },
      keyframes: {
        visibleToTop: {
          "0%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(5px)" },
        },
      },
    },
  },
  plugins: [],
};
