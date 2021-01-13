module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class' or false
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
        'blue40': '#416883 ',
        'darkmode-teal': '#1B4751',
        'darkmode-dark-teal': '#092D36'
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
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.html',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    },
  },
  plugins: [],
}
