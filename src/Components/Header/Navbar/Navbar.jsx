import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

export default function Navbar({ width }) {
  return (
    <Box
      width={width}
      height="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Button
        href="/"
        variant="contained" color="primary"
      >
        Home
      </Button>
      <Button href="/blogs" variant="contained" color="primary" >
        Blogs
      </Button>
    </Box>
  );
}
