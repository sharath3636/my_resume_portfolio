import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    port: 5174,
    host: true,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});