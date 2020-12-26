module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['Nunito Sans'],
        'fredoka-one': ['Fredoka One'],
      },
      colors: {
        'natural-black': '#363636',
        'teal': '#2397B0',
        'light-teal': '#23AFA6',
        'dark-teal': '#238CAf',
        'light-text-100': '#ECF8FF',
        'light-text-200': '#C9E2F0',
        'blue50': '#5E8CA7 ',
      }
    }
  },
  variants: {
    borderRadius: ['responsive', 'first', 'last', 'hover'],
    borderWidth: ['responsive', 'first', 'hover'],
    margin: ['responsive', 'hover'],
    padding: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
