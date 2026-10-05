import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        drift: '#111827',
        sand: '#f5f1eb',
        accent: '#7c3aed',
        ember: '#f97316',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
