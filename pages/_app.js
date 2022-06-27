import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="eWgF6hJUPK14XZCfttLTsYw4yxITR3If5CLfFctR"
      serverUrl="https://kbuw5v7jxsxa.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
