module.exports = {
  scan: {
    dirs: ['./src'],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      '.cache',
      '*.template.html',
      'app.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
  preflight: {
    alias: {
      // add gridsome aliases
      'g-link': 'a',
      'g-image': 'img',
    },
  },

  safelist: ['prose', 'prose-sm', 'm-auto', 'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
    'active'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '13rem',
        'xl': '13rem',
        '2xl': '13rem',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans'],
        fredokaone: ['Fredoka One'],
      },
      colors: {
        primary: {
          light: '#28AFCC',
          DEFAULT: '#2197B0'
        },
        secondary: {
          light: '#8592A5',
          DEFAULT: '#2F2E41'
        }
        // 'natural-black': '#363636',
        // 'teal': '#2397B0',
        // 'light-teal': '#23AFA6',
        // 'dark-teal': '#238CAf',
        // 'light-text-100': '#ECF8FF',
        // 'light-text-200': '#C9E2F0',
        // 'blue50': '#5E8CA7 ',
        // 'blue40': '#416883 ',
        // 'darkmode-teal': '#1B4751',
        // 'darkmode-dark-teal': '#092D36'
      }
    }
  },
  variants: {
  },
  plugins: [require('windicss/plugin/forms')],
}
