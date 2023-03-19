import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "auto",
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
