/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          hover: '#4338CA', // indigo-700
          light: '#E0E7FF', // indigo-100
          100: '#E0E7FF', // indigo-100
          200: '#C7D2FE', // indigo-200
          300: '#A5B4FC', // indigo-300
          400: '#818CF8', // indigo-400
          500: '#6366F1', // indigo-500
          600: '#4F46E5', // indigo-600
          700: '#4338CA', // indigo-700
          800: '#3730A3', // indigo-800
          900: '#312E81', // indigo-900
        },
        
        // Neutral colors
        background: '#FFFFFF', // white
        surface: '#F9FAFB', // gray-50
        border: '#E5E7EB', // gray-200
        text: {
          primary: '#111827', // gray-900
          secondary: '#4B5563', // gray-600
          tertiary: '#9CA3AF', // gray-400
        },
        
        // Semantic colors
        success: '#059669', // emerald-600
        warning: '#F59E0B', // amber-500
        error: '#E11D48', // rose-600
        info: '#0EA5E9', // sky-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111827', // text-primary
            a: {
              color: '#4F46E5', // primary
              '&:hover': {
                color: '#4338CA', // primary-hover
              },
            },
            h1: {
              color: '#111827', // text-primary
              fontWeight: '700',
            },
            h2: {
              color: '#111827', // text-primary
              fontWeight: '600',
            },
            h3: {
              color: '#111827', // text-primary
              fontWeight: '600',
            },
            h4: {
              color: '#111827', // text-primary
              fontWeight: '600',
            },
            code: {
              color: '#111827', // text-primary
              fontFamily: 'JetBrains Mono, monospace',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}