import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavbarComponent from "../components/NavbarComponent";
import Image from "next/image";
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
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button sx={{ width: "100%" }} variant="contained">
          Contained
        </Button>
      </Box>
    </div>
  );
};

export default index;
