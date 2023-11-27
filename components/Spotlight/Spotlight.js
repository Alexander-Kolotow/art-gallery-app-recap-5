import Image from "next/image";

export function Spotlight({ image, artist}) {
    return (
        <>
        <Image
        src={image}
        width={500}
        height={500}
        alt={`Picture of the Artist`}
      />
      <figcaption>by {artist}</figcaption>
        </>
    );
}