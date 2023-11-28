import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { Layout } from "@/components/Layout/Layout";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const {
    data: pictures,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pictures);
  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} pictures={pictures} />
      </SWRConfig>
    </Layout>
  );
}

/* function MyApp({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    // Your data fetching logic goes here
    // Example: fetch('/api/art-pieces').then(response => setArtPieces(response));
  }, []);

  return (
    <AppContext.Provider value={{ artPieces, setArtPieces }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
} */
