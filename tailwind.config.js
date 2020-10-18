module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'fredoka-one': ['"Fredoka One"'],
        quicksand: ['Quicksand'],
        'varela-round': ['"Varela Round"'],
      },
      borderRadius: {
        xl: '1rem',
      },
      spacing: {
        '46': '11rem',
        '72': '18rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        menu: '40rem',
        '100vh': '100vh',
        '100vw': '100vw',
      },
      inset: {
        '1/2': '50%',
        '14': '3.5rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography'),
  ],
}
