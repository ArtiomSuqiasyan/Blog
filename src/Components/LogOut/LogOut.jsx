import Footer from "../../Components/Footer/Footer";
import SignIn from "../SignIn/SignIn";

export default function LogOut() {
  localStorage.clear();

  return (
    <>
      <SignIn />
      <Footer />
    </>
  );
}
