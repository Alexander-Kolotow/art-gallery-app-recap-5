import { ArtPieces } from "@/components/ArtPieces/ArtPieces";
export default function RenderingArtPieces({ pictures, artPiecesInfo }) {
  return <ArtPieces pieces={pictures} artPiecesInfo={artPiecesInfo} />;
}
