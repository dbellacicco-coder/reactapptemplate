import { Grid, Typography } from "@mui/material";
import React from "react";
import LogoImg from "../assets/images/luzbakerylogo.png";

const HeroSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      style={{ backgroundColor: "#272318", width: "100%" }}
    >
      <Grid item>
        <Typography variant="h2" color="white">
          Los Manjares de luz{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="white" variant="h4">
          Texto de la libreria typical
        </Typography>
      </Grid>
      <Grid item>
        <img
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "5px solid white",
          }}
          alt="manjares de luz "
          src={LogoImg}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
