import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import cakePops15 from "../assets/images/sweet/CAKEPOPS_15_AÑOS.jpg";
import cupcakeBoda from "../assets/images/sweet/CUPCAKE_BODA.jpg";
import cupCakeRosaAzul from "../assets/images/sweet/CUPCAKES_ROSA_AZUL.jpg";
import golfeadosIMG from "../assets/images/sweet/GOLFEADOS.jpg";
import cupCakeTarta from "../assets/images/sweet/CUPCAKE_tarta.jpg";

import ProductCard from "../Components/ProductsCard";

const sweets = [
  {
    id: 1,
    name: "CakePops 15 años",
    img: cakePops15,
  },
  {
    id: 2,
    name: "CupCake Boda",
    img: cupcakeBoda,
  },
  {
    id: 3,
    name: "CupCake Rosa Azul",
    img: cupCakeRosaAzul,
  },
  {
    id: 4,
    name: "Golfeados",
    img: golfeadosIMG,
  },
  {
    id: 5,
    name: "Cup Cake Tarta",
    img: cupCakeTarta,
  },
];

const SweetsList = () => {
  return (
    <Container>
      <div style={{ marginTop: "40px" }}>
        <Grid alignItems="center" container>
          {sweets.map((item): any => {
            return (
              <Grid xs={12} md={6} item>
                <ProductCard key={item.id} item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

export default SweetsList;
