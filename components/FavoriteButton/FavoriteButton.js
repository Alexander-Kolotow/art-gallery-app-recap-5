export function FavoriteButton({ handleToggleFavorite, isFavorite, slug }) {

  const handleClick = () => {
    handleToggleFavorite(slug);
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}


