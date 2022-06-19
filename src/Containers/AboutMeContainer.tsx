import { Grid } from "@mui/material";
import React from "react";
import yoIMG from "../assets/images/yoLuz.png";

export const AboutMeContainer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          display: "inline",
          borderBottom: "1px solid #b65fa4 ",
          margin: "0px",
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        Sobre Nosotros
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "white" }}> ¿...Quienes somos...?</h1>
            <p style={{ fontSize: "20px", color: "white" }}>
              Soy Luz Salcedo, venezolana, residenciada en Madrid desde hace más
              de 10 años, de profesión ingeniero, me inicié en el mundo de la
              repostería como hobby, me encantaba hacer postres y tartas, los
              cuales he aprendido de las recetas familiares, de forma
              autodidacta y posteriormente haciendo cursos. La pasión por la
              repostería me llevó a emprender, y contando con el apoyo de mi
              marido y mi madre decidí abrir “Los Manjares de Luz” pastelería y
              obrador, donde elaboramos tartas tradicionales, repostería
              creativa personalizada, así como postres y panadería venezolana.
              Gracias por permitirme endulzar sus hogares y sorprender con ideas
              dulces para disfrutar momentos únicos.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              padding: "5px",
              display: "flex",

              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "450px", height: "450", borderRadius: "50%" }}
              src={yoIMG}
              alt="img"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
