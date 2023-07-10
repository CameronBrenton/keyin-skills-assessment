CREATE TABLE IF NOT EXISTS "recipe" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"ingredients" text NOT NULL,
	"instructions" json NOT NULL,
	"times" text NOT NULL,
	"image" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
