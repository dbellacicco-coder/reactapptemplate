import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import tequsIMG from "../assets/images/salty/tequenos.jpg";
import cachitosIMG from "../assets/images/salty/cachitos.jpg";
import pandejamon from "../assets/images/salty/pandejamon.jpg";
import andinosIMG from "../assets/images/salty/pastelitosandinos.jpg";
import empandasIMG from "../assets/images/salty/empandas.jpg";
import yucaIMG from "../assets/images/salty/yucapasteles.jpg";

import ProductCard from "../Components/ProductsCard";

const salty = [
  {
    id: 1,
    name: "Tequeños",
    description:
      "Palitos de queso envueltos en una masa de harina de trigo frito.",
    img: tequsIMG,
  },
  {
    id: 2,
    name: "Cachitos",
    description: "Pan relleno de jamòn york y bacòn.",
    img: cachitosIMG,
  },
  {
    id: 3,
    name: "Pan de Jamon",
    description: "Pan relleno de jamòn ahumado,bacòn ,aceitunas y uvas pasas",
    img: pandejamon,
  },
  {
    id: 4,
    name: "Pastelitos Andinos",
    description:
      "Pastel de harina de trigo fritos rellenos de carne,pollo o queso.",
    img: andinosIMG,
  },
  {
    id: 5,
    name: "Empanadas",
    description:
      "Empanada de harina de maìz precocidas fritas rellenas de carne ,pollo o queso.",
    img: empandasIMG,
  },
  {
    id: 6,
    name: "Pastelitos de Yuca",
    description: "Masas de Yuca frita rellena de carne.",
    img: yucaIMG,
  },
];

const SaltyList = () => {
  return (
    <Container>
      <div style={{ marginTop: "60px", marginBottom: "50px" }}>
        <Grid alignItems="center" container>
          {salty.map((item): any => {
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

export default SaltyList;
