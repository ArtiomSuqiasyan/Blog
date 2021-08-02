import SignIn from "../SignIn/SignIn";

export default function LogOut() {
  localStorage.removeItem("users");

  return (
    <>
      <SignIn />
    </>
  );
}
