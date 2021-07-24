import Box from "@material-ui/core/Box";
import { Link, List, ListItem } from "@material-ui/core";

export default function MenuFooter({width}) {
  return (
    <Box width={width}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <Link href="#">About us</Link>
        </ListItem>
        <ListItem>
          <Link href="google.com">Privacy policy</Link>
        </ListItem>
        <ListItem>
          <Link href="google.com">Terms of use</Link>
        </ListItem>
      </List>
    </Box>
  );
}
