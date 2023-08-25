/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#15144F",
        "color-secondary": "#8E8EDB",
        "color-white": "#fff",
        "color-black": "#000",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [],
};

