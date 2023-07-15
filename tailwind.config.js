/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'main': {
          50: '#f3f8ed',
          100: '#e3efd8',
          200: '#c9e0b6',
          300: '#a8cc8a',
          400: '#88b665',
          500: '#6b9b47',
          600: '#517a36',
          700: '#405e2d',
          800: '#364d28',
          900: '#304225',
          950: '#172310',
      },'dove': {
        '50': '#f7f7f7',
    '100': '#e3e3e3',
    '200': '#c8c8c8',
    '300': '#a4a4a4',
    '400': '#818181',
    '500': '#666666',
    '600': '#515151',
    '700': '#434343',
    '800': '#383838',
    '900': '#313131',
    '950': '#000000',
    },
    
        
      },

    },
    
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
