const mongoose = require("mongoose");
const Pet = require("./pet");

const appointmentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  pet: {
    type: String,
  },
  vet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vet",
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
