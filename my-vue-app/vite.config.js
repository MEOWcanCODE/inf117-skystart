import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve('./src/main.js'),
      },
      output: {
        dir: '../backend/static/vue/',
        entryFileNames: '[name].js',
      },
    },
  },
})
