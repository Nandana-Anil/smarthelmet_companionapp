/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '100px', // Adjust the value to your desired border radius
        'custom2' : '100px',
        'custom3' : '50px'
      }
    },
  },
  plugins: [],
}
