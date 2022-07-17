import { Grid, Typography } from "@mui/material";
import React from "react";
import LogoImg from "../assets/images/luzbakerylogo.png";
import TartaSirenita from "../assets/images/tartaSirenita.png";

const HeroSection = () => {
  return (
    <Grid container style={{ backgroundColor: "#ffe0fc", width: "100%" }}>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        xs={12}
        md={8}
        item
      >
        <Typography variant="h4" color="#b65fa4">
          Los Manjares de luz{" "}
        </Typography>
        <Typography variant="h6" color="#b65fa4">
          Sorprendeme con ideas dulces para disfrutar momentos unicos.
        </Typography>
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
      <Grid xs={12} md={4} item>
        <Typography color="#b65fa4" variant="h4">
          Tartas por encargo en Madrid...!!!
        </Typography>
        <img
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
          }}
          alt="manjares de luz "
          src={TartaSirenita}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
