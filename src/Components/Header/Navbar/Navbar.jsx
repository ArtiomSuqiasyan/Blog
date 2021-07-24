import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function Navbar({ width }) {
  return (
    <Box
      width={width}
      height="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Button href="/" variant="outlined" color="secondary">
        Home
      </Button>
      <Button href="google.com" variant="outlined" color="secondary">
        Blogs
      </Button>
    </Box>
  );
}
