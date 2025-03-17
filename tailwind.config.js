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
        'float': 'float 3s ease-in-out infinite', // ✅ TO‘G‘RI YOZILDI
      },
      keyframes: {
        spinn: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }, 
        },
        float: { // ✅ BU YERDA {} ICHIDA OBYEKTLAR BO‘LISHI KERAK
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
