import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/mockServiceWorker.js': '/node_modules/msw/lib/mockServiceWorker.js',
    },
  },
});
