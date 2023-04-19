/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        archived: {
          '0%, 11%' : {top:5},
          '11%,22%' : {top:10},
          '22%,33%' : {top:15},
          '33%, 44%' : {top:25},
          '44%, 55%' : {top:-25},
          '55%, 66%' : {top:-15},
          '66%, 77%' : {top:-10},
          '77%, 88%' : {top:-5},
          '88%, 100%' : {top:0},
        }
      },
      animation:{
        archived: 'archived 250ms ease-in-out'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}