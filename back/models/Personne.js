const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const personneSchema = new Schema(
	{
		civilite: { type: String, required: true },
		nom: { type: String, required: true },
		prenom: { type: String, required: true },
		date_naissance: {type: Date , required: true },
		situation_familiale: { type: String, required: true },
		nb_enfants: { type: Number, required: true },
		email: { type: String, required: true },
		telephone_1: { type: Number, required: true },
		telephone_2: { type: Number, required: true },
		mobile: { type: Number, required: true },
		adress: { type: String, required: true },
		pays: { type: String, required: true },
		ville: { type: String, required: true },
		rue: { type: String, required: true },
		n_rue: { type: Number, required: true },
		code_postale: { type: Number, required: true },
		complement_adresse: { type: String, required: true },
		mots_cle: { type: String },
		commmentaire: { type: String },
	},
	{ timestamps: true }
);

// default export
module.exports = Personne = model("personne", personneSchema);
