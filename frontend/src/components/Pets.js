import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";
import { DataContext } from "@/context/provider";

const pets = ({ pets, onChildData }) => {
  console.log(pets);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [category, setCategory] = useState("");
  const [allergies, setAllergies] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [weight, setWeight] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [vaccinationHistory, setVaccinationHistory] = useState("");
  const [medicalHistoryDate, setMedicalHistoryDate] = useState("");
  const [medicalHistoryNote, setMedicalHistoryNote] = useState("");
  const [medicalHistoryVet, setMedicalHistoryVet] = useState("");
  let count = 0;
  const [dummy, setDummy] = useState(false);

  const [data, setData] = useContext(DataContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCurrentMedicationsChange = (event) => {
    setCurrentMedications(event.target.value);
  };

  const handleVaccinationHistoryChange = (event) => {
    setVaccinationHistory(event.target.value);
  };

  const handleMedicalHistoryDate = (event) => {
    setMedicalHistoryDate(event.target.value);
  };
  const handleMedicalHistoryNote = (event) => {
    setMedicalHistoryNote(event.target.value);
  };
  const handleMedicalHistoryVet = (event) => {
    setMedicalHistoryVet(event.target.value);
  };

  const createPet = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      breed,
      owner: data.user._id,
      category,
      allergies,
      bloodGroup,
      weight,
      currentMedications,
      vaccinationHistory,
      medicalHistoryDate,
      medicalHistoryNote,
      medicalHistoryVet,
    };

    console.log(formData);
    try {
      const res = await axios.post("http://localhost:3000/pets", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      res.status === 200 && count++;
      onChildData(Date.now());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [count]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          id="outlined-basic"
          label="age"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={age}
          onChange={handleAgeChange}
        />
        <TextField
          id="outlined-basic"
          label="breed"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={breed}
          onChange={handleBreedChange}
        />
        <TextField
          id="outlined-basic"
          label="category"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={category}
          onChange={handleCategoryChange}
        />
        <TextField
          id="outlined-basic"
          label="allergies"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={allergies}
          onChange={handleAllergiesChange}
        />
        <TextField
          id="outlined-basic"
          label="bloodGroup"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={bloodGroup}
          onChange={handleBloodGroupChange}
        />
        <TextField
          id="outlined-basic"
          label="weight"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={weight}
          onChange={handleWeightChange}
        />
        <TextField
          id="outlined-basic"
          label="currentMedications"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={currentMedications}
          onChange={handleCurrentMedicationsChange}
        />
        <TextField
          id="outlined-basic"
          label="vaccinationHistory"
          variant="outlined"
          sx={{ margin: "1rem" }}
          value={vaccinationHistory}
          onChange={handleVaccinationHistoryChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="medicalHistory"
            variant="outlined"
            sx={{ margin: "1rem" }}
            value={medicalHistoryDate}
            onChange={handleMedicalHistoryDate}
          />{" "}
          <TextField
            id="outlined-basic"
            label="medicalHistory"
            variant="outlined"
            sx={{ margin: "1rem" }}
            value={medicalHistoryNote}
            onChange={handleMedicalHistoryNote}
          />{" "}
          <TextField
            id="outlined-basic"
            label="medicalHistory"
            variant="outlined"
            sx={{ margin: "1rem" }}
            value={medicalHistoryVet}
            onChange={handleMedicalHistoryVet}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={createPet} variant="contained">
          Add Pet
        </Button>
      </Box>

      {pets &&
        pets.map((pet) => (
          <Box
            key={pet._id}
            sx={{
              border: "2px solid black",
              display: "flex",
              flexDirection: "row",
              margin: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ margin: "5px" }}>Name: {pet.name}</p>
              <p style={{ margin: "5px" }}>Age: {pet.age}</p>
              <p style={{ margin: "5px" }}>Breed: {pet.breed}</p>
              <p style={{ margin: "5px" }}>Owner Id: {pet.owner}</p>
              <p style={{ margin: "5px" }}>Category: {pet.category} </p>
              <p style={{ margin: "5px" }}>Weight: {pet.weight} </p>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ margin: "5px" }}>
                Current Medications:{" "}
                {pet.currentMedications &&
                  pet.currentMedications.map((med) => <p>{med}</p>)}
              </div>
              <div style={{ margin: "5px" }}>
                Allergies:{" "}
                {pet.allergies && pet.allergies.map((med) => <p>{med}</p>)}
              </div>
              <div style={{ margin: "5px" }}>
                Medical History:{" "}
                {pet.medicalHistory &&
                  pet.medicalHistory.map((med) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid black",
                      }}
                    >
                      <div>{med.medicalNote}</div>
                      <div>{med.date}</div>
                      <div>{med.vet}</div>
                    </div>
                  ))}{" "}
              </div>

              <div style={{ margin: "5px" }}>
                Vaccination History:{" "}
                {pet.vaccinationHistory &&
                  pet.vaccinationHistory.map((med) => <p>{med}</p>)}
              </div>
            </Box>
          </Box>
        ))}
    </div>
  );
};

export default pets;
