/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        // 'tablet': '768px',
  
        'md': '992px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1320px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
