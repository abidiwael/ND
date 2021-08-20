//clear console
console.clear();
//import express
const express = require("express");
const connectDB = require("./config/connectDB");

// dotenv
require("dotenv").config();

//conncet with database
connectDB();

// instance app
const app = express();
//port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
