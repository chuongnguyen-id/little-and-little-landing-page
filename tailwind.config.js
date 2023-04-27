/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Montserrat", "sans - serif"],
        font2: ["iCielKoni"],
      },
      colors: {
        navigationColor: "#ED7200",
        bgColor: "#FFF6D4",
        primaryButtonColor: "#FF000A",
        secondaryButtonColor: "#FFDE32",
        contactBgColor: "#E5E5E5",
        errorHeaderColor: "#FF8B15",
      },
      textColor: {
        titleColor: "#FFFFFF",
        primaryTextColor: "#23221F",
        secondaryTextColor: "#12265A",
        priceColor: "#FA7D09",
        codeColor: "#000000",
        ticketTextColor: "#FFC226",
      },
      backgroundImage: {
        buttonGradient:
          "linear-gradient(176.02deg, #FF000A -12.67%, #C2000B 101.08%)",
        // bgGradient: "linear-gradient(0deg, #FFC42C 1.71%, #FFD600 96.65%)",
        bgGradient:
          "radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)",
      },
    },
  },
  plugins: [],
};
