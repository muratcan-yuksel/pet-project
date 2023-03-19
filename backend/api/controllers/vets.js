const Vet = require("../models/vet");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");

//get vets
const getVets = asyncWrapper(async (req, res) => {
  const vets = await Vet.find();
  res.status(200).json({
    vets,
  });
});

//create vet
const createVet = asyncWrapper(async (req, res) => {
  const vet = await Vet.create(req.body);
  res.status(201).json({
    vet,
  });
});

module.exports = {
  getVets,
  createVet,
};
