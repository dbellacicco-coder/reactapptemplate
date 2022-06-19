import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tequenoIMG from "../assets/images/salty/tequenos.jpg";
import empanadaIMG from "../assets/images/salty/Empanadas.jpg";
import panJamonIMG from "../assets/images/salty/pandejamon.jpg";
import pastelitoIMG from "../assets/images/salty/pastelitos.jpg";

export const ProductsContainer = () => {
  const saltyProducts = [
    {
      name: "Tequeños",
      description:
        "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
      img: tequenoIMG,
    },
    {
      name: "Pan de Jamon",
      description:
        "El pan de jamón es un pan relleno de jamón, uvas pasas y aceitunas verdes, por lo general, rellenas con pimiento o pimentón rojo. Es un pan típico de Venezuela, que forma parte de la gastronomía navideña del país. ",
      img: panJamonIMG,
    },
    {
      name: "Pastelitos",
      description:
        " Pastelitos son realizados con la calidad que nos caracteriza, la fórmula secreta de nuestra masa,  la textura que a todos les gusta, nuestros rellenos son con recetas que a pasado de generación en generación, guisos de carne, pollo, papa y quesoo",
      img: pastelitoIMG,
    },
    {
      name: "Empanadas",
      description:
        "Empanadas, desayuno tipico, envoltura de masa de maiz frita, tiene forma de media luna y se hace con varios rellenes , por ejemplo  carne, pollo, queso, cazòn .",
      img: empanadaIMG,
    },
  ];

  return (
    <>
      <Container
        style={{
          backgroundColor: "white",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#b65fa4"
            fill-opacity="1"
            d="M0,288L15,288C30,288,60,288,90,266.7C120,245,150,203,180,197.3C210,192,240,224,270,218.7C300,213,330,171,360,154.7C390,139,420,149,450,133.3C480,117,510,75,540,69.3C570,64,600,96,630,112C660,128,690,128,720,138.7C750,149,780,171,810,181.3C840,192,870,192,900,181.3C930,171,960,149,990,154.7C1020,160,1050,192,1080,208C1110,224,1140,224,1170,224C1200,224,1230,224,1260,208C1290,192,1320,160,1350,128C1380,96,1410,64,1425,48L1440,32L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
          ></path>
      </svg>*/}
        <Typography
          style={{
            display: "inline",
            borderBottom: "1px solid #b65fa4 ",
            margin: "0px",

            color: "#b65fa4",
          }}
        >
          {" "}
          Productos y Servicios
        </Typography>

        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
        >
          {saltyProducts.map((card) => (
            <Card
              sx={{
                width: "400px",
                height: "400px",
                padding: "5px",
                margin: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};
