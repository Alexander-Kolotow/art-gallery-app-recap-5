import { ArtPieces } from "../components/ArtPieces/ArtPieces.js";
import { Spotlight } from "../components/Spotlight/Spotlight.js";

export default function SpotlightPage({
  pictures,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  //
  const randomIndex = Math.floor(Math.random() * pictures.length);
  const randomPicture = pictures[randomIndex];

  const { isFavorite } = artPiecesInfo.find(
    (pieces) => pieces.slug === randomPicture.slug
  ) ?? { isFavorite: false };

  return (
    <>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
        slug={randomPicture.slug}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}