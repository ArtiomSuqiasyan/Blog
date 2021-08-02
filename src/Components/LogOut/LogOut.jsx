import SignIn from "../SignIn/SignIn";

export default function LogOut() {
  localStorage.removeItem("currentUser");

  return (
    <>
      <SignIn />
    </>
  );
}
