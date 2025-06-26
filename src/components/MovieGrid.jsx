import { MovieCard } from "./MovieCard";
import right_arrow from "../assets/images/ArrowRight.svg";
import Footer from "./Footer";

export default function MovieGrid({ movies, genres }) {
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
