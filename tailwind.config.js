/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
      },
      backgroundImage: {
        'header-bg': "url('/src/Assets/header_bg.png')",
        'project-bg': "url('/src/Assets/project_bg.jpg')",
      },
    },
  },
  plugins: [],
}

