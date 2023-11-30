import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export function ArtPiecePreview({ artist, title, image, slug, isFavorite, handleToggleFavorite }) {
  return (
    <>
      <h1>{title}</h1>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          width={500}
          height={500}
          alt={`Picture of the ${title}`}
        />
      </Link>
      <figcaption>by {artist}</figcaption>
      <FavoriteButton
  isFavorite={isFavorite}
  slug={slug}
  handleToggleFavorite={() => handleToggleFavorite(slug)}
></FavoriteButton>
    </>
  );
}
