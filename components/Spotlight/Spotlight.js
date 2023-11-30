import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export function Spotlight({
  image,
  artist,
  handleToggleFavorite,
  slug,
  isFavorite,
}) {
  return (
    <>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`Picture of the Artist`}
      />
      <figcaption>by {artist}</figcaption>
      <FavoriteButton
        isFavorite={isFavorite}
        slug={slug}
        onToggleFavorite={() => handleToggleFavorite(slug)}
      ></FavoriteButton>
    </>
  );
}
