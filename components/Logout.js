import { useMoralis } from "react-moralis";

function Logout() {
  const { logout, isAuthenticating } = useMoralis();

  return (
    <button onClick={() => logout()} disabled={isAuthenticating}>
      Logout
    </button>
  );
}

export default Logout;
