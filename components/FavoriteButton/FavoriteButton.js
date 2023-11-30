export function FavoriteButton({ handleToggleFavorite, isFavorite, slug }) {
  return (
    <button onToggleFavorite={() => handleToggleFavorite(slug)}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

