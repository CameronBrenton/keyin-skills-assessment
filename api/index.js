const express = require("express");

require("dotenv").config();
const app = express();

app.get('/helloworld', (req, res) => {
	res.json('Hello World!');
})

app.listen(process.env.PORT, (err) => {
	console.log(`The server is running on http://localhost:${process.env.PORT}`)
})
