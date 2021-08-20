const express = require("express");
const { getAllPersonneData } = require("../controllers/personne.controllers");

const router = express.Router();

router.get("/test", getAllPersonneData);

// default export
module.exports = router;
