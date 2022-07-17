import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ProductInfoCard from "../Components/ProductInfoCard";
import saltyBG from "../assets/images/Bg/saltyBackground.jpg";
import sweetBG from "../assets/images/Bg/sweetBackground.jpg";
import customBG from "../assets/images/customized/TARTA OSITA.jpg";
import SectionTitle from "../Components/SectionTitle";

const services = [
  {
    title: "Dulces",
    description:
      "Una gran variedad de tartas, punCakes , bolleria que te endulzaran el dia",
    img: sweetBG,
    atriution: "DesignedbyMacrovector",
    linkPage: "dulces",
  },
  {
    title: "Salados",
    description:
      "Ponle sabor a tu mesa y acompaña el postre con nuestros productos salados",
    img: saltyBG,
    atribution: "https://www.freepik.es/fotos/pan-casero",
    linkPage: "Salados",
  },
  {
    title: "Personalizado",
    description:
      "Diseño a la medida , no te cortes pide que nosotros te lo hacemos",
    img: customBG,
    linkPage: "tartas",
    // <a href="https://www.freepik.es/fotos/pastel-chocolate">Foto de pastel de chocolate creado por azerbaijan_stockers - www.freepik.es</a>
  },
];

const ProductsInfo = () => {
  return (
    <>
      <Container
        style={{
          width: "100%",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        <SectionTitle text="Productos" />

        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
        >
          {services.map((service, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <ProductInfoCard service={service} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductsInfo;
