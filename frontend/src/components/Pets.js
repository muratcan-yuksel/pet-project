import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const pets = ({ pets }) => {
  console.log(pets);

  return (
    <div>
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
                  pet.medicalHistory.map((med) => <p>{med}</p>)}{" "}
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
