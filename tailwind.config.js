/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1f8',
        paperDeep: '#efeaf5',
        ink: '#241f19',
        inkSoft: '#2b2620',
        accent: {
          DEFAULT: '#1c4a46',
          light: '#3f8a83',
          soft: '#5fa39c',
        },
      },
      fontFamily: {
        serif: ['"Computer Modern Serif"', '"Latin Modern Roman"', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
