/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'cl-primary': '#ff9900',
        'cl-dark': '#181818',
        'cl-gray': '#454545',
      },
    },
  },
  plugins: [],
}

