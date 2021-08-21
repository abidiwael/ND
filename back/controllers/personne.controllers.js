const Personne = require("../models/Personne");

exports.getAllPersonneData = async (req, res) => {
	try {
		const personnes = await Personne.find();
		res.status(200).send({ msg: "all person data", personnes });
	} catch (error) {
		console.log(error);
		res.status(500).send("imossible to get person data");
	}
};

exports.addPersonne = async (req, res) => {
	try {
		const {
			civilite,
			nom,
			prenom,
			date_naissance,
			situation_familiale,
			nb_enfants,
			email,
			telephone_1,
			telephone_2,
			mobile,
			adress,
			pays,
			ville,
			rue,
			n_rue,
			code_postale,
			complement_adresse,
			mots_cle,
			commentaire,
		} = req.body;

		// tous les champs du formulaire sont obligatoire
		if (
			!civilite ||
			!prenom ||
			!nom ||
			!date_naissance ||
			!situation_familiale ||
			!nb_enfants ||
			!email ||
			!telephone_1 ||
			!telephone_2 ||
			!mobile ||
			!adress ||
			!pays ||
			!ville ||
			!rue ||
			!n_rue ||
			!code_postale ||
			!complement_adresse
		) {
			return res.status(400).send("Please check your informations");
		}
		// email unique
		const findPersonneEmail = await Personne.findOne({ email });
		if (findPersonneEmail) {
			return res.status(400).send({ errors: [{ msg: "email already used" }] });
		}
		// telephone 1 unique
		const findPersonneTel1 = await Personne.findOne({ telephone_1 });
		if (findPersonneTel1) {
			return res
				.status(400)
				.send({ errors: [{ msg: "phone number 1 already used" }] });
		}
		// telephone 2 unique
		const findPersonneTel2 = await Personne.findOne({ telephone_2 });
		if (findPersonneTel2) {
			return res
				.status(400)
				.send({ errors: [{ msg: "phone number 2 already used" }] });
		}
		// mobile unique
		const findPersonneMobile = await Personne.findOne({ mobile });
		if (findPersonneMobile) {
			return res.status(400).send({ errors: [{ msg: "mobile already used" }] });
		}

		//add new personne
		const newPersonne = new Personne({ ...req.body });
		await newPersonne.save(); // save newpersonne data
		res.status(200).send({ msg: "person added", personne: newPersonne });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossibl to add new person ");
	}
};
