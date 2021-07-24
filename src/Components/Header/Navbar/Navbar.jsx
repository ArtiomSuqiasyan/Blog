import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function Navbar() {
  return (
    <Box width="50%" height="100px" textAlign="center" mt="50px">
      <Button href="google.com" variant="outlined" color="secondary">
            Blogs
          </Button>
    </Box>
  );
}
