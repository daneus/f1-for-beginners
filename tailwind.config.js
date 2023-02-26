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
        dim: 'rgba(0, 0, 0, 0.7)',
        mercedes: '#6CD3BF',
        alpine: '#2293D1',
        haas: '#B6BABD',
        mcLaren: '#F58020',
        redBull: '#3671C6',
        astonMartin: '#358C75',
        alphaTauri: '#5E8FAA',
        ferrari: '#F91536',
        alfaRomeo: '#C92D4B',
        williams: '#37BEDDs'
      },
      fontFamily: {
        f1regular: 'F1Regular',
        f1bold: 'F1Bold',
        f1wide: 'F1Wide'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '200% center' }
        }
      }
    }
  },
  plugins: []
}
