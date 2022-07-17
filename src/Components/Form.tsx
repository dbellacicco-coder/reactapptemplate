import React from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import emailjs from "emailjs-com";

export const Form = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dxst3c",
        "template_druxoeo",
        e.target,
        "k-CbLkFpnqE866eWn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>
        <form onSubmit={sendEmail}>
          <div
            style={{
              display: "flex",
              height: "300px",
              width: "70%",
              margin: "auto",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <TextField
              color="secondary"
              type="text"
              name="name"
              label="Nombre"
              variant="standard"
              style={{ width: "100%" }}
            />
            <TextField
              color="secondary"
              name="email"
              label="Correo Electronico"
              variant="standard"
              style={{ width: "100%" }}
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              name="message"
              placeholder="Escribenos Tu Mensaje..."
              style={{ width: "100%" }}
            />
            <Button type="submit"> Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
