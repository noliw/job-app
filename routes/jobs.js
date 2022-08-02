var express = require("express");
var router = express.Router();
const jobsCtrl = require("../controllers/jobs");
const isLoggedIn = require("../config/auth");

// GET /jobs index
router.get("/", jobsCtrl.index);
// Get /jobs/new
router.get("/new", isLoggedIn, jobsCtrl.new);
//  GET /jobs/:id show
router.get("/:id", jobsCtrl.show);
router.get("/:id/edit", jobsCtrl.edit);
router.put("/:id", jobsCtrl.update);
router.post("/", isLoggedIn, jobsCtrl.create);
router.delete("/:id", isLoggedIn, jobsCtrl.delete);

module.exports = router;
