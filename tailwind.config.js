/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#ffcd56',
        'gray-100': '#d9d9d9',
        'gray-400': '#272727',
        'gray-600': '#1d1d1d',
      },
      animation: {
        'slide-up': 'slide-up 0.2s ease-out',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
