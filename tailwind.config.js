// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,css,scss,sass,less,styl,vue}',
    'node_modules/preline/dist/*.js'
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}