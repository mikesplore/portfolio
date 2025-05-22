import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Replace 'portfolio' with your repository name
  server: {
    host: '0.0.0.0',   // Expose to local network
    port: 5173,        // Optional: choose your port
  },
  plugins: [react()],
})
