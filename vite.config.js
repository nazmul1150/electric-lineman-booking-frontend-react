// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../electric-lineman/build'),
    emptyOutDir: true,
    rollupOptions: {
      input: '/src/main.jsx',
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'style.css'
      }
    }
  }
});

