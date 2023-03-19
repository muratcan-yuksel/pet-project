import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Caretakers = ({ caretakers }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  console.log(caretakers);
  return (
    <div>
      {caretakers.map((caretaker) => (
        <Box
          sx={{
            border: "2px solid black",
            margin: "10px",
            padding: "10px",
          }}
          key={caretaker._id}
        >
          <h4>Name: {caretaker.name}</h4>
          <p>About: {caretaker.about}</p>
          <p>Rate {caretaker.rate}</p>
          <Button onClick={handleOpen} variant="contained">
            Hire
          </Button>{" "}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="date-input">Choose a date:</label>
                <input
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
            </Box>
          </Modal>
        </Box>
      ))}
    </div>
  );
};

export default Caretakers;
