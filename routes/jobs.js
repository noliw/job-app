var express = require("express");
var router = express.Router();
const jobsCtrl = require("../controllers/jobs");

// GET /jobs index
router.get("/", jobsCtrl.index);

// Get /jobs/new 
router.get('/new', jobsCtrl.new);

module.exports = router;
