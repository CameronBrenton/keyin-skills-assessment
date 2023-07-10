import { sql } from 'drizzle-orm';
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from 'postgres';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { recipes } from './schema'

const client = postgres();
const db: PostgresJsDatabase = drizzle(client);

const recipesFilePath = path.join(__dirname, '../../data/recipes.json');

export function readRecipesFromJsonFile(){
	return new Promise((resolve, reject) => {
		fs.readFile(recipesFilePath, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				try {
					const recipes = JSON.parse(data);
					resolve(recipes);
				} catch (error) {
					reject(error);
				}
			}
		});
	});
}

async function insertRecipesFromJsonFile() {
	try {
	  const recipeArray = await readRecipesFromJsonFile() as any[];
  
	  for (const recipe of recipeArray) {
		const { title, ingredients, instructions, times, image } = recipe;
  
		try {
		  await axios.post('http://localhost:4000/post-recipe', {
			title,
			ingredients,
			instructions,
			times,
			image
		  });
		  console.log(`Recipe '${title}' inserted successfully!`);
		} catch (error) {
		  console.error(`Error inserting recipe '${title}':`, error);
		}
	  }
	} catch (error) {
	  console.error('Error reading recipes from JSON file:', error);
	}
  }

insertRecipesFromJsonFile();