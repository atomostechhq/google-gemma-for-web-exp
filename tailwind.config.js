/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)', /* Using Tailwind's blue-500 */
        secondary: '#6B7280',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}