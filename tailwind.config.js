/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      boxShadow: {
        BG1Shadow: 'inset 0 -100 200 0 black'
      },
      colors: {
        dim: 'rgba(0, 0, 0, 0.4)'
      },
      fontFamily: {
        f1regular: 'F1Regular',
        f1bold: 'F1Bold'
      }
    }
  },
  plugins: []
}
