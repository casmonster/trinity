// server/db.ts
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";
import dotenv from "dotenv";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../shared/schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from project root if present
const rootEnvPath = resolve(__dirname, "../.env");
if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
  if (process.env.NODE_ENV !== "production") {
    console.log("Loaded environment variables from .env");
  }
} else if (process.env.NODE_ENV !== "production") {
  console.log(".env not found, using system environment variables");
}


neonConfig.webSocketConstructor = ws;

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is missing. Set it in Railway/Vercel or provide a local .env file."
  );
}

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle({ client: pool, schema });
