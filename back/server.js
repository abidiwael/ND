//clear console
console.clear();
//import express
const express = require("express");
const connectDB = require("./config/connectDB");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const swaggerDocument2 = YAML.load("./swag.yaml");

// instance app
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api-docs2", swaggerUi.serve, swaggerUi.setup(swaggerDocument2));

// dotenv
require("dotenv").config();
//conncet with database
connectDB();

//use router
// app.use(express.json());
app.use(express.json());
app.use("/api/personne", require("./router/personne"));

//port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
