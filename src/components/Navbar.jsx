import logo from "../assets/images/Logo.png";
import tv from "../assets/images/tv.png";
import menu from "../assets/images/menu.svg";
import { SearchBar } from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [searchQuery, onSearchQueryChange] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = "2c580b58c9354d8e7393cfd454223f73";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

  axios.get(apiUrl).then((res) => {
    setSearchedMovies(res.data.results);
  });
  const handleChange = async (event) => {
    onSearchQueryChange(event.target.value);
    setLoading(true); //start loading

    try {
      const result = await axios.get(apiUrl);

      if (result.data.results) {
        setSearchedMovies(result.data.results);
      } else {
        setSearchedMovies([]); // Clear the results if there are no matching movies
      }
    } catch (error) {
      console.error("An Error occured", error);
    } finally {
      setLoading(false); //stop loading (no results)
    }
  };

  useEffect(() => {
    if (searchQuery.length.trim === "") {
      setSearchedMovies([]);
      return;
    }
  }, [searchQuery]);

  return (
    <nav className="absolute px-2 sm:px-4 md:px-6 lg:px-24 z-10 top-0 flex justify-between text-white py-6 w-full h-20 items-center">
      <img src={tv} alt="tv-logo" className="w-8 h-8 lg:hidden" />
      <img src={logo} alt="moviebox" className="hidden lg:block" />
      <SearchBar searchQuery={searchQuery} onSearchQueryChange={handleChange} />
      <div className="flex gap-6">
        <button className="text-base font-bold items-center hidden sm:block">
          Sign in
        </button>
        <button
          onClick={""}
          className="flex w-8 h-8 bg-rose-700 rounded-full items-center"
        >
          <img src={menu} alt="menu" className="h-6 w-6 mx-auto" />
        </button>
      </div>
      <div
        className={`${
          loading ? "block" : "hidden"
        } absolute w-full top-[6rem] right-0`}
      >
        {loading ? (
          <div className="w-full p-2 md:p-6 z-10 bg-white">
            <div className="flex justify-center items-center gap-6">
              <div className="animate-ping">
                <div className="rounded-full h-5 w-5 lg:h-10 lg:w-10 bg-rose-700"></div>
              </div>
              <h2 className="text-rose-500 text-2xl font-bold">Loading ...</h2>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col divide-2 divide-stone-900 gap-4 w-full absolute left-0 top-[5rem] ${
              searchQuery.length > 0
                ? "pt-20 h-[calc(100vh-40px)] bg-white"
                : "top-[67px] h-0"
            }  z-10 px-2 md:px-6 py-2 custom-scrollbar overflow-y-scroll  `}
          >
            {searchedMovies?.map((movie) => (
              <div className="flex gap-6">
                <div className="w-10 md:w-20 ">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl text-stone-900">{movie.title}</h3>
                  <p className="text-rose-700">{movie.release_date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
