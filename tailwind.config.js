import animations from '@midudev/tailwind-animations/src/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
        Bungee: ['Bungee', 'system-ui'],
        Aclonica: ['Aclonica', 'sans-serif'],
        Afacad: ['Afacad Variable', 'sans-serif'],
        Teachers: ['Teachers Variable', 'sans-serif']
      },
    plugins: [animations],
    
  }
  
}
