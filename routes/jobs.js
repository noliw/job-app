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

module.exports = router;
