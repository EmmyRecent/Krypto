/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#15144F",
        "color-primary-light": "#87D0D0",
        "color-secondary": "#8E8EDB",
        "color-secondary-dark": "#463F7E4D",
        "color-white": "#fff",
        "color-black": "#000",
        "color-darkblue": "#B4B4DE",
        "color-blue": "rgba(132, 132, 223, 0.00)",
        "color-primary-dark": "#322A65",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
        lg: "90px",
      },
    },
  },
  plugins: [],
};

