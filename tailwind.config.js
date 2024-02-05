/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1380px',
      },
    },
    extend: {
      colors: {
        primary: '#00FFFF',
        secondary: '#FF00FF',
        accent: '#FFFF00',
        accent1: '#FF7F50',
        light: '#FFFFF0',
        dark: '#111',
      },
      fontSize: {
        h1: '2.125rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1.125rem',
        h6: '1rem',
        lead: '1.25rem',
        body: '1rem',
        small: '0.875rem',
      },
      lineHeight: {
        h1: '1',
        h2: '1.067',
        h3: '1.083',
        h4: '1.1',
        h5: '1.111',
        h6: '1.125',
        lead: '1.5',
        body: '1.5',
        small: '1.143',
      },
      letterSpacing: {
        h1: '-0.0625rem',
        h2: '-0.05rem',
        h3: '-0.0375rem',
        h4: '-0.025rem',
        h5: '-0.0125rem',
        h6: '-0.00625rem',
        lead: '-0.015625rem',
        body: '-0.00625rem',
        small: '-0.00625rem',
      },
    },
  },
  plugins: [],
};
