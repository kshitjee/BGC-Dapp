import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

function Logout() {
  const { logout, isAuthenticating } = useMoralis();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <button onClick={handleLogout} disabled={isAuthenticating}>
      Logout
    </button>
  );
}

export default Logout;
