import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import star from "../assets/images/Star.png";
import ticket from "../assets/images/Two Tickets.png";
import list from "../assets/images/List.png";
import grouppic from "../assets/images/grouppic.png";
import Button from "../components/SingleMovieButtons";
import MovieSidebar from "../components/MovieSidebar/MovieSidebar";
import Footer from "../components/Footer";
import SingleMovieNav from "../components/SingleMovieNav";

export function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [writers, setWriters] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("Response:::", res);
        setMovie(res.data);
        let directorList = res.data.credits.crew.filter(
          ({ job }) => job === "Director"
        );
        setDirectors(directorList);
        let writerList = res.data.credits.crew.filter(
          ({ department }) => department === "Writing"
        );
        setWriters(writerList);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  document.title = `${movie?.title}`;
  const releaseDate = new Date(movie?.release_date);
  const movieGenre = movie?.genre;

  return (
    <>
      <div className="flex font-Poppins max-w-[1440px] mx-auto">
        <div className="w-full h-screen basis-1/12 md:block md:basis-2/12">
          <div className="w-full border-4 fixed">
            <MovieSidebar id={id} />
          </div>
        </div>
        {!movie ? (
          <div className="basis-11/12 md:basis-10/12">
            <Loading text={"Loading"} />
          </div>
        ) : (
          <div className="px-6 md:p-3 basis-11/12 md:basis-10/12 sm:mx-2 my-9 overflow-auto">
            <iframe
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
              title={movie?.title}
              allowFullScreen
              className="rounded-2xl border w-full h-[450px]"
            ></iframe>
            <div className="mt-6 flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl sm:text-md">
                  {movie?.title}
                </h2>
                <p className="inline-flex gap-2 w-full">
                  Runtime: <span>{`${movie?.runtime}mins`}</span>
                </p>
                <p className="inline-flex gap-2 w-full">
                  Release date:{" "}
                  <span>{releaseDate.toUTCString().slice(5, 16)}</span>
                </p>
                <div className="inline-flex gap-2 items-center w-full">
                  <p>Rating:</p>{" "}
                  <img src={star} alt="star" className="w-4 h-4 md:w-7 h-7" />
                  <p className="text-sm text-gray-400">
                    {movie?.vote_average.toFixed(1)}{" "}
                    <span className="text-stone-700">
                      | {movie?.vote_count}
                    </span>
                  </p>
                </div>
                <p className="inline-flex flex-wrap items-center gap-2">
                  Genre:{" "}
                  {movie?.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="flex justify-between sm:ml-3 text-xs text-rose-700 lg:text-base font-bold leading-1"
                    >
                      {genre.name}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex flex-col md:flex md:flex-row gap-4 md:gap-2">
                <div className="flex flex-col gap-4 w-full md:w-2/3 text-sm sm:text-md md:text-lg">
                  <p className="text-zinc-800">{movie?.overview}</p>
                  <div className="grid sm:gap-2 md:gap-3 lg:gap-4">
                    <p className="">
                      Director(s):{" "}
                      {directors.map((director, index) => (
                        <span key={`dir-${index}`} className="text-rose-700">
                          {director.name + " - "}
                        </span>
                      ))}
                    </p>
                    <p className="">
                      Writers:{" "}
                      {writers.map((writer, index) => (
                        <span key={`writer-${index}`} className="text-rose-700">
                          {writer.name + " - "}
                        </span>
                      ))}
                    </p>
                    {/* <p className="">
                      Writers:{" "}
                      <span className="text-rose-700">
                        {" "}
                        Tom Cruise, Jennifer Connelly
                      </span>{" "}
                    </p> */}
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 gap-4">
                  <Button title="See Showtimes" icon={ticket} type="primary" />
                  <Button
                    title="More watch options"
                    icon={list}
                    type="secondary"
                  />
                  <div className="flex gap-2">
                    <img src={grouppic} alt="group photo" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
