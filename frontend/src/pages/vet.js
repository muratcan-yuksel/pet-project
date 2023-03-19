import React, { useEffect, useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import furrycare from "../images/furrycare.svg";
import { DataContext } from "@/context/provider";
import TextField from "@mui/material/TextField";
import axios from "axios";

const vet = () => {
  const [data, setData] = useContext(DataContext);
  const [input, setInput] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/appointments");
      console.log(response.data);
      setAppointments(response.data.appointments);
      setFilteredAppointments(response.data.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const filterAppointmentsByPet = (petName) => {
    const filteredAppointments = appointments.filter((appointment) =>
      appointment.pet.toLowerCase().includes(petName.toLowerCase())
    );
    setFilteredAppointments(filteredAppointments);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    filterAppointmentsByPet(e.target.value);
  };

  return (
    <Box>
      {" "}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "#1976d2",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Image src={furrycare} alt="Furry Care" width={150} height={150} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          sx={{ margin: "1rem" }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredAppointments.map((appointment) => (
          <Box
            sx={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
            key={appointment._id}
          >
            <h3>{appointment.pet}</h3>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
            ></TextField>
            <Button sx={{ marginTop: "1rem" }} variant="contained">
              Submit
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default vet;
