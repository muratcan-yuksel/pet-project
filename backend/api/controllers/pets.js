const User = require("../models/user");
const Pet = require("../models/pet");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");

//create pet
const createPet = asyncWrapper(async (req, res) => {
  const pet = new Pet({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    owner: req.userData.userId,
    category: req.body.category,
    allergies: req.body.allergies,
    bloodGroup: req.body.bloodGroup,
    weight: req.body.weight,
    currentMedications: req.body.currentMedications,
    vaccinationHistory: req.body.vaccinationHistory,
    medicalHistory: req.body.medicalHistory,
  });
  await pet.save();

  // Find the user with the corresponding userId and update their pets array with the new pet's id
  const user = await User.findById(req.userData.userId);
  user.pets.push(pet._id);
  await user.save();

  res.status(201).json({
    message: "Pet created",
  });
});

//get pets
const getPets = asyncWrapper(async (req, res) => {
  const pets = await Pet.find();
  res.status(200).json({
    pets,
  });
});

//get pet by id
const getPetById = asyncWrapper(async (req, res) => {
  const pet = await Pet.findById(req.params.petId);
  res.status(200).json({
    pet,
  });
});

//update pet
const updatePet = asyncWrapper(async (req, res) => {
  const pet = await Pet.findById(req.params.petId);
  if (pet.owner.toString() !== req.userData.userId) {
    return res.status(401).json({
      message: "You are not authorized to update this pet",
    });
  }
  pet.name = req.body.name;
  pet.age = req.body.age;
  pet.breed = req.body.breed;
  pet.category = req.body.category;
  pet.allergies = req.body.allergies;
  pet.bloodGroup = req.body.bloodGroup;
  pet.weight = req.body.weight;
  pet.currentMedications = req.body.currentMedications;
  pet.vaccinationHistory = req.body.vaccinationHistory;
  pet.medicalHistory = req.body.medicalHistory;
  await pet.save();
  res.status(200).json({
    message: "Pet updated",
  });
});

//delete pet
const deletePet = asyncWrapper(async (req, res) => {
  const pet = await Pet.findById(req.params.petId);
  if (pet.owner.toString() !== req.userData.userId) {
    return res.status(401).json({
      message: "You are not authorized to delete this pet",
    });
  }
  await pet.remove();
  res.status(200).json({
    message: "Pet deleted",
  });
});

module.exports = {
  createPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
};
