/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
          primary:'#313639',
          secondary:'#F5F5F5',
          pastelGreen:"#B0F2B4",
          pastelBlue:"#BAF2E9",
          pastelPurple:"#BAD7F2",
          pastelPink:"#F2BAC9",
          pastelYellow:"#F2E2BA"
        }
    },
  },
  plugins: [],
}
