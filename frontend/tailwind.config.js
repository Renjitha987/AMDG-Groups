/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amdg: {
          blue: '#007bbf',
          'blue-dark': '#005f94',
          'blue-light': '#e6f3fa',
          accent: '#3367d6',
          dark: '#1f1f1f',
          charcoal: '#3a3a3a',
          gray: '#f0f0f0',
          'gray-light': '#f9f9f9',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
