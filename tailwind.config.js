/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf7f1',
        paperDeep: '#f1ece1',
        ink: '#26211b',
        inkSoft: '#332c23',
        accent: {
          DEFAULT: '#1c4a46',
          light: '#3f8a83',
          soft: '#5fa39c',
        },
        clay: {
          DEFAULT: '#b6602f',
          light: '#d68a5c',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Iowan Old Style"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
