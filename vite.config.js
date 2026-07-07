import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        birth: resolve(__dirname, 'birth-doula-toronto.html'),
        postpartum: resolve(__dirname, 'postpartum-doula-toronto.html'),
        education: resolve(__dirname, 'prenatal-education-toronto.html'),
        nursery: resolve(__dirname, 'nursery-organization-toronto.html'),
      },
    },
  },
})
