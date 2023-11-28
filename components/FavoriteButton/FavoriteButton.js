export function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

// return (
//   <ul>
//     {pictures.map(({ slug, name, year }) => {
//       // find the movie in the state and destructure the isFavorite property
//       // if it is not in the state, default isFavorite to false
//       const { isFavorite } = pictures.find((piece) => piece.slug === slug) ?? {
//         isFavorite: false,
//       };

//       return (
//         <li key={slug}>
//           {name} ({year})
//           <button type="button" onClick={handleToggleFavorite(slug)}>
//             {isFavorite ? "Remove from favorites" : "Add to favorites"}
//           </button>
//         </li>
//       );
//     })}
//   </ul>
// );
