const Job = require("../models/job");

module.exports = {
  index,
  new: newJob,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", { title: "All Jobs", jobs });
  });
}

function newJob(req, res) {
  const statuss = Job.schema.path("status").enumValues;
  res.render("jobs/new", { title: "ADD JOB", statuss });
}
