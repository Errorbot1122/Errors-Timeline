/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./*.html"],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
        "3": "3px"
      },
      colors: {
        "dark-gray-bg": "#474747",
        "slate-750": "#293548"
      },
      minWidth: {
        "100": "25rem"
      },
      minHeight: {
        "48": "12rem"
      },
    }
  },
  plugins: [],
}