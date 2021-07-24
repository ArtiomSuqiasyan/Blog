import React from "react";
import Box from "@material-ui/core/Box";
import Logo from "./Logo/Logo";
import LogIn from "./LogIn/Login";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#1a1146"
        width="100%"
        height="100px"
      >
        <Logo />
        <Navbar />
        <LogIn />
      </Box>
    </header>
  );
}
