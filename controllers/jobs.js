const Job = require("../models/job");

module.exports = {
  index,
  show,
  edit,
  update,
  new: newJob,
  create,
  delete: deleteJob,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", { title: "All JOBS", jobs });
  });
}

function newJob(req, res) {
  const statuss = Job.schema.path("status").enumValues;
  res.render("jobs/new", { title: "ADD JOB", statuss });
}

function show(req, res) {
  Job.findById(req.params.id, function (err, job) {
    res.render("jobs/show", { title: "Job detail", job });
  });
}
function edit(req, res) {
  Job.findOne({ _id: req.params.id, user: req.user  }, function (err, job) {
    const statuss = Job.schema.path("status").enumValues;
     if (err || !job) return res.redirect("/jobs");
    res.render("jobs/edit", {title: "edit job", job, statuss });
  });
}

function update(req, res) {
  Job.findOneAndUpdate(
    {_id: req.params.id, user: req.user },
    req.body,
    {new: true},
    function(err, job) {
      if (err || !job) return res.redirect('/jobs');
      res.redirect(`/jobs/${job._id}`);
    }
  );
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
  Job.findByIdAndDelete({_id: req.params.id}, function (err, job) {
    if (err) return res.redirect("/jobs");
    res.redirect("/jobs");
  });
}
