import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomCakes from "../Containers/CustomCakes";
import { Container } from "@mui/material";
import TraditionalCakes from "../Containers/TraditionalCakes";
import SweetsList from "../Containers/SweetsList";
import SectionTitle from "../Components/SectionTitle";
import SaltyList from "../Containers/SaltyList";

const Sweets = () => {
  const [value, setValue] = useState("custom");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <SectionTitle text="Salados" />
      <SaltyList />
    </Container>
  );
};

export default Sweets;
