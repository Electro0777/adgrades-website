/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // AdGrades Brand Colors
        background: 'rgb(11 17 32)', // Deep slate
        foreground: 'rgb(241 245 249)', // Light text
        card: 'rgb(15 23 42)', // Slightly lighter slate
        'card-foreground': 'rgb(241 245 249)',
        primary: {
          DEFAULT: '#00B5FF', // Cyan
          foreground: 'rgb(11 17 32)',
        },
        secondary: {
          DEFAULT: '#01F9C6', // Teal
          foreground: 'rgb(11 17 32)',
        },
        accent: {
          DEFAULT: '#00B5FF',
          foreground: 'rgb(11 17 32)',
        },
        muted: {
          DEFAULT: 'rgb(30 41 59)',
          foreground: 'rgb(148 163 184)',
        },
        border: 'rgb(30 41 59)',
        input: 'rgb(30 41 59)',
        ring: '#00B5FF',
        success: '#01F9C6',
        warning: '#F59E0B',
        error: '#EF4444',
        // Brand specific colors
        'cyan-brand': '#00B5FF',
        'teal-brand': '#01F9C6',
        'slate-dark': '#0B1120',
        'slate-darker': '#0F172A',
        'text-light': '#F1F5F9',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00B5FF 0%, #01F9C6 100%)',
        'slate-gradient': 'linear-gradient(to right, #0B1120, #0F172A)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};