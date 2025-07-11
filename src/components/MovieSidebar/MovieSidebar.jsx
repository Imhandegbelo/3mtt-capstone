import { Link, NavLink } from "react-router-dom";
import images from "../images";
import SideLink from "./SideLink";
import {useAuth} from "../../context/authContext"

export default function MovieSidebar({ id }) {
  const { user, logout } = useAuth();
  const links = [
    { title: "Home", img: images.home, path: "/" },
    { title: "Favourite", img: images.projector, path: "/favourite" },
    { title: "TV Shows", img: images.tvshows, path: "#" },
    { title: "Upcoming", img: images.calender, path: "#" },
  ];
  return (
    <div className="flex align-between absolute z-10 w-1/12 md:block md:w-2/12 md:rounded-r-[2.5rem] py-4 left-0 border-r-2 border-rose-500 h-screen">
      <button
        // onClick={logout}
        className="absolute z-50 -right-3 bg-rose-500 text-white py-1 px-3 rounded-full font-black"
      >
        &#9002;
      </button>
 
      <div className="flex flex-col gap-6 pt-5">
        <div className="ml-2 md:ml-4">
          <Link to="/" className="inline-flex gap-4 items-center">
            <img src={images.tv} alt="tv-logo" className="size-8" />
            <h2 className="text-xl text-slate-900 font-bold hidden lg:flex">
              Moviebox
            </h2>
          </Link>
        </div>
        <div className="hidden sm:flex flex-col text-neutral-600">
          {links.map((link) => (
            <SideLink path={link.path} title={link.title} img={link.img} />
          ))}
        </div>
        {/* <div className="hidden lg:flex flex-col gap-4 border border-rose-500 bg-rose-50/50 md:w-4/5 py-6 px-4 mx-auto rounded-3xl">
          <h3 className="text-zinc-800/80 text-base leading-none font-semibold">
            Play movie quizes and earn free tickets
          </h3>
          <p className="text-stone-500 text-xs leading-tight font-medium">
            50k people are playing now
          </p>
          <button className="flex justify-center text-xs text-rose-700 font-medium bg-rose-100 rounded-[30px] px-4 py-1">
            Start playing
          </button>
        </div> */}
      </div>
      <SideLink title="Logout" path="#" img={images.logout} />
      <button
            onClick={logout}
            className="inline-flex items-center md:gap-3 lg:gap-4 pl-1 md:pl-6 lg:pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
          >
            <img src={img} alt="home" className="" />{" "}
            <p className="hidden lg:block">{title}</p>
          </button>
      <button className="flex items-center w-full gap-2 hover:bg-rose-100">
        <img src={images.logout} alt="settings" className="size-6" />
        <span className="hidden lg:inline-block text-sm text-rose-600">
          Logout
        </span>
      </button>
    </div>
  );
}
