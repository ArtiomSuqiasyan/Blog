import SignIn from "./SignIn";

export default function Authorization({ logged, authorization }) {
  return (
    <>
      <SignIn logged={logged} authorization={authorization} />
    </>
  );
}
