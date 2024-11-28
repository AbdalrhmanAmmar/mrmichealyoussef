import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2C7A7B',
          DEFAULT: '#2C7A7B',
          dark: '#4FD1C5'
        },
        secondary: {
          light: '#FF6F61',
          DEFAULT: '#FF6F61',
          dark: '#F56565'
        },
        background: {
          light: '#F0F8FF',
          DEFAULT: '#F0F8FF',
          dark: '#1A202C'
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#2D3748'
        }
      }
    },
  },
  plugins: [],
};
export default config;