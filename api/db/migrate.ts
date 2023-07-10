import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
 
const client = postgres();
const db: PostgresJsDatabase = drizzle(client);

const main = async () => {
	console.log('migrating...')
	try {
		await migrate(db, { migrationsFolder: "drizzle" });	
	} catch (error) {
		console.log(error)	
	}
	console.log('migration complete!')
}

main();