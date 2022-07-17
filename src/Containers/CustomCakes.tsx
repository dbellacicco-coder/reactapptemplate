import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import cake1 from "../assets/images/customized/cake_1.png";
import cake2 from "../assets/images/customized/cake_2.png";
import cake3 from "../assets/images/customized/cake_3.png";
import cake4 from "../assets/images/customized/cake_4.jpg";
import frozenIMG from "../assets/images/sweet/tarta_frozen.jpg";
import SectionTitle from "../Components/SectionTitle";
import ProductCard from "../Components/ProductsCard";

const fondant = [
  {
    id: 1,
    name: "Tarta Intanfil Baby Shark",
    description:
      "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
    img: cake1,
  },
  {
    id: 2,
    name: "Tarta de 15 años (4 pisos)",
    description:
      "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
    img: cake2,
  },
];

const cream = [
  {
    id: 3,
    name: "Tarta infantil Frozen",
    description:
      "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
    img: frozenIMG,
  },
  {
    id: 4,
    name: "Tarta Osita",
    description:
      "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
    img: cake4,
  },
];
const customCakesData = [fondant, cream];

const CustomCakes = () => {
  return (
    <Container>
      <Typography variant="h5">
        Nuestras tartas personalizadas son tartas hechas a la medida, con la
        temática que más te guste para cualquier tipo de celebración o evento.
        Se hacen sólo por encargo por lo menos con 5 días de anticipación.
        Nuestras tartas son hechas con recetas tradicionales y materia prima de
        calidad. Las puede combinar con los sabores que mas te gusten:
        Bizcochos: vainilla, chocolate, marmoleado, limón, naranja, zanahoria o
        red velvet. Rellenos: crema de chocolate, crema de oreo, crema de dulce
        de leche,crema de nutella, frosting de queso, ganache de chocolate o
        mermelada
      </Typography>
      <div style={{ marginTop: "40px" }}>
        <SectionTitle text="Fondant" />
        <Typography style={{ marginTop: "10px" }} variant="h6">
          Nuestras tartas llevan un bizcocho esponjoso con relleno suave y
          deliciosa crema,cubierta de ganache de chocolate o swiss merengue
          buttercream y fondant. Las decoraciones seran de la temàtica que màs
          te guste, con decoraciones en modelados de fondant,impresiòn de
          azùcar,flores o toppers. El tamaño mìnimo es de 10 raciones,altura
          aproximada 10-12 cms. Pueden ser de uno o mas pisos.
        </Typography>
        <Grid alignItems="center" container>
          {fondant.map((item): any => {
            return (
              <Grid xs={12} sm={6} md={6} item>
                <ProductCard key={item.id} item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <SectionTitle text="Crema" />
        <Typography style={{ marginTop: "10px" }} variant="h6">
          Nuestras tartas llevan un bizcocho esponjoso con relleno suave y
          deliciosa crema de merengue de suizo con crema de mantequilla,
          combinado con los sabores que mas te gusten. Las decoraciones seran de
          la temàtica que màs te guste, con decoraciones en modelados de
          fondant,impresiòn de azùcar,flores o toppers. El tamaño mìnimo es de
          10 raciones,altura aproximada 10-12 cms. Pueden ser de uno o mas
          pisos.
        </Typography>
        <Grid alignItems="center" container>
          {cream.map((item): any => {
            return (
              <Grid xs={12} sm={6} md={6} item>
                <ProductCard key={item.id} item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

export default CustomCakes;
