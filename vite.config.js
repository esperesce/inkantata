import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Custom plugin to copy docs bundle to root and create .nojekyll for GitHub Pages
const copyToRootPlugin = () => ({
  name: 'copy-to-root',
  closeBundle() {
    try {
      const docsDir = path.resolve(__dirname, 'docs')
      const rootDir = path.resolve(__dirname)

      // Create .nojekyll file to prevent GitHub Pages Jekyll filter
      fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')
      fs.writeFileSync(path.join(rootDir, '.nojekyll'), '')

      // Copy docs/index.html to root index.html
      const docsIndex = fs.readFileSync(path.join(docsDir, 'index.html'), 'utf-8')
      fs.writeFileSync(path.join(rootDir, 'index.html'), docsIndex)

      // Copy docs/assets to root assets
      const docsAssets = path.join(docsDir, 'assets')
      const rootAssets = path.join(rootDir, 'assets')
      if (fs.existsSync(docsAssets)) {
        if (!fs.existsSync(rootAssets)) {
          fs.mkdirSync(rootAssets, { recursive: true })
        }
        fs.cpSync(docsAssets, rootAssets, { recursive: true })
      }
      console.log('Successfully synced compiled assets to root and docs for 100% GitHub Pages compatibility!')
    } catch (err) {
      console.error('Error copying assets:', err)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyToRootPlugin()],
  base: './', // Relative path so assets load on any URL or local file
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
})
