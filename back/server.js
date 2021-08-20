//clear console
console.clear();
//import express
const express = require("express");
const connectDB = require("./config/connectDB");

// instance app
const app = express();

// dotenv
require("dotenv").config();
//conncet with database
connectDB();

//use router
// app.use(express.json());
app.use("/api/personne", require("./router/personne"));

//port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
