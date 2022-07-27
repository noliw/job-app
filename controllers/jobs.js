const Job = require("../models/job");

module.exports = {
  index,
  show,
  new: newJob,
  create,
  delete: deleteJob,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", { title: "All JOBS", jobs });
  });
}

function show(req, res) {
  Job.findById(req.params.id, function (err, job) {
      res.render("jobs/show", { title: "Job detail", job });
    });
}

function newJob(req, res) {
  const statuss = Job.schema.path("status").enumValues;
  res.render("jobs/new", { title: "ADD JOB", statuss });
}

function create(req, res) {

  // Add the user-centric info to req.body
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  Job.create(req.body, function (err) {
    if (err) {
      return res.redirect("/jobs/new");
    }
    res.redirect("/jobs");
  });
}



function deleteJob(req, res) {
  Job.findByIdAndDelete(req.params.id, function (err, job) {
    if (err) return res.redirect("/jobs");
    res.redirect("/jobs");
  });
}
