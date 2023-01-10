// @ts-nocheck

const darkmode = 'media'
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      colors: {
        'primary': '#0070f3',
        'secondary': '#ff4081',
        'success': '#4caf50',
        'info': '#2196f3',
        'warning': '#ffeb3b',
        'danger': '#f44336',
        'light': !darkmode ? '#f4f4f4' : '#212121',
        'dark': darkmode ? '#212121' : '#f4f4f4',
        'white': '#ffffff',
        'black': '#000000',
        'transparent': 'transparent',
        'current': 'currentColor',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      fontFamily: {
        'la-patio': [
          'La Patio',
          'sans-serif'
        ],
        'capinella-ou-beaujolais': [
          'Capinella Ou Beaujolais',
          'sans-serif'
        ],
        'geometos-rounded': [
          'Geometos Rounded',
          'sans-serif'
        ],
        'roboto': [
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ],
        'noto-sans': [
          '"Noto Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        'segoe-ui': [
          '"Segoe UI"',
          '-apple-system',
          'BlinkMacSystemFont',
          'serif',
        ],
        'helvetica': [
          '"Helvetica Neue"',
          '-apple-system',
          'BlinkMacSystemFont',
          'serif',
        ],
        'arial': [
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          'serif'
        ],
        'code': [
          'consolas',
          '-apple-system',
          'BlinkMacSystemFont',
          'monospace'
        ],
      },
    },
  },
  darkMode: darkmode,
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'darkmode',
    lightTheme: 'lightmode',
    themes: [
      {
        darkmode: {
          'accent': '#6366f1',
          'neutral': '#fcd34d',
          'base-100': '#333333',
          'primary': '#0070f3',
          'secondary': '#ff4081',
          'success': '#4caf50',
          'info': '#2196f3',
          'warning': '#ffeb3b',
          'error': '#f44336',
          'light': '#f4f4f4',
          'dark': '#212121',
          'white': '#ffffff',
          'black': '#000000',
          'transparent': 'transparent',
          'current': 'currentColor',
        },
        lightmode: {
          'accent': '#6366f1',
          'neutral': '#fcd34d',
          'base-100': '#eeeeee',
          'primary': '#0070f3',
          'secondary': '#ff4081',
          'success': '#4caf50',
          'info': '#2196f3',
          'warning': '#ffeb3b',
          'error': '#f44336',
          'light': '#212121',
          'dark': '#f4f4f4',
          'black': '#ffffff',
          'white': '#000000',
          'transparent': 'transparent',
          'current': 'currentColor',
        },
      },
    ],
  },
  plugins: [
    require('autoprefixer'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
