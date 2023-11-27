import Image from "next/image";

export function ArtPieceDetails({ piece }) {
  return (
    <>
      <h1>{piece.title}</h1>
      <Image
        src={piece.image}
        width={500}
        height={500}
        alt={`Picture of the ${title}`}
      />
      <figcaption>by {piece.artist}</figcaption>
      <ul>
        <li>{piece.genre}</li>
        <li>{piece.year}</li>
      </ul>
    </>
  );
}
