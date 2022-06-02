import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="KvVxjZkZnuMdbyIQvgW1YjRJw9sAyZUr2SUOMr92"
      serverUrl="https://hgifqgo45pby.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
