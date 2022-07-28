var express = require("express");
var router = express.Router();
const notesCtrl = require("../controllers/notes");

router.post("/:id/notes", notesCtrl.create);
router.get("/notes/:id/edit", notesCtrl.edit);
router.put("/notes/:id", notesCtrl.update);
router.delete("/notes/:id", notesCtrl.delete);

module.exports = router;
