import { MovieCard } from "./MovieCard";
import right_arrow from "../assets/images/ArrowRight.svg";
import Footer from "./Footer";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export default function MovieGrid({ movies, genres }) {
  const { user } = useAuth();

  const isFavourite = (movieId) => {
    return user?.favourites.includes(movieId);
  };

  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No movies found</p>
      </div>
    );
  }

  useEffect(()=>{
    
  },[user])

  return (
    <div className="my-[70px] px-4 lg:px-12 xl:px-24">
      <div className="flex justify-between items-center mb-11">
        <h2 className="text-black text-2xl sm:text-4xl font-bold">
          Featured Movie
        </h2>
        <a
          href="#"
          className="text-rose-700 text-lg font-normal leading-normal items-center hidden sm:flex gap-2 hover:underline"
        >
          View All
          <span>
            <img src={right_arrow} alt="arrow" />
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-16v md:gap-y-14 sm:gap-6 md:gap-10 mb-16">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            genres={genres}
            favourite={isFavourite(movie.id)}
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
