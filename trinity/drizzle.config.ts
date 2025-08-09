import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import path from "path";

// Load the backend .env file manually
dotenv.config({ path: path.resolve(__dirname, "server/.env") });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Make sure server/.env has it.");
}

export default defineConfig({
  out: "./server/migrations", // keep migrations inside server
  schema: "./shared/schema.ts", // shared schema path
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
