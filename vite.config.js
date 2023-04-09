import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePluginPages } from 'vite-plugin-pages';

export default {
  plugins: [
    react(),
    reactRefresh(),
    VitePluginPages({ pagesDir: 'src/pages' }),
    VitePlugin404Page({ path: '/404.html' }),
  ],
  base: '/movieapp/',
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['axios'],
  },
};
