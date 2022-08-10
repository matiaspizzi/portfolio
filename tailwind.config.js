module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      inner: 'inset 30px 0 20px 0 rgba(23, 23, 23, 0.8), inset -30px 0 20px 0 rgba(23, 23, 23, 0.8)',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}