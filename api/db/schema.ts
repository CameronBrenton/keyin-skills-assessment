import { sql } from "drizzle-orm";
import { pgTable, serial, text, json, integer, timestamp } from "drizzle-orm/pg-core";

export const recipes = pgTable('recipes', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    ingredients: text('ingredients').notNull(),
	instructions: json('instructions').notNull(),
	times: text('times').notNull(),
	image: text('image').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})
