import { Container, Typography } from "@mui/material";
import React from "react";
import { Form } from "../Components/Form";
import SectionTitle from "../Components/SectionTitle";

const FormContainer = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        style={{
          color: "#b65fa4",
        }}
        variant="h6"
      >
        Encarga tu tarta como la deseas o con la tematica que mas te
        guste,indicanos sabores y porciones y te enviamos el presupuesto.
      </Typography>
      <Typography>Rellena el formulario o puedes escribirnos a</Typography>
      <Typography> losmanjaresdeluz@gmail.com </Typography>
      <Typography> whatsapp: 666 844 096</Typography>
      <SectionTitle text="Escribenos..." />
      <Form />
    </Container>
  );
};

export default FormContainer;
