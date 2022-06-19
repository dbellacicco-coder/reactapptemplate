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

const pages = [
  { name: "Inicio", link: "inicio" },
  { name: "Productos", link: "productos" },
  { name: "Contacto", link: "contacto" },
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Manjares de Luz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <NavLink
                  to={`/${page.link}`}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  style={{
                    color: "black",
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
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Manjares de Luz
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "60px",
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
                  <Typography style={{ fontSize: "25px" }}>
                    {" "}
                    {page.name}{" "}
                  </Typography>
                </NavLink>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
