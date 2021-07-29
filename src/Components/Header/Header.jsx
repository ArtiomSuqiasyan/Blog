import React from "react";
import Box from "@material-ui/core/Box";
import Logo from "./Logo/Logo";
import LogIn from "./LogIn/Login";
import Navbar from "./Navbar/Navbar";
import SignIn from "./SignIn/SignIn";

export default function Header() {
  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor="#1a1146"
        width="100%"
        height="100px"
      >
        <Logo />
        <Navbar />
        <LogIn />
        <SignIn />
      </Box>
    </header>
  );
}
