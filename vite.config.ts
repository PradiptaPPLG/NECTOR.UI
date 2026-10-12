import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import path from 'node:path'
import fs from 'node:fs'

function serveTemplatesPlugin(): Plugin {
  return {
    name: 'serve-templates',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/templates/')) {
          const cleanUrl = req.url.split('?')[0]
          // Prefer root ./templates, fallback to ./public/templates
          const rootPath = path.resolve(__dirname, '.' + cleanUrl)
          const publicPath = path.resolve(__dirname, './public' + cleanUrl)
          const target = fs.existsSync(rootPath) ? rootPath : (fs.existsSync(publicPath) ? publicPath : null)
          
          if (target && fs.statSync(target).isFile()) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            return fs.createReadStream(target).pipe(res)
          }
        }
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveTemplatesPlugin()],
})

