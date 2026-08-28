/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0C',
        ink: '#D7E2EA',
        mist: '#8A93A0',
        line: 'rgba(215,226,234,0.10)',
        'line-hi': 'rgba(215,226,234,0.22)',
        panel: 'rgba(255,255,255,0.03)',
      },
      fontFamily: {
        display: ['Kanit', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Kanit', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

