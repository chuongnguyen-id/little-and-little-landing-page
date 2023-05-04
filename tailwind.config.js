/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans - serif"],
        icielKoni: ["iCielKoni"],
      },
      colors: {
        navigationColor: "#ED7200",
        shadowButton: "#BD000B",
        buttonColor: "#FF000A",
        // contactBgColor: "#E5E5E5",
        // errorHeaderColor: "#FF8B15",
        shadowBox: "#FFCA7B",
        coverBox: "#FDE8B3",
        contentBox: "#FFF6D4",
      },
      textColor: {
        titleColor: "#FFFFFF",
        infoTextColor: "#23221F",
        labelTextColor: "#12265A",
        descriptionTextColor: "#6C7272",
        dateTextColor: "#444444",
        priceTextColor: "#FA7D09",
        // codeColor: "#000000",
        ticketTextColor: "#FFC226",
      },
      backgroundImage: {
        titleCardGradient:
          "linear-gradient(176.02deg, #FF000A -12.67%, #C2000B 101.08%)",
        // bgGradient: "linear-gradient(0deg, #FFC42C 1.71%, #FFD600 96.65%)",
        bgGradient:
          "radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)",
        bgImage: "url('./assets/bg.png')",
      },
      borderColor: {
        contentBorder: "#FFB489",
      },
    },
  },
  plugins: [],
};
