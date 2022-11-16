/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB', // <-- This is the new color
          200: '#E4E4E7', // <-- This is the new color
          600: '#52525B', // <-- This is the new color
          700: '#3F3F46', // <-- This is the new color
          900: '#18181B', // <-- This is the new color
        },
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
