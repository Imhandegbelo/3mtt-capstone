import { useNavigate } from "react-router-dom";
import search from "../assets/images/search.svg";
import { useState } from "react";

export function SearchBar() {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2.5">
      <input
        type="text"
        placeholder="Search"
        className=" min-w-[240px] w-[60%] max-w-[500px] md:w-[60%] py-1.5 px-2.5 rounded-md border-2 border-gray-300 justify-between items-center gap-2.5 inline-flex bg-transparent caret-white placeholder-white text-white text-base font-normal leading-normal focus:outline-0"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="py-1.5 px-2.5 rounded-md border-2" type="submit">
        <img src={search} alt="search" />
      </button>
    </form>
  );
}
