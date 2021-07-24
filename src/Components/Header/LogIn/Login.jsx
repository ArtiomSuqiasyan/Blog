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
      <Button href="google.com" variant="outlined" color="secondary">
        Log in
      </Button>
    </Box>
  );
}
