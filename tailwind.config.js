const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        'content': 'calc(100vh - theme("height.16") - theme("height.12"))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
