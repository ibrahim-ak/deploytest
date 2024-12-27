import { defineConfig } from 'vite'
import {fileURLToPath} from "url"
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"/deploytest/",
  server:{port:3000},
  resolve:{
    alias:{
      // keep adding other paths as needed

      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components" :path.resolve(__dirname,"src/components")
    }
  }
})
