import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ item }: any) => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        textAlign: "center",
        marginBottom: "15px",
      }}
    >
      <img
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          border: "5px solid white",
        }}
        alt="manjares de luz "
        src={item.img}
      />
      <Typography variant="h6" color="#b65fa4">
        {" "}
        {item.name}
      </Typography>
      <Typography variant="h6" color="#b65fa4">
        {" "}
        {item.description}
      </Typography>
    </div>
  );
};

export default ProductCard;
