import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { lorem } from "../../Constants/Lorem";
import { Box } from "@material-ui/core";

export default function Terms() {
  return (
    <>
      <Header />
      <Box width="75%" margin="0 auto">
        <h1>Terms of use</h1>
        <p>{lorem}</p>
      </Box>
      <Footer />
    </>
  );
}
