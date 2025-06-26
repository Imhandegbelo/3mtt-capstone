import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() =>{
  return {
    plugins: [react()],
    define:{
      __apiKey__: process.env.VITE_API_KEY
    }
  }
})
