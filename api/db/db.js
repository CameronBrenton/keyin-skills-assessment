import { Pool } from 'pg';

const pool = new Pool({
	database: 'postgres',
	user: 'Agent007',
	password: 'Pa$$w0rd',
	port: 5432,
	ssl: true,
	max: 20, // set pool max size to 20
	idleTimeoutMillis: 1000, // close idle clients after 1 second
  	connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  	maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

export default pool;