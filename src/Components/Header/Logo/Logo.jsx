import logo from "../../Images/logo.png";
import Box from "@material-ui/core/Box";

export default function Logo({width}) {
  return (
    <Box width={width}
    height="100%"
    display="flex"
    justifyContent="space-around"
    alignItems="center" >
      <Box >
        <img src={logo} alt="Logo" />
      </Box>
      
    </Box>
  );
}
