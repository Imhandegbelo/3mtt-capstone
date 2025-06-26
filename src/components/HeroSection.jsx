import DescriptionBox from "../components/DescriptionBox";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function HeroSection({ moviesArray }) {
  const [movieIndex, setMovieIndex] = useState(0);
  const hero_movies = moviesArray.slice(0, 5);

  useEffect(() => {
    const timer_update = setTimeout(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % hero_movies.length);
    }, 10000);

    return () => clearTimeout(timer_update);
  }, [movieIndex, hero_movies]);

  return (
    <header className="h-37.5 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ease-out">
        {hero_movies.length > 0 && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[600px] bg-black bg-opacity-70"></div>
            <Navbar />

            <div className="absolute h-full flex items-end sm:items-center p-6 lg:pl-24">
              <DescriptionBox
                title={hero_movies[movieIndex]?.title}
                description={hero_movies[movieIndex]?.overview}
                link={`/movies/${hero_movies[movieIndex]?.id}`}
                rating={hero_movies[movieIndex]?.vote_average}
              />
            </div>
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${hero_movies[movieIndex].backdrop_path}`}
              className="h-[600px] w-full object-cover object-center"
              alt={hero_movies[movieIndex].title}
            />
          </div>
        )}
        <div className="relative top-10 right-10 hidden sm:flex h-full ">
          <div className="flex flex-col gap-2 justify-center align-center w-10 items-end">
            {hero_movies.slice(0, 6).map((_, index) => (
              <div
                className="cursor-pointer text-white flex items-center gap-2 justify-start"
                key={index}
              >
                <div
                  className={` bg-white rounded-md transition-all ${
                    index === movieIndex ? "w-5 h-[3px] border" : ""
                  }`}
                />
                <p
                  className={`items-center hover:text-white hover:text-base transition-all duration-300 ${
                    index === movieIndex
                      ? "text-base font-bold leading-[14px]"
                      : "text-gray-400 text-xs font-bold leading-[14px]"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
