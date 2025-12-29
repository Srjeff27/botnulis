/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        accent: '#f59e0b'
      }
    }
  },
  plugins: []
}
