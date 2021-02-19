const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
  },
  online: {
    type: Boolean,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Participant", participantSchema);
