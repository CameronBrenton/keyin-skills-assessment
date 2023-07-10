// import { drizzle } from "drizzle-orm/node-postgres";
// import pkg from 'pg';
// const { Client } = pkg;

// const client = new Client({
// 	database: 'Recipes',
// 	user: 'Agent007',
// 	password: 'Pa$$w0rd',
// 	port: 5432,
// 	ssl: false,
// 	max: 20, // set pool max size to 20
// 	idleTimeoutMillis: 1000, // close idle clients after 1 second
//   	connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
//   	maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
// });

// await client.connect();
// const db = drizzle(client);

// export default db;



// import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
// import postgres from 'postgres';
// import { recipes } from './schema';

// export default function db(){




// const client = postgres();
// const db: PostgresJsDatabase = drizzle(client);


// const main = async () => {
// 	console.log('running...')
// 	const allRecipes = await db.select().from(recipes);
// 	console.log(allRecipes);
// }

// main();
// }



