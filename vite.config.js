import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ important: base must match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/personal_website/'
})