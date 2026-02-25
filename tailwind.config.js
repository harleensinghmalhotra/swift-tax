/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        forest: '#003512', // Deep dark green bg
        vivid: '#1DAF5A',  // Professional accent green
        'vivid-hover': '#168a48',
        cream: '#F6F4E9',
        ink: '#000000',
        'ink-soft': '#262626',
        muted: '#6E6E6E',
        parchment: '#F0EDD8',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.12)',
        'lifted': '0 12px 40px rgba(0,0,0,0.16)',
        'btn': '0 4px 14px rgba(56,126,91,0.30)',
        'hdr': '0 2px 16px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};
