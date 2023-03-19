import React, { useState, useContext, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { DataContext } from "@/context/provider";
import axios from "axios";
import Pets from "@/components/Pets";
import Store from "@/components/Store";
import Caretakers from "@/components/Caretakers";

const owner = () => {
  const [data, setData] = useContext(DataContext);
  const [pets, setPets] = useState([]);
  const [caretakers, setCaretakers] = useState([]);

  const getPets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/pets", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      console.log(res.data);
      const filteredPets = res.data.pets.filter(
        (pet) => pet.owner === data.user._id
      );
      setPets(filteredPets);
      console.log(filteredPets);
    } catch (error) {
      console.log(error);
    }
  };

  const getCaretakers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/caretakers", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      console.log(res.data);
      setCaretakers(res.data.caretakers);
    } catch (error) {
      console.log(error);
    }
  };

  const choice = () => {
    if (data.navChoice === "Pets") {
      return <Pets pets={pets} />;
    } else if (data.navChoice === "Store") {
      return <Store />;
    } else if (data.navChoice === "Caretakers") {
      return <Caretakers caretakers={caretakers} />;
    }
  };

  useEffect(() => {
    getCaretakers();
    getPets();
  }, []);

  console.log("mydata", data);
  return (
    <div>
      <NavbarComponent />
      {choice()}
    </div>
  );
};

export default owner;
