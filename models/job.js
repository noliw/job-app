const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    company: {
      type: String,
    },
    title: {
      type: String,
    },

    date: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Applied", "Interviewed", "Job Offer", "Rejected"]
    },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  userName: String,
  userAvatar: String,
}, {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
