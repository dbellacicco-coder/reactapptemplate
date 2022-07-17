import { Typography } from "@mui/material";
import React from "react";

type SectionTitleT = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitleT) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        style={{
          display: "inline",
          borderBottom: "1px solid #b65fa4 ",
          margin: "0px",
          color: "#b65fa4",
        }}
      >
        {" "}
        {text}
      </Typography>
    </div>
  );
};

export default SectionTitle;
