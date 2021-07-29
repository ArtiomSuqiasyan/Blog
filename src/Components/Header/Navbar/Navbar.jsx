import { Button } from "@material-ui/core";

export default function Navbar({ width }) {
  return (
    <>
      <Button href="/" variant="contained" color="primary">
        Home
      </Button>
      <Button href="/create-post" variant="contained" color="primary">
        Create Post
      </Button>
    </>
  );
}
