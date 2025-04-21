import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import postcssTailwind from '@tailwindcss/postcss'
import autoprefixer   from 'autoprefixer'

export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    postcss: {
      plugins: [
        postcssTailwind(),
        autoprefixer()
      ]
    }
  }
})