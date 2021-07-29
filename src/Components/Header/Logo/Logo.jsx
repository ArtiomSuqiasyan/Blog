import logo from "../../Images/logo.png";
import Box from "@material-ui/core/Box";

export default function Logo({ width }) {
  return (
    <Box>
      <img src={logo} alt="Logo" />
    </Box>
  );
}
