/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {center: true,},
    fontFamily: {
      'sans': ['Hind', 'sans-serif'],
      'lead': ['Montserrat Variable', 'sans-serif'], 
      'pop' : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}