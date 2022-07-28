var express = require("express");
var router = express.Router();
const notesCtrl = require("../controllers/notes");

router.post("/jobs/:id/notes", notesCtrl.create);

router.delete("/notes/:id", notesCtrl.delete);

module.exports = router;