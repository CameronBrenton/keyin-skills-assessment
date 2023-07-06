import express from 'express';
import dotenv from 'dotenv';
import db from './db/db.js';

dotenv.config()
const app = express();

db.connect();

app.get('/helloworld', (req, res) => {
	res.json('Hello World!');
})

app.listen(process.env.PORT, (err) => {
	console.log(`The server is running on http://localhost:${process.env.PORT}`)
})
