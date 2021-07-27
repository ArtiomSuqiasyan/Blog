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
        bgcolor="#000"
        width="100%"
        minHeight="100px"
        marginTop="200px"
      >
        <MenuFooter width="25%" />
        <Copyright width="50%" />
        <FooterIcons width="25%" />
      </Box>
    </footer>
  );
}
