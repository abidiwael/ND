const express = require("express");
const {
	getAllPersonneData,
	addPersonne,
} = require("../controllers/personne.controllers");

const router = express.Router();

router.get("/", getAllPersonneData);
router.post("/add", addPersonne);

// default export
module.exports = router;
