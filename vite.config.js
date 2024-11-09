import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // prerender({
    //   routes: ["/", "/videos", "/videos/watch/"],
    //   renderer: "@prerenderer/renderer-puppeteer",
    //   server: {
    //     host: 'localhost',
    //     listenHost: 'localhost',
    //   },
    //   rendererOptions: {
    //     maxConcurrentRoutes: 1,
    //     renderAfterTime: 500,
    //   },
    //   postProcess(renderedRoute) {
    //     renderedRoute.html = renderedRoute.html
    //       .replace(/http:/i, "https:")
    //       .replace(
    //         /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
    //         "https://tubular-cat-f2a272.netlify.app"
    //       );
    //   },
    // })
  ],
  base: "/",
})