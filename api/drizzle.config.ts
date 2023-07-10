// drizzle.config.ts
import 'dotenv/config';
import type { Config } from "drizzle-kit";
import { integer } from 'drizzle-orm/sqlite-core';
 
export default{
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
  user: process.env.PGUSER,
  password: process.env.DATABASE_PASSWORD,
  host: 'localhost',
  port: 5432,
  database: "recipes",
  ssl: false
  }
} satisfies Config;