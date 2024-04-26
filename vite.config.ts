import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@com': '/src/components',
    },
  },
});
