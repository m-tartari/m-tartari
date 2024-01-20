import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  }
})
