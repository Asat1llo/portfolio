/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spinn-slow': 'spinn 5s linear infinite',
        'floatt': 'float 3s ease-in-out infinite',
        'floatUp':'1s ease-out forwards', 
      },
      keyframes: {
        spinn: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }, 
        },
        float: { 
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatUp:{
          '0%': {
            transform: 'translateY(50px) scale(0.95)',
            opacity: 0
          },
          '100%':{
            transform: 'translateY(0) scale(1)',
            opacity: 1
          }
        }
      },
    },
  },
  plugins: [],
}
