import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        averta: ['AvertaStd', 'sans-serif'],
      },
      colors: {
        orange: {
          DEFAULT: '#f97316',
        },
      },
    },
  },
  plugins: [],
};

export default config;
