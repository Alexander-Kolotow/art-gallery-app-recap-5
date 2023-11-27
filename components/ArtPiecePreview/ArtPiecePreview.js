import Image from "next/image";

export function ArtPiecePreview({ artist, title, image }) {
  return (
    <>
      <h1>{title}</h1>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`Picture of the ${title}`}
      />
      <figcaption>by {artist}</figcaption>
    </>
  );
}
