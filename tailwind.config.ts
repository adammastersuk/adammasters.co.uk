import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#475569',
        rail: '#0F3D2E',
        sectionTint: '#F7F6F2'
      },
      spacing: {
        'section-y': '3.75rem',
        'section-y-lg': '5rem'
      }
    }
  },
  plugins: []
};

export default config;
