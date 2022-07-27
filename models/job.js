const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
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
    notes: [noteSchema],
    status: {
      type: String,
      enum: ["Applied", "Interviewed", "Job Offer", "Rejected"],
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
