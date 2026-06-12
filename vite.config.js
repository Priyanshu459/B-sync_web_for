import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-cf-functions',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/latest-android-release') {
            try {
              const response = await fetch("https://api.github.com/repos/Priyanshu459/B-sync_for_android/releases", {
                headers: { "User-Agent": "Bodhi-Sync-Website" }
              });
              const data = await response.json();
              const releaseWithAssets = data.find(r => r.assets && r.assets.length > 0);
              res.setHeader('Content-Type', 'application/json');
              if (releaseWithAssets) {
                res.end(JSON.stringify(releaseWithAssets));
              } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: "No releases with assets found" }));
              }
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }
          if (req.url === '/api/latest-release') {
            try {
              const response = await fetch("https://api.github.com/repos/Priyanshu459/B-sync-Bodhi-Sync-/releases", {
                headers: { "User-Agent": "Bodhi-Sync-Website" }
              });
              const data = await response.json();
              const releaseWithAssets = data.find(r => r.assets && r.assets.length > 0);
              res.setHeader('Content-Type', 'application/json');
              if (releaseWithAssets) {
                res.end(JSON.stringify(releaseWithAssets));
              } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: "No releases with assets found" }));
              }
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }
          next();
        });
      }
    }
  ],
})
