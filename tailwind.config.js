/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sizes:{
      },
      colors:{
        Red:"hsl(7, 99%, 70%)",
        Yellow:"hsl(51, 100%, 49%)",
        GreenDark:"hsl(167, 40%, 24%)",
        Blue:"hsl(198, 62%, 26%)",
        Green:"hsl(167, 34%, 41%)"
      },
      backgroundImage:{
        'hero-mobile':"url('/public/mobile/image-header.jpg')",
        'hero-desktop':"url('./public/desktop/image-header.jpg')",
        'graphics-mobile':"url('./public/mobile/image-graphic-design.jpg')",
        'graphics-desktop': "url('./public/desktop/image-graphic-design.jpg')",
        'photography-mobile':"url('./public/mobile/image-photography.jpg')",
        'photography-desktop':"url('./public/desktop/image-photography.jpg')"
      }

    },
   
  },
  plugins: [],
}