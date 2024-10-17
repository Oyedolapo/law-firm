/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#506D84',
        customBrown: '#C28A38'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(80, 109, 132, 0.4), rgba(80, 109, 132, 0.6)), url("/src/assets/hero.jpg")',
        'deeper': 'linear-gradient(90deg, rgba(80, 109, 132, 0.6), rgba(80, 109, 132, 0.6)), url("/src/assets/hero.jpg")'
      },
      backgroundColor: {
        'faint': 'rgba(115, 147, 179, 0.1)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow:{
        'customShadow': '3px 3px 15px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}