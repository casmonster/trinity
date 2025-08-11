// server/vite.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: express.Express) {
  if (process.env.NODE_ENV !== "production") {
    // ✅ DEV mode - use Vite's dev server middleware
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: true },
      root: path.resolve(__dirname, "../client"),
    });
    app.use(vite.middlewares);
  } else {
    // ✅ PROD mode - serve built static files
    const clientDist = path.resolve(__dirname, "../client/dist");
    app.use(express.static(clientDist));

    // Handle SPA routes
    app.get("*", (_req, res) => {
      res.sendFile(path.join(clientDist, "index.html"));
    });
  }
}
