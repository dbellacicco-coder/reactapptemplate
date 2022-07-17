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
import { Link, NavLink } from "react-router-dom";
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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#99d9ea" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Tooltip title="Los Manjares de Luz">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", width: "100%" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* aqui va el menu responsive */}

              {pages.map((page) => (
                <NavLink
                  to={`/${page.link}`}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  style={{
                    color: "#99d9ea",
                    display: "block",
                    marginRight: "25px",
                    textDecoration: "none",
                  }}
                >
                  <Typography style={{ fontSize: "25px" }}>
                    {" "}
                    {page.name}{" "}
                  </Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              mr: 1,
            }}
          >
            <Tooltip title="Los Manjares de Luz">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
              marginLeft: "60px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
              }}
            >
              {pages.map((page) => {
                return (
                  <NavLink
                    to={`/${page.link}`}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    style={{
                      color: "white",
                      display: "block",
                      marginRight: "25px",
                      textDecoration: "none",
                    }}
                  >
                    <Typography style={{ fontSize: "18px" }}>
                      {page.name.toUpperCase()}{" "}
                    </Typography>
                  </NavLink>
                );
              })}
            </Box>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
