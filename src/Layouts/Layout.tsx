import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";
import NavBar from "./sections/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
