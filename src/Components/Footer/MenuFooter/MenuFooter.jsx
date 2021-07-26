import Box from "@material-ui/core/Box";
import { Link, List, ListItem } from "@material-ui/core";

export default function MenuFooter({width}) {
  return (
    <Box width={width}
    height="100%"
    display="flex"
    justifyContent="space-around"
    alignItems="center">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <Link href="/about" color="initial">About us</Link>
        </ListItem>
        <ListItem>
          <Link href="/privacy" color="initial">Privacy policy</Link>
        </ListItem>
        <ListItem>
          <Link href="/terms" color="initial">Terms of use</Link>
        </ListItem>
      </List>
    </Box>
  );
}
