const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: {
    type: String,
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  // Automatic createdAt & updatedAt properties
  timestamps: true
});

const jobSchema = new Schema(
  {
    company: {
      type: String,
    },
    title: {
      type: String,
    },

    date: {
      type: Date,
      default: function () {
        return new Date().getFullYear();
      },
    },
    status: {
      type: String,
      enum: ["Applied", "Interviewed", "Job Offer", "Rejected"],
    },
    notes: [noteSchema],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
