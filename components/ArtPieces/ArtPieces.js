import { ArtPiecePreview } from "../ArtPiecePreview/ArtPiecePreview.js";

export function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
          ></ArtPiecePreview>
        );
      })}
    </>
  );
}
