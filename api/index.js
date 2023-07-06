const express = require("express");

require("dotenv").config();
const app = express();

app.listen(process.env.PORT, (err) => {
	console.log('Hello World')
	console.log(process.env.PORT)
})
