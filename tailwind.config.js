/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./src/**/*.png",
  ],
  theme: {
    extend: {
       fontFamily: {
        "logo": "Old Standard TT",
       }
    },
  },
  plugins: [],
}

