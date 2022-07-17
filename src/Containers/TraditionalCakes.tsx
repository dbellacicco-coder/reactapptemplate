import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../Components/ProductsCard";
import SectionTitle from "../Components/SectionTitle";
import treslechesIMG from "../assets/images/sweet/tres_leches.jpg";
import zanahoriaIMG from "../assets/images/sweet/tarta_zanahoria.jpg";
import tartachocolateING from "../assets/images/sweet/tarta_chocolate.jpg";
import tartaredvelvetIMG from "../assets/images/sweet/tarta_redvelvet.jpg";
import tartasanmarcosIMG from "../assets/images/sweet/tarta_sanmarcos.jpg";
import tartaquesoIMG from "../assets/images/sweet/tarta_queso.jpg";

const traditionalCakes = [
  {
    id: 3,
    name: "Tarta Tres Leches",
    description:
      "Es una de las tardas favoritas de la pastelerìa.Lleva biscocho genòves bañado en tres leches:condensada , evaporada y nata,cubierta con nata y decorada ,con canela y cereza",
    img: treslechesIMG,
  },
  {
    id: 4,
    name: "Tarta de Zanahoria",
    description:
      "Esta tarta lleva bizcocho de zanahoria con nueces,rellena y cubierta de frosting de queso.",
    img: zanahoriaIMG,
  },
  {
    id: 4,
    name: "Tarta de Chocolate",
    description:
      "El tequeño, es un aperitivo frito, su forma es cilíndrica y se hace con una barrita de queso semiduro que se envuelve en tiras de masa de harina de trigo.",
    img: tartachocolateING,
  },
  {
    id: 4,
    name: "Tarta Red Velvet",
    description:
      "Es una tarta amerìcana que lleva bizcocho aromatizado con cacao y vanilla de color, rellena y cubierta frosting de queso.",
    img: tartaredvelvetIMG,
  },
  {
    id: 4,
    name: "Tarta de Queso",
    description:
      "Es una deliciosa tarta con crema de queso y nata,con un sabor ùnico y delicioso",
    img: tartaquesoIMG,
  },
  {
    id: 4,
    name: "Tarta San Marcos",
    description:
      "Es una tarta que lleva bizcocho genòves relleno de nata y trufa,decorado con crema de yema ,nata y almendras laminadas tostadas.",
    img: tartasanmarcosIMG,
  },
];
const TraditionalCakes = () => {
  return (
    <div>
      <Typography variant="h6">
        Nuestras tartas tradicionales son tartas bàsicas,hechas con bizcochos
        esponjosos y con una o dos capas de deliciosos rellenos. Las cubiertas
        son de: nata, trufa dulce de leche merengue, crema de chocolate o
        vainilla. Estas tartas se hacen por encargo con un minimo de un dia de
        anticipacion. Tambien tenemos en porciones en la vitrina de la
        pasteleria.
      </Typography>
      <div style={{ marginTop: "40px" }}>
        <SectionTitle text="Tradicionales" />

        <Grid alignItems="center" container>
          {traditionalCakes.map((item): any => {
            return (
              <Grid style={{ marginBottom: "70px" }} xs={12} sm={6} md={6} item>
                <ProductCard key={item.id} item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default TraditionalCakes;
