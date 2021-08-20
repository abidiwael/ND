const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const personneSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

// default export
module.exports = Personne = model("personne", personneSchema);
