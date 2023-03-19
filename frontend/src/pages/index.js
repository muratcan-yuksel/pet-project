import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavbarComponent from "../components/NavbarComponent";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import furrycare from "../images/furrycare.svg";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <NavbarComponent />{" "} */}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "#1976d2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={furrycare} alt="Furry Care" width={150} height={150} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "auto",
          marginTop: "100px",
        }}
      >
        {" "}
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Box>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="owner"
                control={<Radio />}
                label="Owner"
              />
              <FormControlLabel value="vet" control={<Radio />} label="Vet" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button sx={{ width: "100%", marginTop: "1rem" }} variant="contained">
          LogIn
        </Button>
        <Button sx={{ width: "100%", marginTop: "2rem" }} variant="contained">
          SignUp
        </Button>
      </Box>
    </div>
  );
};

export default index;
