import imdb from "../assets/images/imdb.png";
import rotten_tomato from "../assets/images/rotten_tomato.png";
import play from "../assets/images/Play.svg";
import { Link } from "react-router-dom";

export default function DescriptionBox(props) {
  const { title, rating, description, link } = props;

  return (
    <div className="flex relative top-0">
      <div className=" flex flex-col gap-4 w-full sm:top-1/3 align-left text-white sm:w-3/5 md:w-3/5 lg:w-2/5">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
        <div className="flex gap-5 sm:gap-10">
          <div className="flex gap-2.5 items-center">
            <img src={imdb} alt="imdb" className="h-4" />
            <small className="text-xs font-normal">{rating} / 10</small>
          </div>
          <div className="flex gap-2.5 items-center">
            <img src={rotten_tomato} alt="rotten_tomato" className="h-4" />
            <small className="text-xs font-normal">
              {Math.floor(Math.random() * 30 + 70)}%
            </small>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">{description}</p>
        </div>
        <div>
          <Link
            to={link}
            className="inline-flex rounded rounded-6 items-center font-medium leading-normal text-white gap-2 px-4 py-1.5 transition duration-150 ease-in-out bg-rose-700 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={play} alt="play" /> WATCH TRAILER
          </Link>
        </div>
      </div>
    </div>
  );
}
