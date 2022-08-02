var express = require("express");
var router = express.Router();
const notesCtrl = require("../controllers/notes");
const isLoggedIn = require("../config/auth");

router.post("/jobs/:id/notes", notesCtrl.create);

router.delete("/notes/:id", isLoggedIn, notesCtrl.delete);

module.exports = router;
