import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { recipes } from "./db/schema";

import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { eq, sql } from "drizzle-orm";
import postgres from "postgres";

const client = postgres();
const db: PostgresJsDatabase = drizzle(client);

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/hello-world", (req, res) => {
  res.json("Hello World!");
});

app.get("/get-all-recipes", async (req, res) => {
  try {
    const allRecipes = await db.select().from(recipes);
    if (allRecipes) {
      res.status(200).json(allRecipes);
    } else {
      res.status(404).json({ message: "Recipes not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching the recipes!" });
  }
});

app.get("/get-random-recipe", async (req, res) => {
	try {
		const recipeIdsArray = await db.select().from(recipes);
		const recipeIds = recipeIdsArray.map((row) => row.id);
		const randomIndex = Math.floor(Math.random() * recipeIdsArray.length);
		const randomRecipeId = recipeIds[randomIndex % recipeIds.length];
	  const recipe = await db
		.select()
		.from(recipes)
		.where(sql`${recipes.id} = ${randomRecipeId}`);
	  if (recipe) {
		res.status(200).json(recipe);
	  } else {
		res.status(404).json({ message: "Recipe not found!" });
	  }
	} catch (error) {
	  console.log(error);
	  res.status(500).json({ message: "Error fetching recipe!" });
	}
  });

app.get("/recipes/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const recipe = await db
      .select()
      .from(recipes)
      .where(eq(recipes.title, String(title)));
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the recipe!" });
  }
});

app.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await db
      .select()
      .from(recipes)
      .where(eq(recipes.id, Number(id)));
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching recipe!" });
  }
});

app.get("/get-all-recipe-ids", async (req, res) => {
	try {
		const queryResult = await db.select().from(recipes);
    	const recipeIds = queryResult.map((row) => row.id);
		res.status(200).json(recipeIds);
		return recipeIds
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error fetching recipe IDs!" });
	}
});

app.post("/post-recipe", async (req, res) => {
  const { title, ingredients, instructions, times, image } = req.body;
  try {
    console.log("Inserting...!");
    await db.insert(recipes).values({
      title: title,
      ingredients: ingredients,
      instructions: instructions,
      times: times,
      image: image,
    });
    console.log("Insert successful!");
    res.status(200).json({ message: "Recipe inserted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inserting recipe" });
  }
});

app.listen(process.env.PORT, (err) => {
  console.log(`The server is running on http://localhost:${process.env.PORT}`);
});
