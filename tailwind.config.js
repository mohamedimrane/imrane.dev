module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "fredoka-one": ['"Fredoka One"'],
        quicksand: ["Quicksand"],
        "varela-round": ['"Varela Round"']
      },
      borderRadius: {
        xl: "1rem"
      },
      spacing: {
        "46": "11rem",
        "72": "18rem",
        "100vh": "100vh",
        "100vw": "100vw",
        "1/2": "50%"
      },
      inset: {
        "1/2": "50%"
      }
    }
  },
  variants: {
    backgroundColor: ["dark"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
