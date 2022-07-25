const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: String,
  title: String,
  date: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    },
  },
  notes: String,
  status: {
    type: String,
    enum: ["Applied", "Interviewed", "Job Offer", "Rejected"],
  },
});

module.exports = mongoose.model("Job", jobSchema);
