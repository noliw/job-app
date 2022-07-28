const Job = require("../models/job");

module.exports = {
  create,
  delete: deleteNote,
};

function create(req, res) {
  Job.findById(req.params.id, function (err, job) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    job.notes.push(req.body);
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
