import { useRouter } from "next/router";
import { ArtPieceDetails } from "../../components/ArtPieceDetails/ArtPieceDetails.js";

export function detailPage(pieces) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  return <>{selectedPiece && <ArtPieceDetails piece={selectedPiece} />}</>;
}
