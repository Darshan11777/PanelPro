/** @type {import('tailwindcss').Config} */
export default {
  // export {
    //  important: '#app',
    // },

    content: [ "./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '830px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      container: {
        center: true,
        
        paddingHorizontal:' 2.4rem',
        
      },
      extend: {},
    },
    plugins: [require('daisyui')],
    // important: '#app',
}

