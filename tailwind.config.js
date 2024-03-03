/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRose: "#FFDFD5", // Светло-розовый
        darkRose: "#FFAA90", // Темно-розовый
        amber: "#E89F50", // Бурштиновый
        ivory: "#FCF5ECE5", // Слоновая кость
        modal: "#F6EFE6E5",
        gray: { DEFAULT: "#666565", 100: "#333333" },
      },
    },
    backgroundImage: {
      about: "url('images/bg-about.jpg')",
      menu: "url('images/bg-menu.jpg')",
    },
  },
  plugins: [],
};
