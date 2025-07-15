import { Link, NavLink } from "react-router-dom";
import images from "../images";
import SideLink from "./SideLink";
import { useAuth } from "../../context/authContext";

export default function MovieSidebar({ id }) {
  const { user, logout } = useAuth();
  const links = [
    { title: "Home", img: images.home, path: "/" },
    { title: "Favourite", img: images.projector, path: "/favourites" },
    { title: "TV Shows", img: images.tvshows, path: "#" },
    { title: "Upcoming", img: images.calender, path: "#" },
  ];
  return (
    <div className="flex justify-between absolute z-10 w-1/12 md:block md:w-2/12 md:rounded-r-[2.5rem] py-4 left-0 border-r-2 border-rose-500 h-screen">
      <button
        // onClick={logout}
        className="absolute z-50 -right-3 bg-rose-500 text-white py-1 px-3 rounded-full font-black"
      >
        &#9002;
      </button>

      <div className="flex flex-col gap-6 pt-5">
        <div className="ml-2 md:ml-4">
          <Link to="/" className="inline-flex gap-4 items-center">
            <img src={images.tv} alt="tv-logo" className="size-6" />
            <h2 className="text-lg text-slate-900 font-bold hidden lg:flex">
              Moviebox
            </h2>
          </Link>
        </div>
        <div className="hidden sm:flex flex-col text-neutral-600">
          {links.map((link) => (
            <SideLink path={link.path} title={link.title} img={link.img} />
          ))}
        </div>
      </div>
      
      <button className="flex items-center w-full gap-2 hover:bg-rose-100">
        <img src={images.logout} alt="settings" className="size-6" />
        <span className="hidden lg:inline-block text-sm text-rose-600">
          Logout
        </span>
      </button>
    </div>
  );
}
