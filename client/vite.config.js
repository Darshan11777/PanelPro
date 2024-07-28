import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
// import { createVuePlugin } from 'vite-plugin-vue2';

// export default defineConfig({
//   plugins: [
//     createVuePlugin(),
//   ],
//   css: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//         react(),
//       ],
//     },
//   },
// });