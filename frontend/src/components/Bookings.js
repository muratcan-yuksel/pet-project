import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

export default function Bookings({ pets }) {
  const [pet, setPet] = useState("");
  const [vet, setVet] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlePet = (event) => {
    setPet(event.target.value);
  };
  const handleVet = (event) => {
    setVet(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ minWidth: 300, maxWidth: 350, marginTop: "5rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Pet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pet}
            label="Select Pet"
            onChange={handlePet}
          >
            {pets &&
              pets.map((pet) => (
                <MenuItem value={pet._id}>{pet.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>{" "}
      <Box sx={{ minWidth: 300, maxWidth: 350, margin: "1rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Vet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vet}
            label="Select Vet"
            onChange={handleVet}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginTop: "1rem" }} htmlFor="date-input">
          Choose a date:
        </label>
        <input
          style={{ marginBottom: "1rem" }}
          type="date"
          id="date-input"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="time-input">Choose a time:</label>
        <input
          type="time"
          id="time-input"
          value={time}
          onChange={handleTimeChange}
        />
      </Box>
      <TextField
        sx={{ margin: "1rem" }}
        id="standard-basic"
        label="Appointment Reason"
        variant="standard"
      />
      <Button variant="outlined">Book Appointment</Button>
    </Box>
  );
}
