import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  host: '0.0.0.0',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: '0.0.0.0',
  }
})
