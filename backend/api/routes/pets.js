const express = require("express");
const router = express.Router();
const jwtAuthMiddleware = require("../middleware/check-auth");

const {
  createPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
} = require("../controllers/pets");

router.post("/", jwtAuthMiddleware, createPet);
router.get("/", jwtAuthMiddleware, getPets);
router.get("/:petId", jwtAuthMiddleware, getPetById);
router.patch("/:petId", jwtAuthMiddleware, updatePet);
router.delete("/:petId", jwtAuthMiddleware, deletePet);

module.exports = router;
