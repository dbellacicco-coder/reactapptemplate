import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logoImg from "../../assets/images/luzbakerylogo.png";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const pages = [
  { name: "Inicio", link: "" },
  { name: "Tartas", link: "tartas" },
  { name: "Dulces", link: "dulces" },
  { name: "Salados", link: "salados" },
  { name: "Quien soy", link: "quiensoy" },
  { name: "Encargos", link: "encargos" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Footer = () => {
  return (
    <AppBar style={{ backgroundColor: "#99d9ea" }} position="static">
      <Container
        style={{ display: "flex", justifyContent: "space-evenly" }}
        maxWidth="xl"
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "5px solid white",
          }}
          alt="manjares de luz "
          src={logoImg}
        />
        <Typography>
          {" "}
          Calle Esteban Collantes,31. CP: 28017. Madrid (metro ascao) ,tel:
          666844096
        </Typography>
        <Box>
          <FacebookIcon
            onClick={(event) =>
              (window.location.href =
                "https://www.facebook.com/losmanjaresdeluz")
            }
          />

          <InstagramIcon
            onClick={(event) =>
              (window.location.href =
                "https://www.instagram.com/losmanjaresdeluz/?hl=es")
            }
          />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Footer;
