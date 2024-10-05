/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#76E8CD",
        head:"#00414d",
        primary:"#004d5a",
      },
      screens: {
        sm: '850px', 
      },
    },
  },
  plugins: [],
}

