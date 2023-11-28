import { ArtPieces } from "../components/ArtPieces/ArtPieces.js";
import { Spotlight } from "../components/Spotlight/Spotlight.js";

export default function SpotlightPage({ pictures }) {
  //
  const randomIndex = Math.floor(Math.random() * pictures.length);
  const randomPicture = pictures[randomIndex];

  return (
    <>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
      />
    </>
  );
}
