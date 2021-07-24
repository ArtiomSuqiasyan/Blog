import logo from "../../Images/logo.png";
import Box from "@material-ui/core/Box";

export default function Logo() {
  return (
    <Box width="25%" height="100px" >
      <Box mt="5px" ml="25px">
        <img src={logo} alt="Logo" />
      </Box>
    </Box>
  );
}
