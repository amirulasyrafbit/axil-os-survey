import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f8f2',
          100: '#c3eddf',
          200: '#9ae2cb',
          300: '#6ed7b6',
          400: '#4dcda6',
          500: '#1D9E75',
          600: '#178f68',
          700: '#117d5a',
          800: '#0b6b4c',
          900: '#054f38',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
