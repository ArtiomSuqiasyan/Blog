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
      <Button href="/login" variant="contained" color="primary">
        Log in
      </Button>
    </Box>
  );
}
