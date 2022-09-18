import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions:['.js','.vue'],
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  plugins: [vue()]
})
