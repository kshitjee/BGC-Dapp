import React from "react";
import classes from "./Login.module.css";
import Image from "next/image";
import icon from "./Images/background-check-img.jpeg";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

function Login() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();
  const router = useRouter();

  // creates a new User, stores in Moralis DB
  async function handleCustomLogin() {
    // creating new user object in DB
    const user = await authenticate({
      provider: "web3Auth",
      clientId:
        "BPWE8cE2qJ2Z2J853SPAVOht8YkoSlCEjsDSTFbdDxa-UFlGkkOX3-YYobZm9tVhIVdH-Wbh2Z1jbkzSD0E-55o",
      chainId: Moralis.Chains.ETH_RINKBEY,
      loginMethodsOrder: ["google"],
      theme: "dark",
    });

    // handling invalid session token error
    function handleMoralisError(err) {
      switch (err.code) {
        case Moralis.Error.INVALID_SESSION_TOKEN:
          Moralis.User.logOut();
          // If web browser, render a log in screen
          // If Express.js, redirect the user to the log in route
          break;

        // Other Moralis API errors that you want to explicitly handle
      }
    }

    console.log("hello");
    router.push("/initiate-bg-check");
  }

  return (
    <div className={classes.login_container}>
      <div className={classes.login_card}>
        <div className={classes.logo}>
          <Image src={icon} width={100} height={100} />
        </div>
        <div>
          {!isAuthenticating && <p>Please Login or Register</p>}
          {isAuthenticating && <p>Authenticating</p>}
          {authError && (
            <p className={classes.error}>{JSON.stringify(authError.message)}</p>
          )}
        </div>
        <div className={classes.sign_in_container}>
          <button onClick={handleCustomLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
