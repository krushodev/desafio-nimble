import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ng: {
          purple: '#6331a2',
          'purple-hover': '#7a3ec4',
          'purple-dark': '#1a0a2e',
          'purple-card': '#231040',
          'purple-border': '#3d1f6b',
          light: '#ffffff',
          'light-bg': '#f8f6fc',
          'light-card': '#ffffff',
          'light-border': '#e8e0f0'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()]
};
