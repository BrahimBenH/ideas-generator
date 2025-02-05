import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output goes to 'dist' directory
  },
  server: {
    port: 80,
    host: true, // Allows access from other devices in the network
  },
})
