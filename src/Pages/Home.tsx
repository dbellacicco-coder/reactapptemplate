import React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import { ImageListItem } from "@mui/material";
import ProductsInfo from "../Containers/ProductsInfo";
import HeroSection from "../Components/HeroSection";
import FormContainer from "../Containers/FormContainer";
import { AboutMeContainer } from "../Containers/AboutMeContainer";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      {/*<AboutMeContainer />*/}
      <ProductsInfo />
      <FormContainer />
    </div>
  );
};

export default Home;
