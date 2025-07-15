import { Link } from "react-router-dom";
import imdb from "../assets/images/imdb.png";
import rot_tomato from "../assets/images/rotten_tomato.png";
import Heart from "../assets/images/Heart.svg";
import Heart_Active from "../assets/images/Heart_active.svg";
import { addFavourites } from "../services/userServices";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";
// import Modal from "./Modal";
// import ReviewForm from "./ReviewForm";

export function MovieCard({
  id,
  title,
  releaseDate,
  posterUrl,
  voteAverage,
  favourite,
}) {
  const { user, token, refreshUser } = useAuth();
  const rating = (voteAverage * 10).toFixed(1);
  const [newFav, setNewFav] = useState(favourite);
  const [disableButton, setDisableButton] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleFavourite = async (id) => {
    console.log("Favourite::", favourite);
    setDisableButton(true);

    if (!user) {
      setDisableButton(false);
      return toast.error("Login to like movies");
    }
    let movieId = id;

    let feedback = await addFavourites({ movieId }, token);
    if (feedback.status === 201) {
      toast.success("Movie added to favourites");
    }
    if (feedback.status === 200) {
      toast.warning("Movie removed from favourites");
    }

    refreshUser(user);
    setDisableButton(false);
  };

  useEffect(() => {
    console.log("Favourite state updated:", newFav);
    setNewFav(favourite);
  }, [user]);

  return (
    <>
      {/* {reviewVisible && (
        <Modal>
          <ReviewForm onSubmit={() => console.log()} />
        </Modal>
      )} */}

      <div className="relative">
        <button
          className="absolute top-2 right-2 p-1 rounded-full text-gray-900 cursor-pointer bg-black/30 hover:scale-110"
          onClick={() => handleFavourite(id)}
          disabled={disableButton}
        >
          <img
            src={newFav ? Heart_Active : Heart}
            alt="heart icon"
            title={favourite ? "Unlike" : "Like"}
            className="size-8"
          />
        </button>
        <button
          onClick={() => {setReviewVisible(!reviewVisible); console.log("Review::", reviewVisible)}}
          className="w-6 absolute right-1 top-[19.4rem]"
        >
          <img src="/review.svg" alt="review" title="Review Movie" />
        </button>

        <Link to={`/movies/${id}`} className="w-full shadow-2x">
          <div className="flex flex-col justify-center gap-3  bg-gray-100">
            <img src={posterUrl} alt={title} className="w-full h-auto" />
            <p className="text-xs font-bold text-gray-400 ml-2">
              {releaseDate}
            </p>
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
    </>
  );
}
