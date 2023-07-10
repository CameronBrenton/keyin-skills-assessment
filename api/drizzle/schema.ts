import { pgTable, pgEnum, pgSchema, AnyPgColumn, serial, text, json, timestamp } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const recipes = pgTable("recipes", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	ingredients: text("ingredients").notNull(),
	instructions: json("instructions").notNull(),
	times: text("times").notNull(),
	image: text("image").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});