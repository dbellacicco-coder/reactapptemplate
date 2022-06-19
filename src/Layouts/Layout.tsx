import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./sections/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
