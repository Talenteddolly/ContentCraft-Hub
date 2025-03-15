import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ContentCraft-Hub/',  // ✅ This is what you need for GitHub Pages!
  plugins: [react()],
})
