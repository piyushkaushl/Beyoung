module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // other plugins here
  ],
}
