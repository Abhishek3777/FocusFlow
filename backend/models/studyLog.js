const mongoose = require('mongoose');

const studyLogSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('StudyLog', studyLogSchema);
