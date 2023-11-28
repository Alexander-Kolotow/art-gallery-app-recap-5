import Image from "next/image";
import Link from "next/link";

export function ArtPiecePreview({ artist, title, image, slug }) {
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
    </>
  );
}
