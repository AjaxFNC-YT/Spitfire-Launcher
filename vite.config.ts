import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path'

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  plugins: [sveltekit(), tailwindcss()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: 'ws',
        host,
        port: 1421
      }
      : undefined,
    watch: {
      ignored: ['**/src-tauri/**']
    },
    fs: {
      allow: ['./package.json']
    }
  },
  resolve: {
    alias: {
      events: path.resolve(__dirname, 'node_modules/eventemitter3')
    }
  }
}));
