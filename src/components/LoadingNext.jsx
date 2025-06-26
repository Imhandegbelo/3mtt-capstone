import React from "react";
import { MovieCard } from "./MovieCard";

export default function LoadingNext() {
  return (
    <div className="my-[70px] px-4 md:px-24">
      <div className="flex justify-between items-center mb-[44px]">
        <h2 className="h-4 w-8"></h2>
        <a
          href="#"
          className="text-rose-700 text-lg font-normal leading-normal items-center hidden sm:flex gap-2 hover:underline"
        >
          View All
          <span></span>
        </a>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 md:gap-y-14 sm:gap-6 md:gap-10">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            genres={genres}
            movies={movie}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
