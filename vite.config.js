import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: '@magiwanders/ash-js',
      fileName: 'ash-js',
    },
  },
})