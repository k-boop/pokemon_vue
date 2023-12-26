import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgicon from 'vite-plugin-svgicon';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgicon({
      include: ['**/assets/**/*.svg']
    }),
    vue()
  ],
})
