const mongoose = require("mongoose");
// const User = require("./user"); // import User model

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: {
    type: String,
    enum: ["dog", "cat", "bird", "fish", "reptile", "other"],
    default: "other",
    required: true,
  },
  allergies: { type: String, required: false },
  bloodGroup: { type: String, required: true },
  weight: { type: Number, required: true },
  currentMedications: { type: String, required: false },
  vaccinationHistory: { type: String, required: false },
  //will be an array of objects
  medicalHistory: { type: Array, required: false },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;