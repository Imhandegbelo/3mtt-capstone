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
  // const [writers, setWriters] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`;
    axios
      .get(apiUrl)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  useEffect(() => {
    // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    const genreUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`;
    axios
      .get(genreUrl)
      .then((res) => {
        const genreArray = [];
        res.data.genres.forEach((genre) => {
          genreArray[genre.id] = genre.name;
        });
        setGenre(genreArray);
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  }, []);

  useEffect(() => {
    // https://api.themoviedb.org/3/movie/157336?api_key=API_KEY&append_to_response=videos
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
      .then((response) => {
        let arr = response.data.crew.filter(({ job }) => job === "Director");
        arr.forEach((crew) => setDirectors(crew.name));
      })
      .catch((error) => {
        console.log("Error fetching credits", error);
      });
  });

  document.title = `${movie?.title}`;
  const releaseDate = new Date(movie?.release_date);
  const movieGenre = movie?.genre;

  return (
    <>
      {/* <SingleMovieNav/> */}
      <div className="flex font-Poppins mx-w-[1440px] mx-auto">
        <div className="w-full basis-1/12 md:block md:basis-2/12">
          <MovieSidebar id={id} />
        </div>
        {!movie ? (
          <div className="basis-11/12 md:basis-10/12">
            <Loading text={"Loading"} />
          </div>
        ) : (
          <div className="px-6 md:p-3 w-full md:basis-10/12 sm:mx-2 my-9">
            <iframe
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
              titte={movie?.title}
              allowFullScreen
              className="rounded-2xl border w-full h-[450px]"
            ></iframe>
            {/* <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
              className="rounded-3xl h-[450px] w-full object-cover object-center"
            /> */}
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex justify-between text-stone-700">
                <div className="flex flex-wrap gap-2">
                  <h2 className="text-lg md:text-xl sm:text-[23px]">
                    {movie?.title}
                  </h2>
                  <br />
                  <span className="text-xl sm:text-2xl hidden lg:inline-block">
                    .
                  </span>
                  <p className="text-md md:text-lg">
                    {" "}
                    {releaseDate.toUTCString().slice(5, 16)}
                  </p>
                  <span className="text-xl sm:text-2xl hidden lg:inline-block">
                    .
                  </span>
                  <p className="text-md md:text-lg">
                    {`${movie?.runtime}mins`}
                  </p>
                  <div className="flex wrap items-center">
                    {movie?.genres.map((genre, index) => (
                      <div
                        key={index}
                        className="flex justify-between sm:ml-3 text-xs text-rose-700 lg:text-base font-bold leading-1"
                      >
                        {genre.name}
                      </div>
                    ))}{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-2 item-center">
                  <img src={star} alt="star" className="w-4 h-4 md:w-7 h-7" />{" "}
                  <p className="text-sm text-gray-300">
                    {movie?.vote_average.toFixed(1)}{" "}
                    <span className="text-stone-700">
                      | {movie?.vote_count}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex md:flex-row gap-4 md:gap-2">
                <div className="flex flex-col gap-4 w-full md:w-2/3 text-sm sm:text-md md:text-lg">
                  <p data-testid="movie-overview" className="text-zinc-800">
                    {movie?.overview}
                  </p>
                  <div className="grid sm:gap-2 md:gap-3 lg:gap-4">
                    <p className="">
                      Director:{" "}
                      <span className="text-rose-700">{directors}</span>{" "}
                    </p>
                    <p className="">
                      Writers:{" "}
                      <span className="text-rose-700">
                        {" "}
                        Jim Cash, Jack Epps Jr, Peter Kosinski
                      </span>{" "}
                    </p>
                    <p className="">
                      Writers:{" "}
                      <span className="text-rose-700">
                        {" "}
                        Tom Cruise, Jennifer Connelly
                      </span>{" "}
                    </p>
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
