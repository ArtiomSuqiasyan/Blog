import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { lorem } from "../../Constants/Lorem";
import { Box } from "@material-ui/core";

export default function About() {
  return (
    <>
      <Header />
      <Box width="75%" margin="0 auto">
        <h1>About us</h1>
        <p>{lorem}</p>
      </Box>
      <Footer />
    </>
  );
}
