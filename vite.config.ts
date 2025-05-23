import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    conditions: ['mui-modern', 'module'],
    alias: {
      components: '/src/components',
      style: '/src/style',
    },
  },
  server: {
    open: true,
    host: true,
  },
})
