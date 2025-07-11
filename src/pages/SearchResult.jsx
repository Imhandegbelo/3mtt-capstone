import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import MovieGrid from "../components/MovieGrid";

function SearchResult() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams(window.location.search).get("query");
    if (!query) {
      setMovies([]);
      setLoading(false);
      return;
    }

    
    setLoading(false);
  });

  return loading ? (
    <Loading />
  ) : (
    <div className="px-4 sm:px-6 lg:px-24">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {movies.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <MovieGrid movies={movies} genres={genres} />
      )}
    </div>
  );
}

export default SearchResult;
