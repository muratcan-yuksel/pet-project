import React, { useState, useContext } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { DataContext } from "@/context/provider";

const owner = () => {
  const [data, setData] = useContext(DataContext);

  console.log("mydata", data);
  return (
    <div>
      <NavbarComponent />
    </div>
  );
};

export default owner;
