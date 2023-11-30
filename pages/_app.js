import GlobalStyle from "../styles";
import { useState } from "react";
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
  // initialize the local state with an empty array
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const {
    data: pictures,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) => {
      
      const piece = prevArtPiecesInfo.find((piece) => piece.slug === slug);

      if (piece) {
        return prevArtPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      }
      
      return [...prevArtPiecesInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          pictures={pictures}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </SWRConfig>
    </Layout>
  );
}
