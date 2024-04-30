import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from "url";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      //Two methods of available
      //First: using FireURLtoPath
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      //First: using path
      "@components": resolve(__dirname, "src/components"),
    }
  }
})
