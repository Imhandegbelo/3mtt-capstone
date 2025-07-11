import { Link } from "react-router-dom";
import imdb from "../assets/images/imdb.png";
import rot_tomato from "../assets/images/rotten_tomato.png";
import Heart from "../assets/images/Heart.svg";
import Heart_Active from "../assets/images/Heart_active.svg";
import { addFavourites } from "../services/userServices";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

export function MovieCard({ id, title, releaseDate, posterUrl, voteAverage }) {
  const { user, token, refreshUser } = useAuth();
  const rating = (voteAverage * 10).toFixed(1);
  const [favourite, setFavourite] = useState(false);

  // const addFavourite = async (id) => {};
  const removeFavourite = async (id) => {};

  const handleFavourite = async (id) => {
    if (!user) {
      toast.error("Login to like movies");
    }
    console.log(token);
    const movieId = { id };

    const favourite = user?.favorites.includes(id);
    if (favourite) {
      await removeFavourite(movieId, token);
    } else {
      await addFavourites(movieId, token);
    }
    refreshUser(user);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 p-1 rounded-full text-gray-900 cursor-pointer bg-black/30 hover:scale-110"
        onClick={() => handleFavourite(id)}
      >
        <img
          src={favourite ? Heart_Active : Heart}
          alt="heart icon"
          className="size-8"
        />
      </button>

      <Link to={`/movies/${id}`} className="w-full shadow-2x">
        <div className="flex flex-col justify-center gap-3  bg-gray-100">
          <img src={posterUrl} alt={title} className="w-full h-auto" />
          <div className="flex justify-between items-center mx-2">
            <p className="text-xs font-bold text-gray-400">
              {releaseDate}
            </p>
            <button className="w-6" onClick={() => {}}>
              <img src="/review.svg" alt="review" title="Review Movie" />
            </button>
          </div>
          <h2 className="text-lg mx-2 font-bold text-gray-900">{title}</h2>
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
    </div>
  );
}
