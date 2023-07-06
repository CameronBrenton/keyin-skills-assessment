import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
	database: 'postgres',
	user: 'Agent007',
	password: 'Pa$$w0rd',
	port: 5432,
	ssl: false,
	max: 20, // set pool max size to 20
	idleTimeoutMillis: 1000, // close idle clients after 1 second
  	connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  	maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

const db = pool;

export default db;