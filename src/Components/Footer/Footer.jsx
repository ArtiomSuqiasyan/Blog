import React from "react";
import Box from "@material-ui/core/Box";
import MenuFooter from "./MenuFooter/MenuFooter";
import Copyright from "./Copyright/Copyright";
import FooterIcons from "./FooterIcons/FooterIcons";

export default function Footer() {
  return (
    <footer>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="yellow"
        width="100%"
        height="100px"
      >
        <MenuFooter />
        <Copyright />
        <FooterIcons />
      </Box>
    </footer>
  );
}
