const express = require("express");
const {
	getAllPersonneData,
	addPersonne,
	editPersonData,
	deletePerson,
} = require("../controllers/personne.controllers");

const router = express.Router();

router.get("/", getAllPersonneData);
router.post("/", addPersonne);
router.put("/:Id", editPersonData);
router.delete("/:Id", deletePerson);

// default export
module.exports = router;
