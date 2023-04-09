import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: '/movieapp/',
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['axios'],
  },
  plugins: [reactRefresh(), VitePluginPages({ pagesDir: 'src/pages' }), VitePlugin404Page({ path: '/404.html' })],
};