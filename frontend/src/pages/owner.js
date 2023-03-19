import React, { useState, useContext, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { DataContext } from "@/context/provider";
import axios from "axios";
import Pets from "@/components/Pets";
import Store from "@/components/Store";

const owner = () => {
  const [data, setData] = useContext(DataContext);
  const [pets, setPets] = useState([]);

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

  // if (data.navChoice === "pets") {
  //   return (
  //     <div>
  //       {pets.map((pet) => (
  //         <div key={pet._id}>
  //           <h1>{pet.name}</h1>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  const choice = () => {
    if (data.navChoice === "Pets") {
      return <Pets pets={pets} />;
    } else if (data.navChoice === "Store") {
      return <Store />;
    }
  };

  useEffect(() => {
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
