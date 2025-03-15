import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ContentCraft-Hub/',  // 👈 Your GitHub repo name
  build: {
    outDir: 'docs',            // 👈 Output folder
  },
  plugins: [react()],
})
