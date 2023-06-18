/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    options: {
      safelist: [
        'dark-mode-color', 
        'light-mode-color',
        'border-dark-mode-color',
        'border-light-mode-color',
        'text-dark-mode-color',
        'text-light-mode-color'
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        'dark-mode-color': 'rgb(163,163,163)',
        'light-mode-color': 'rgb(13,13,13)'
      },
      spacing: {
        '30': '30px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'capture-waves': ['Capture The Waves', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'extra-light': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700
      },
    },
  },
  plugins: [],
};


