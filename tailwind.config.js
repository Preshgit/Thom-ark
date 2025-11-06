/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#0b1026', // 🌙 Deep navy blue-black background
        },
        foreground: {
          light: '#181818',
          dark: '#E6E9F0', // soft off-white for contrast
        },
        primary: {
          DEFAULT: '#D91D1D',
          hover: '#B91818',
        },
        secondary: {
          DEFAULT: '#0048B4',
          light: 'rgba(0, 72, 180, 0.1)',
        },
        border: {
          light: 'rgba(0, 0, 0, 0.1)',
          dark: 'rgba(230, 233, 240, 0.1)',
        },
        'thom-black': '#00122E',
        'thom-blue': '#0048b4',
        'black-40': 'rgba(0, 0, 0, 0.4)',
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        crimson: '#d91d1d',
        black: '#000',
        // Optional: a custom dark navy color for reuse
        'dark-navy': '#0b1026',
      },
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['67px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['54px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-xl': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-lg': ['33px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-md': ['24px', { lineHeight: '1.3' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body-md': ['18px', { lineHeight: '1.6' }],
        'body-sm': ['16px', { lineHeight: '1.5' }],
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
        container: '1440px',
      },
      borderRadius: {
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
