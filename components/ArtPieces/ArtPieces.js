import { ArtPiecePreview } from "../ArtPiecePreview/ArtPiecePreview.js";

export function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                title={piece.name}
                image={piece.imageSource}
                artist={piece.artist}
                slug={piece.slug}
              ></ArtPiecePreview>
            </li>
          );
        })}
      </ul>
    </>
  );
}
