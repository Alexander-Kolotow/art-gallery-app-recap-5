export function FavoriteButton({ handleToggleFavorite, isFavorite }) {
  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}



/*export function FavoriteButton({ isFavorite, handleToggleFavorite }) {

  // in der Konsole testen, ob er sich den slug ziehen kann und ob die Funktion definiert ist.
  const handleClick = () => {
    console.log("handleToggleFavorite:", handleToggleFavorite);
    console.log("slug:", slug);
    handleToggleFavorite(slug);
  }; 

  return (
    <button onClick={handleClick}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}*/


