/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slate: '#1e293b',
        accent: '#0f766e',
        sun: '#f59e0b',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(15, 118, 110, 0.18)',
      },
    },
  },
  plugins: [],
};