/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B1020',
          secondary: '#111827',
          card: '#0F172A',
          glass: 'rgba(15,23,42,0.7)',
        },
        accent: {
          blue: '#00BFFF',
          gold: '#FFD700',
          purple: '#7C3AED',
          pink: '#EC4899',
          green: '#10B981',
          red: '#EF4444',
        },
        neon: {
          blue: '#00D4FF',
          gold: '#FFD700',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1020 0%, #1a0533 50%, #0B1020 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,191,255,0.1), rgba(124,58,237,0.1))',
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFA500)',
        'blue-gradient': 'linear-gradient(135deg, #00BFFF, #0080FF)',
        'purple-gradient': 'linear-gradient(135deg, #7C3AED, #4F46E5)',
        'team-gradient': 'linear-gradient(135deg, rgba(0,191,255,0.2), rgba(124,58,237,0.2))',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'bounce-light': 'bounceLight 2s infinite',
        'radar': 'radar 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00BFFF, 0 0 10px #00BFFF' },
          '50%': { boxShadow: '0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #00BFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          from: { transform: 'translateX(30px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        radar: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,191,255,0.5)',
        'neon-gold': '0 0 20px rgba(255,215,0,0.5)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.5)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
