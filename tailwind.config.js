const defaultTheme = require('tailwindcss/defaultTheme');
const uiColors = require('@tailwindcss/ui/colors');

const primaryColor = {
  ...uiColors.teal,
};

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: primaryColor,
        shades: {
          low: '#f6f5f4',
          mid: '#e7e5e4',
          high: '#eae9e8',
        },
      },
      boxShadow: {
        'outline-primary': `0 0 0 3px ${primaryColor[500]}73`,
      },
      cursor: {
        'col-resize':'col-resize'
      },
      opacity: {
        '5': '0.05',
        '8': '0.08',
        '33': '0.33',
      }
    },
  },
  plugins: [require('@tailwindcss/ui')],
};
