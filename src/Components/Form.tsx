import { TextareaAutosize, TextField } from "@mui/material";
import React from "react";

export const Form = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>
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
          Escribenos...
        </h1>
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
            label="Nombre"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextField
            color="secondary"
            label="Correo Electronico"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Escribenos Tu Mensaje..."
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
