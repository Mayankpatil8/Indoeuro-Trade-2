import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: 'localhost',
      port: 5173,
    },
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Source maps for debugging (disable in production if needed)
      sourcemap: false,
      // Chunk size warning limit
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Manual code splitting for better caching
          manualChunks: {
            // React core
            'react-vendor': ['react', 'react-dom'],
            // Router
            'router': ['react-router-dom'],
            // Animation library
            'framer': ['framer-motion'],
            // Icons
            'icons': ['lucide-react'],
          },
        },
      },
    },
  };
});