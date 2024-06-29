export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "Raleway, sans-serif",
        jer: "Jersey 10, sans-serif",
      },
      backgroundColor: {
        main: "#3A0CA3",
        bgColor1: "#191D23",
      },
      colors: {
        textColorMain: "#191D23",
      },
    },
  },
  plugins: [require("daisyui")],
};

