import { useRouter } from "next/router";
import { ArtPieceDetails } from "../../components/ArtPieceDetails/ArtPieceDetails.js";

export default function detailPage({ pictures }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pictures.find((piece) => piece.slug === slug);
  console.log(selectedPiece);

  return <>{selectedPiece && <ArtPieceDetails piece={selectedPiece} />}</>;
}
