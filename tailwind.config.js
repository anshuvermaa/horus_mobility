/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--inter-font)', 'sans-serif'],
      },
      colors: {
        black: '#222222',
      },
    },
  },
  plugins: [],
}
