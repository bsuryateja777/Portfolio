/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#FCF4FF',
        darkHover: '#2a2d3e',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
      },
      backgroundImage: {
        'header-bg': "url('/src/Assets/images/header_bg.png')",
        'project-bg': "url('/src/Assets/images/project_bg.jpg')",
        'contact-bg': "url('/src/Assets/images/paul-lichtblau-fX-qWsXl5x8-unsplash.jpg')",
      },
    },
  },
  plugins: [],
}

