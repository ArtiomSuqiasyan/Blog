import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function LogIn({width}) {
  return (
    <Box
    width={width}
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    >
      {localStorage.getItem("user") ? 
      <Button href="/logout" variant="contained" color="primary">
      LogOut
      </Button> 
      : 
      <Button href="/login" variant="contained" color="primary">
      LogIn
      </Button> }
    </Box>
  );
}
