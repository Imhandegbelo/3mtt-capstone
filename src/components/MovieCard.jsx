import { Link } from "react-router-dom";
import imdb from "../assets/images/imdb.png";
import rot_tomato from "../assets/images/rotten_tomato.png";
import Heart from "../assets/images/Heart.svg";
import { useState } from "react";

export function MovieCard({ id, title, releaseDate, posterUrl, voteAverage }) {
  const rating = (voteAverage * 10).toFixed(1);
  const [favourite, setFavourite] = useState(false);

  return (
    <Link to={`/movies/${id}`} className="w-full shadow-2x">
      <div
        data-testid="movie-card"
        className="relative flex flex-col justify-center gap-3  bg-gray-100"
      >
        <img
          src={Heart}
          alt="heart"
          className={`absolute top-2 right-2 h-8 w-8 p-1 rounded-full text-gray-900 hover:bg-rose-500 ${
            favourite ? "bg-rose-500" : "bg-gray-900"
          }`}
          onClick={(e) => setFavourite(!favourite)}
        />
        <img
          data-testid="movie-poster"
          src={posterUrl}
          alt={title}
          className="w-full h-auto"
        />
        <p
          data-testid="movie-release-date"
          className="text-xs mx-2 font-bold text-gray-400"
        >
          {releaseDate}
        </p>
        <h2
          data-testid="movie-title"
          className="text-lg mx-2 font-bold text-gray-900"
        >
          {title}
        </h2>
        <div className="inline-flex justify-between px-2">
          <div className="flex gap-2.5 items-center">
            <img src={imdb} alt="imdb" className="h-4" />
            <small className="font-normal text-xs text-gray-900">
              {rating} / 100
            </small>
          </div>
          <div className="flex gap-2.5 items-center">
            <img src={rot_tomato} alt="rotten_tomato" className="h-4" />
            <small className="font-normal text-xs text-gray-900">
              {Math.floor(Math.random() * 30 + 70)}%
            </small>
          </div>
        </div>
        <div className="flex wrap items-cente text-stone-500">
          {/* {movies?.genres?.map((genre, index) => (
            <div
              key={index}
              className="sm:ml-3 text-xs text-gray-400 lg:text-base font-bold leading-1"
            >
              {genre.name}
            </div>
          ))} */}
        </div>
      </div>
    </Link>
  );
}
