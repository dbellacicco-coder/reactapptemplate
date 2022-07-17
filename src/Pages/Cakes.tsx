import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomCakes from "../Containers/CustomCakes";
import { Container } from "@mui/material";
import TraditionalCakes from "../Containers/TraditionalCakes";

const Cakes = () => {
  const [value, setValue] = useState("custom");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            style={{ fontSize: "20px" }}
            value="custom"
            label="Personalizadas"
          />
          <Tab
            style={{ fontSize: "20px" }}
            value="traditional"
            label="Tradicionales"
          />
        </Tabs>
      </Box>
      <div hidden={value !== "custom" ? true : false}>
        <CustomCakes />
      </div>
      <div hidden={value !== "traditional" ? true : false}>
        <TraditionalCakes />
      </div>
    </Container>
  );
};

export default Cakes;
