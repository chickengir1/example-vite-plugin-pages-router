import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createFileRouterPlugin from "vite-plugin-pages-router/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createFileRouterPlugin({
      pagesDir: "src/pages",
      notFoundPage: "src/pages/NotFound.tsx",
    }),
  ],
});
