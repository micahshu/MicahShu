/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**.{js,ts,jsx,tsx}",

    
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
          primary:'#313639',
          secondary:'#F5F5F5',
          jetBlack:"#323031",
          sunYellow:"#FFC857",
          poppyRed:"#DB3A34",
          skyBlue:"#3CD2FF",
          limeGreen:"#32CD32",
          
        },
        fontFamily:{
          "bodyFont": ["Barlow" , "sans-serif"],
          "headerFont": ["'Passion One'","sans-serif"]
        }
    },
  },
  plugins: [],
}
// require('@tailwindcss/typography'),