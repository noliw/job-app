const Job = require("../models/job");

module.exports = {
  create,
  edit,
  update,
  delete: deleteNote,
};

function create(req, res) {
  Job.findById(req.params.id, function (err, job) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    job.notes.push(req.body);
    job.save(function (err) {
      res.redirect(`/jobs/${note._id}`);
    });
  });
}

function edit(req, res) {
  Job.findOne({ "notes._id": req.params.id }, function (err, job) {
    const nte = job.notes.id(req.params.id);
    res.render("notes/edit", { nte });
  });
}

function update(req, res) {
  Job.findOne({ "notes._id": req.params.id }, function (err, job) {
    const noteSubdoc = job.notes.id(req.params.id);

    if (!noteSubdoc.userId.equals(req.user._id))
      return res.redirect(`/jobs/${job._id}`);

    noteSubdoc.text = req.body.text;

    job.save(function (err) {
      res.redirect(`/jobs/${job._id}`);
    });
  });
}

function deleteNote(req, res) {

  Job.findOne(
    { "notes._id": req.params.id, "notes.userId": req.user._id },
    function (err, job) {
      if (!job || err) return res.redirect(`/Jobs/${job._id}`);

      job.notes.remove(req.params.id);

      job.save(function (err) {

        res.redirect(`/jobs/${job._id}`);
      });
    }
  );
}
