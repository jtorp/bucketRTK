/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        redred: '#b52604',
        crazyOrange: "#e24a07",
        pumpkin: "#ff9136",
        primaryBg: "#0c4052",
        anotherBlue: "#125066",
        darkPurple: "#1C0221",
      },
      // backgroundImage: {
      //   'leaves-pattern': "url('')",
      // },
      fontFamily: {
        'alex': ['AlexBrush', 'cursive']
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
