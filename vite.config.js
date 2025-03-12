import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Ensures correct path resolution
  publicDir: 'public',  // Ensures Vite uses the `public/` folder
  build: {
    outDir: 'dist',
  },
});
