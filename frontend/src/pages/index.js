import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import NavbarComponent from "../components/NavbarComponent";
import Image from "next/image";
import furrycare from "../images/furrycare.svg";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email: Email,
        password: Password,
        name: Name,
      });
      console.log(res.data);
      const user = res.data.user;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", user);
      // Redirect the user to their respective page based on their role
      switch (user.role) {
        case "vet":
          router.push("/vet");
          break;
        case "owner":
          router.push("/owner");
          break;
        case "admin":
          router.push("/admin");
          break;
        default:
          // If the user has an invalid or unrecognized role, you could redirect them to an error page or do something else
          router.push("/error");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users/signup", {
        email: Email,
        password: Password,
        name: Name,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ width: "100%", marginTop: "1rem" }}
          variant="contained"
          onClick={login}
        >
          LogIn
        </Button>
        <Button
          sx={{ width: "100%", marginTop: "1rem" }}
          variant="contained"
          onClick={signup}
        >
          SignUp
        </Button>
      </Box>
    </div>
  );
};

export default index;
