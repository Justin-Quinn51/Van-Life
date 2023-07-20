/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#FF8c38',
        darkGray: '#252525',
        lightGray: '#AAAAAA',
        lightestGray: '#4D4D4D;',
        veryDarkGray: '#161616',
        offWhite: ' #FFF7ED',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-img': "url('/image 54.svg')",
        'bg-gradient':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)) ',
      },
    },
  },
  plugins: [],
};
