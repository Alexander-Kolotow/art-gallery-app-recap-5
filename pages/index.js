import useSWR from "swr";
import { ArtPieces } from "../components/ArtPieces/ArtPieces.js";
import { Spotlight } from "../components/Spotlight/Spotlight.js";
import Link from "next/link.js";

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

export default function HomePage() {
  const {
    data: pictures,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  //
  const randomIndex = Math.floor(Math.random() * pictures.length);
  const randomPicture = pictures[randomIndex];

  return (
    <>
      <ArtPieces pieces={pictures}/>
      <Spotlight image={randomPicture.imageSource}
            artist={randomPicture.artist}/>
    </>
  );
}
