/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on a class
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: { 'primary': { DEFAULT: '#EE7003', 50: '#FED1AB', 100: '#FEC697', 200: '#FDB16E', 300: '#FD9B46', 400: '#FC851E', 500: '#EE7003', 600: '#B75602', 700: '#7F3C02', 800: '#482201', 900: '#100800', 950: '#000000' }, 
    'secondary': {  DEFAULT: '#DBDBDB',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#EFEFEF',  500: '#DBDBDB',  600: '#BFBFBF',  700: '#A3A3A3',  800: '#878787',  900: '#6B6B6B',  950: '#5D5D5D'},
  'tertiary': {  DEFAULT: '#818178',  50: '#DADAD7',  100: '#D0D0CD',  200: '#BDBDB8',  300: '#A9A9A3',  400: '#95958D',  500: '#818178',  600: '#64645D',  700: '#474742',  800: '#2A2A27',  900: '#0D0D0C',  950: '#000000'},
},
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],

}

