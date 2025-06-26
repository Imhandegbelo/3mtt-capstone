export default function Genre({ movies, genres }) {
  return (
    <small className="text-neutral-700 font-bold text-xs">
      {movies.genre_ids.map((genreId) => genres[genreId].join(", "))}
    </small>
  );
}

