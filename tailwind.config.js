/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#0b0d12',
        paperDeep: '#12151c',
        ink: '#f3f4f6',
        inkSoft: '#e7e8ea',
        accent: {
          DEFAULT: '#7c5cff',
          light: '#a68bff',
          soft: '#5eead4',
        },
      },
      fontFamily: {
        serif: ['"Space Grotesk"', '-apple-system', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
